chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.status === "ON") {
            removeAds({isRemove: true});
        } else {
            removeAds({isRemove: false});
        }
    }
);

function removeAds(response) {
    console.log('response: ', response);
    let divToRemove = document.querySelector('#adngin-mid_content-0');
    console.log('divToRemove1: ',divToRemove);
    if(response.isRemove) {
        divToRemove.classList.add('hideAdsDiv');
    } else {
        divToRemove.classList.remove('hideAdsDiv');
    }
}