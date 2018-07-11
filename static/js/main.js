var qrcode = new QRCode(document.getElementById("qr-img"), {
    width : 200,
    height : 200
});
var inputDom = document.getElementById("url-text");
chrome.tabs.getSelected(function (tab) {
    var url = tab.url;
    create_qr(url);
    inputDom.value = url;
});
inputDom.onkeydown = function (e) {
    create_qr(e.target.value);
};
function create_qr(url) {
    qrcode.makeCode(url);
}