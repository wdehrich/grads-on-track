function EnableText() {
	location.assign("Edit_Scores_Suna.html");
}

function DisableText() {
	location.assign("View_Scores_Suna.html");
}

var MyApps = document.getElementById("MyApps");

MyApps.onclick = function showAppPage() {
    location.assign("GradsOnTrack.html");
}