/**
 * Created by Leo on 16/12/18.
 */
function styleHeaderSiblings(tag, theclass) {

    if (!document.getElementsByTagName) return false;

    // get all the h1 elements using getElementsByTagName
    var headers = document.getElementsByTagName(tag);
    var elem;

    // loop through all the elements in the node set
    for (var i = 0; i < headers.length; i++){

        // find the next node in the document using nextSibling

        /*
         There’s just one drawback to this technique. If you assign a class using the className property, you
         will overwrite any classes that are already attached to that element:

         <h1>Man bites dog</h1>
         <p class="disclaimer">This is not a true story</p>

         If you run the styleHeaderSiblings function on a document containing that piece of markup, the
         class attribute of the paragraph will be changed from disclaimer to intro. What you really want to do is
         update the class attribute so that it reads disclaimer intro. That way the styles for the disclaimer and
         intro classes will both be applied.

         You can do this by concatenating a space and the name of the new class to the className property:
        */

        elem = getNextElement(headers[i].nextSibling);
        //elem.className += "intro";
        addClass(elem,theclass);

        /*
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.5em";
        */
    }

}

function getNextElement(node) {
    /*
     • Element nodes have a nodeType value of 1.
     • Attribute nodes have a nodeType value of 2.
     • Text nodes have a nodeType value of 3.
     */
    // only the next element node will be found
    if(node.nodeType == 1) {
        return node;
    }
    /*
     Page 51
     The root element is html. For all intents and purposes, the html element is the document.
     If we move one level deeper, we find two branches: <head> and <body>. They exist side by side, which
     makes them siblings. They share the same parent, <html>, but they also contain children, so they are
     parents themselves.
     The <head> element has two children: <meta> and <title> (siblings of one another). The children of
     the <body> element are <h1>, <p>, and <ul> (all siblings of one another). If we drill down deeper still, we
     find that <ul> is also a parent. It has three children, all of them <li> elements with a few class attributes.
     */

    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

addLoadEvent(function(){
    styleHeaderSiblings("h1", "intro")
});
