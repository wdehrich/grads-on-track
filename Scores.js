function EnableText() {
	location.assign("ScoresEdit.html");
}

function DisableText() {
	location.assign("ScoresView.html");
}

var MyApps = document.getElementById("MyApps");

MyApps.onclick = function showAppPage() {
    location.assign("GradsOnTrack.html");
}