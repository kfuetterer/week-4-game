var chH = [120, 100, 150, 180];

var z = "0";

window.onload = function() {

for (i = 0; i < chH.length; i++) {
	var html = "<p>" + chH[i] + "</p>";
	document.querySelector(".h" + (i + 1)).innerHTML = html;
}

for (i = 0; i < chH.length; i++) {
	var htmll = "<p>" + chH[i] + "</p>";
	document.querySelector(".h" + (i + 5)).innerHTML = htmll;

}

}

function reply_click(clicked_id) {

if (z === "0") {
	for (var i = 0; i < 4; i++) {
		if (i + 1 != clicked_id) {
			document.getElementById(i + 1).style.opacity = "0";
			document.getElementById(i + 5).style.opacity = "1";
			z = clicked_id;
		} 
		else {
			document.getElementById(i + 5).style.opacity = "0";
		}
	}
}

}

function reply_clicktwo(clicked_id) {

	for (i = 0; i < 4; i++) {
		if (i + 1 != z) {
			if (i + 5 != clicked_id) {
				document.getElementById(i + 5).style.opacity = "0.3";
			} 
			else {
				document.getElementById(i + 5).style.opacity = "1";
			}
		}
	}

}

function Attack() {

}
