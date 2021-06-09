var keys = document.querySelectorAll("div.keys");
var screen = document.getElementById("screen");
var screenText = "";
for (var i of keys) {
	i.addEventListener("click", function() {
		var text = this.getAttribute("data-value");	
		if (text == "=") {
			var result = eval(screenText);
			screen.innerText = result;
		}
		else if (text == "C") {
			screenText = "";
			screen.innerText = screenText;
		}
		else if(text == "sign") {
			screenText = -1 * screenText;
			screen.innerText = screenText;
		}
		else {
			screenText += text;
			screen.innerText = screenText;
		}
	});
}