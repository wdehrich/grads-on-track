var editflag = false;
function viewact(){
	document.getElementById("Edit").style.color = "black";
	document.getElementById("Edit").style.backgroundColor = "white";
	document.getElementById("View").style.color = "white";
	document.getElementById("View").style.backgroundColor = "#008CBA";
}

function editact(){
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode("add");
		btn.appendChild(t);
		btn.style.padding = "0.8em";
		btn.style.position = "relative";
		btn.style.top="6em";
		document.body.appendChild(btn);
		document.getElementById("View").style.color = "black";
		document.getElementById("View").style.backgroundColor = "white";
		document.getElementById("Edit").style.color = "white";
		document.getElementById("Edit").style.backgroundColor = "#008CBA";
	}

function scoreact(){
	document.getElementById("Myapp").style.color = "black";
	document.getElementById("Myapp").style.backgroundColor = "white";
	document.getElementById("Myscore").style.color = "white";
	document.getElementById("Myscore").style.backgroundColor = "#008CBA";
}
function appact(){
	document.getElementById("Myscore").style.color = "black";
	document.getElementById("Myscore").style.backgroundColor = "white";
	document.getElementById("Myapp").style.color = "white";
	document.getElementById("Myapp").style.backgroundColor = "#008CBA";
}