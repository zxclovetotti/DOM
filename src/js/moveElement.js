/**
 * Created by Leo on 16/12/22.
 */
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
