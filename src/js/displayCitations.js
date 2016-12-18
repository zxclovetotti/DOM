/**
 * Created by Leo on 16/11/15.
 */

function displayCitations(){
	var quotes  = document.getElementsByTagName("blockquote");

	for (var i = 0; i < quotes.length; i++) {
		//Check if cite exists or not
		if (!quotes[i].getAttribute("cite")) continue;
		var url = quotes[i].getAttribute("cite");

		var quoteChildren = quotes[i].getElementsByTagName('*');
		if (quoteChildren.length < 1) continue;
		var elem = quoteChildren[quoteChildren.length - 1];

		 var link = document.createElement("a");
		 var link_text = document.createTextNode("source");
		 link.appendChild(link_text);
		 link.setAttribute("href",url);

		 var superscript = document.createElement("sup");
		 superscript.appendChild(link);
		 elem.appendChild(superscript);

	}

}
addLoadEvent(displayCitations);


/*
function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
// get all the blockquotes
    var quotes = document.getElementsByTagName("blockquote");
// loop through all the blockquotes
    for (var i=0; i<quotes.length; i++) {
// if there is no cite attribute, continue the loop
        if (!quotes[i].getAttribute("cite")) continue;
// store the cite attribute
        var url = quotes[i].getAttribute("cite");
// get all the element nodes in the blockquote
        var quoteChildren = quotes[i].getElementsByTagName('*');
// if there are no element nodes, continue the loop
        if (quoteChildren.length < 1) continue;
// get the last element node in the blockquote
        var elem = quoteChildren[quoteChildren.length - 1];
// create the markup
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
// add the markup to the last element node in the blockquote
        elem.appendChild(superscript);
    }
}
*/

/*
 var cite_link = cite.getAttribute("cite");

 var link = document.createElement("a");

 var href = document.createTextNode(cite_link);

 var txt = document.createTextNode("Reference");

 link.setAttribute("href",cite_link);
 link.appendChild(txt);
 document.getElementsByTagName("body")[0].appendChild(link);
 */
