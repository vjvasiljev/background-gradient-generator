var _ = require('lodash');

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random");

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateRandom() {
	var rand = [];
	var col1 = "#";
	var col2 = "#";
	var string = "";
	for (var i = 0; i < 6; i++) {
		rand[i] = getRandomInt(255);
		string = rand[i].toString(16);
		if (string.length < 2) {
			string += string;
		}
		if (i < 3) {
			col1 += string;
		} else {
			col2 += string;
		}
	}
	color1.value = col1;
	color2.value = col2;
	setGradient();
}

function setGradient() {
	var col1 = color1.value;
	var col2 = color2.value;
	console.log(col1);

	body.style.background =
		"linear-gradient(to right, " +
		col1 +
		", " +
		col2 +
		")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", generateRandom);
setGradient();