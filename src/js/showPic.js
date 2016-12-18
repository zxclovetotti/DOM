/**
 * Created by Leo on 16/11/5.
 */
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/coffee.JPG");
    placeholder.setAttribute("alt","my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var desctxt = document.createTextNode("Choose an image");
    description.appendChild(desctxt);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery() {
     if (!document.getElementsByTagName) return false;
     if (!document.getElementById) return false;
     if (!document.getElementById("imagegallery")) return false;

     var gallery = document.getElementById("imagegallery");
     var links = gallery.getElementsByTagName("a");

     for (var i=0; i < links.length; i++) {
         links[i].onclick = function() {
            return showPic(this) ? false : true;
         }

         //links[i].onkeypress = links[i].onclick;
     }
}


function showPic(whichpic){
    if (!document.getElementById("placeholder")) return false;

    //DOM-Core
    //var source = whichpic.getAttribute("href");

    //HTML-DOM
    var source = whichpic.href;


    var placeholder = document.getElementById("placeholder");

    if (placeholder.nodeName != "IMG") return false;

    //DOM-Core
    //placeholder.setAttribute("src", source);

    //HTML-DOM
    placeholder.src = source;

    /*
         There are twelve possible values for nodeType, but only three of them are going to be of much
         practical use:
         • Element nodes have a nodeType value of 1.
         • Attribute nodes have a nodeType value of 2.
         • Text nodes have a nodeType value of 3.
         This means that you can target specific types of nodes in your functions. For instance, you could
         create a function that only affects element nodes.
     */


    if (document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");

        if (description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}



//window.onload = prepareGallery();
















//Learning use
/*
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}

window.onload = function() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        if (links[i].getAttribute("class") == "popup"){
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(WinURL) {
    window.open(winURL,"popup","width = 320, height = 480");
}
*/


