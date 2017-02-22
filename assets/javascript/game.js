var hp = [120, 100, 150, 180];
var ap = [4, 6, 8, 10];
var cap = [5, 10, 15, 25];

var z = "0";
var w = "0";
var a = 0;
var apb = 0;


window.onload = function() {
	for (i = 0; i < hp.length; i++) {
	var html = "<p>" + hp[i] + "</p>";
	document.querySelector(".h" + (i + 1)).innerHTML = html;
	}

	for (i = 0; i < hp.length; i++) {
		var htmll = "<p>" + hp[i] + "</p>";
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
				console.log(z);
			} 
			else {
				document.getElementById(i + 5).style.opacity = "0";
			}
		}
	}

}

function reply_clicktwo(clicked_id) {

	if (a === 0) {
		for (i = 0; i < 4; i++) {
			if (i + 1 != z) {
				if (i + 5 != clicked_id) {
					document.getElementById(i + 5).style.opacity = "0.5";
					w = clicked_id;
					console.log(w);
				} 
				else {
					document.getElementById(i + 5).style.opacity = "1";
				}
			}
		}
	}
}



function Attack() {
	a++;

	var x = parseInt(w) - 5;
	var y = parseInt(z) - 1;

	apb++;

	hp[x] = hp[x] - (ap[y] * apb);

	if (hp[x] < 0) {
		hp[x] = 0;
		a = 0;
	}

	if (hp[x] > 0) {
		hp[y] = hp[y] - cap[x];
	}
			
	if (hp[y] < 0) {
		hp[y] = 0;
			var htmlll = "<p>Game Over. You lose.</p>";
			document.querySelector("#gameover").innerHTML = htmlll;

			var htmllll = "<button class='btn btn-primary'>Restart</button>"
			document.querySelector("#restartButton").innerHTML = htmllll;
	}

	for (var i = 0; i < hp.length; i++) {
		var html = "<p>" + hp[i] + "</p>";
		document.querySelector(".h" + (i + 1)).innerHTML = html;
	}

	for (i = 0; i < hp.length; i++) {
		var htmll = "<p>" + hp[i] + "</p>";
		document.querySelector(".h" + (i + 5)).innerHTML = htmll;
	}

	var htmlllll = "<p>" + hp[y] + "</p><p>" + hp[x] + "</p>";
	document.querySelector("#pointText").innerHTML = htmlllll;

}

