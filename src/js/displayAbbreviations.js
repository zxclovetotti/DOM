/**
 * Created by Leo on 16/11/14.
 */
function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement 
		|| !document.createTextNode) return false

    var abbreviations = document.getElementsByTagName("abbr");

    if (abbreviations.length < 1) return false;

    var defs = new Array();
    /*
    document.getElementsByTagName("abbr")[0].getAttribute("title")
	"World Wide Web Consortium"

	document.getElementsByTagName("abbr")[0].lastChild.nodeValue
	"W3C"

	*/
    for (var i = 0; i < abbreviations.length; i++){
    	var current_abbr = abbreviations[i];

    	//Add this for IE6 to skip the loop
    	if (current_abbr.childNodes.length < 1) continue;

    	//definition = "World Wide Web Consortium"
        var definition = current_abbr.getAttribute("title");

        //key = W3C
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    var dlist = document.createElement("dl");

	for (key in defs){
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_txt = document.createTextNode(key);
		dtitle.appendChild(dtitle_txt);
		var ddesc = document.createElement("dd");
		var ddesc_txt = document.createTextNode(definition);
		ddesc.appendChild(ddesc_txt);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc)
	}

	// Add this for IE6 
	if (dlist.childNodes.length < 1) return false;

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);

	/*
	document.body.appendChild(header);
	document.body.appendChild(dlist);
	*/

	document.getElementsByTagName("body")[0].appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
