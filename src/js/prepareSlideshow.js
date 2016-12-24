/**
 * Created by Leo on 16/12/24.
 */
function prepareSlideshow(){
    //Make sure the browser undertands the DOM methods
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    // Make sure the elements exist
    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;

    // Apply styples to the preview image
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    // Get all the links in the left
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");

    // Attach the animation behavior to the mouseover event
    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlideshow);
