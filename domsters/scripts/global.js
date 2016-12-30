/**
 * Created by Leo on 16/12/30.
 */
// Global

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

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}

function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName('header');
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var linkurl;
        for (var i = 0; i < links.length; i++) {
            linkurl = links[i].getAttribute("href");
            if (window.location.href.indexOf(linkurl) != -1) {
                links[i].className = "here";
                /*
                 document.getElementsByTagName('header')[0].getElementsByTagName('nav')[0].
                 getElementsByTagName('a')[0].lastChild.nodeValue = "Home"
                 */
                var linktext = links[i].lastChild.nodeValue.toLowerCase();
                document.body.setAttribute("id",linktext);
            }
        }
    }
}

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    /*
     This is causing a problem now that the moveElement function is being called whenever the user
     hovers over a link. Regardless of whether or not the previous call to the function has finished moving the
     image, the function is being asked to move the same element somewhere else. In other words, the
     moveElement function is attempting to move the same element to two different places at once, and the
     movement variable has become the rope in a tug of war.
     */
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left){
        elem.style.left = "0px";
    }
    if (!elem.style.top){
        elem.style.top = "0px";
    }

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;

    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/ 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/ 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos)/ 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y)/ 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    /*
     If we do that, the clearTimeout statement won’t work; the movement variable will no longer exist.
     We can’t use a global variable. We can’t use a local variable. We need something in between. We
     need a variable that applies just to the element being moved.
     Element-specific variables do exist. In fact, we’ve been using them all the time. What I’ve just
     described is a property.

     Until now, we’ve used properties provided by the DOM: element.firstChild, element.style, and so
     on. You can also assign your own properties:

     element.property = value

     If you wanted, you could create a property called foo with a value of "bar":

     element.foo = "bar";
     */

    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("intro")) return false;
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");

    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);

    var preview = document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);


    var links = intro.getElementsByTagName("a");
    var destination;
    for (var i = 0; i < links.length; i++){
        links[i].onmouseover = function() {
            destination = this.getAttribute("href");
            if (destination.indexOf("index.html") != -1){
                moveElement("preview",0,0,5);
            }
            if (destination.indexOf("about.html") != -1){
                moveElement("preview",-150,0,5);
            }
            if (destination.indexOf("photos.html") != -1){
                moveElement("preview",-300,0,5);
            }
            if (destination.indexOf("live.html") != -1){
                moveElement("preview",-450,0,5);
            }
            if (destination.indexOf("contact.html") != -1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}

// Load events
addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);

