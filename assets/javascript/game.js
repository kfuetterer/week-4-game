var hp = [120, 100, 180, 150];
var ap = [4, 6, 8, 10];
var cap = [5, 10, 20, 15];
var characters = ["Finn", "Rey", "Kylo Ren", "Captain Phasma"];
var defeated = [0, 0, 0, 0];
var win = 0;

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

	if ((z === "0") || (w === "0")) {
		var htmlllllll = "<p>Please select a character and/or enemy.</p>";
		document.querySelector("#pointText").innerHTML = htmlllllll;
		return;
	}

	a++;

	var x = parseInt(w) - 5;
	var y = parseInt(z) - 1;

	apb++;

	hp[x] = hp[x] - (ap[y] * apb);

	if (hp[x] <= 0) {
		hp[x] = 0;
		a = 0;
		win++;
		document.getElementById("img" + w).style.opacity = "1";
		document.getElementById(w + w).style.opacity = "0.5";
		var htmlll = "<p>You defeated " + characters[x] + ". Choose another enemy.</p>";
		document.querySelector("#gameover").innerHTML = htmlll;
	}

	if (win === 3) {
		var htmlll = "<p>You Win!</p>";
		document.querySelector("#gameover").innerHTML = htmlll;

			$("#restartButton").on("click",function() {
				hp = [120, 100, 150, 180];
				ap = [4, 6, 8, 10];
				z = "0";
				w = "0";
				a = 0;
				apb = 0;
				win = 0;
				
				document.getElementById("1").style.opacity = "1";
				document.getElementById("2").style.opacity = "1";
				document.getElementById("3").style.opacity = "1";
				document.getElementById("4").style.opacity = "1";
				document.getElementById("5").style.opacity = "0";
				document.getElementById("6").style.opacity = "0";
				document.getElementById("7").style.opacity = "0";
				document.getElementById("8").style.opacity = "0";

					for (var i = 0; i < hp.length; i++) {
						var html = "<p>" + hp[i] + "</p>";
						document.querySelector(".h" + (i + 1)).innerHTML = html;
					}

					for (i = 0; i < hp.length; i++) {
						var htmll = "<p>" + hp[i] + "</p>";
						document.querySelector(".h" + (i + 5)).innerHTML = htmll;
					}

					htmlll = "<p></p>";
					document.querySelector("#gameover").innerHTML = htmlll;

					var htmlllll = "<p></p>";
					document.querySelector("#pointText").innerHTML = htmlllll;
			});
	}

	if (hp[x] >= 0) {
		hp[y] = hp[y] - cap[x];
	}
			
	if (hp[y] <= 0) {
		hp[y] = 0;
			var htmlll = "<p>Game Over. You lose.</p>";
			document.querySelector("#gameover").innerHTML = htmlll;

			var htmllll = "<button class='btn btn-primary'>Restart</button>"
			document.querySelector("#restartButton").innerHTML = htmllll;

			$("#restartButton").on("click",function() {
				hp = [120, 100, 150, 180];
				ap = [4, 6, 8, 10];
				z = "0";
				w = "0";
				a = 0;
				apb = 0;
				win = 0;
				
				document.getElementById("1").style.opacity = "1";
				document.getElementById("2").style.opacity = "1";
				document.getElementById("3").style.opacity = "1";
				document.getElementById("4").style.opacity = "1";
				document.getElementById("5").style.opacity = "0";
				document.getElementById("6").style.opacity = "0";
				document.getElementById("7").style.opacity = "0";
				document.getElementById("8").style.opacity = "0";

					for (var i = 0; i < hp.length; i++) {
						var html = "<p>" + hp[i] + "</p>";
						document.querySelector(".h" + (i + 1)).innerHTML = html;
					}

					for (i = 0; i < hp.length; i++) {
						var htmll = "<p>" + hp[i] + "</p>";
						document.querySelector(".h" + (i + 5)).innerHTML = htmll;
					}

					htmlll = "<p></p>";
					document.querySelector("#gameover").innerHTML = htmlll;

					var htmlllll = "<p></p>";
					document.querySelector("#pointText").innerHTML = htmlllll;
			});
	}

	for (var i = 0; i < hp.length; i++) {
		var html = "<p>" + hp[i] + "</p>";
		document.querySelector(".h" + (i + 1)).innerHTML = html;
	}

	for (i = 0; i < hp.length; i++) {
		var htmll = "<p>" + hp[i] + "</p>";
		document.querySelector(".h" + (i + 5)).innerHTML = htmll;
	}

	var htmlllll = "<p>You attacked " + characters[x] + " for <b>" + (ap[y] * apb) + "</b> damage.</p><p>" + characters[x] + " attacked you back for <b>" + cap[x] + "</b> damage.</p>";
	document.querySelector("#pointText").innerHTML = htmlllll;

}

