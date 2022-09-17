const textLine = document.getElementById("displayText");
var numberRandom = Math.ceil(Math.random() * 3);

function pressButton(id) {
	if (id == numberRandom) {
		textLine.innerHTML = "Winner!";
	} else {
		textLine.innerHTML = "Try again"
	}	
}