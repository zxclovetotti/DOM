/**
 * Created by Leo on 16/12/18.
 */
function styleHeaderSiblings() {

    if (!document.getElementsByTagName("h1")) return false;

    var headers = document.getElementsByTagName("h1");
    var elem;

    for (var i = 0; i < headers.length; i++){
        elem = getNextElement(headers.nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.5em";
    }

}

function getNextElement(node) {
    if(node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

addLoadEvent(styleHeaderSiblings);
