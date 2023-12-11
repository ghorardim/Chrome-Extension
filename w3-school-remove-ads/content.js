(
    () => {
        let divToRemove1 = document.querySelector('#adngin-mid_content-0');
        //let divToRemove2 = document.evaluate('/html/body/div[5]/div[1]/div[1]/div[6]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        console.log('divToRemove1: ',divToRemove1);
        //console.log('Parent divToRemove1: ',divToRemove1.parentNode);
        //console.log('divToRemove2: ',divToRemove2);
        // Check if the div element exists
        if (divToRemove1) {
            // Remove the div element from the DOM
            divToRemove1.parentNode.removeChild(divToRemove1);
        }
        /* if(divToRemove2) {
            divToRemove2.parentNode.removeChild(divToRemove2);
            //*[@id="main"]/div[8]
        } */
        let divElement = Array.from(document.querySelectorAll('a')).find(function(element) {
            return element.textContent.includes('$45 ENROLL');
        });
        console.log('divElement: ',divElement);
        let divToRemove2;
        if(divElement) {
            divToRemove2 = divElement.parentNode;
        }
        console.log('Parent divToRemove1: ',divToRemove2);
        if(divToRemove2) {
            divToRemove2.parentNode.removeChild(divToRemove2);
        }
    }
)()
