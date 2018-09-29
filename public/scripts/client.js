$(document).ready(onReady);

function onReady() {
    console.log('in JQuery');

    let orderOnlineFloatingMessage = $('#orderOnlineFloatingMessage');

    let clickHandlerOrderOnline = function () {
        console.log('init clickHandlerOrderOnline');
        window.location.href = "contactUs.html";
    }

    orderOnlineFloatingMessage.on('click', clickHandlerOrderOnline);

}