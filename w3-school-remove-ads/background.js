const extensions = "https://www.w3schools.com/";


chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === "ON" ? "OFF" : "ON";

        //const midDiv = document.getElementById('buy_course_btn').parentNode;

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });
        if (nextState === "ON") {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.insertCSS({
                files: ["remove-ads.css"],
                target: { tabId: tab.id },
            });
            // pass msg to content script to remove body ads
            await chrome.tabs.sendMessage(tab.id, {status: "ON"});
        } else if (nextState === "OFF") {
            // Remove the CSS file when the user turns the extension off
            await chrome.scripting.removeCSS({
                files: ["remove-ads.css"],
                target: { tabId: tab.id },
            });
            // pass msg to content script to add body ads
            await chrome.tabs.sendMessage(tab.id, {status: "OFF"});
        }
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});