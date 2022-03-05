
var numBoxs = 6
var colors = []
var pickedColor

var boxs = document.querySelectorAll(".box")
var rgb = document.getElementById("rgb")
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetBtn = document.querySelector("#reset")
var modeBtns = document.querySelectorAll(".mode")



init()

resetBtn.addEventListener("click", function() {
	reset()
})


function init() {

	setupModeBtns()

	setupBoxs()

	reset()
}

function setupModeBtns() {

	for(var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected")
			modeBtns[1].classList.remove("selected")
			this.classList.add("selected")


			this.textContent === "Easy" ? numBoxs = 3: numBoxs = 6
			reset()
		})
	}
}

function setupBoxs() {
	for(var i =0; i < boxs.length; i++) {


		boxs[i].addEventListener("click", function() {

			var clickedColor = this.style.backgroundColor
			
	
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				resetBtn.textContent = "Play Again?"
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again"
			}
		})
	}	
}

function reset() {
	colors = generateRandomColors(numBoxs)
	pickedColor = pickColor()
	rgb.textContent = pickedColor
	
	resetBtn.textContent = "New Colors"
	messageDisplay.textContent = ""


	for(var i =0; i < boxs.length; i++) {

		if(colors[i]) {
			boxs[i].style.display = "block"
			boxs[i].style.backgroundColor = colors[i]
		} else {
			boxs[i].style.display = "none"
		}
	}

	h1.style.backgroundColor = "green"
}

function changeColors(color) {
	for(var i = 0; i < boxs.length; i++) {
		boxs[i].style.backgroundColor = color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {

	var arr = []


	for(var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	

	return arr
}

function randomColor() {

	var r = Math.floor(Math.random() * 256)
	
	var g = Math.floor(Math.random() * 256)

	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}