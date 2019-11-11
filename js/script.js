var img = document.getElementById('zwaaien');

img.addEventListener("click", function () {
	img.src = "./img/zwaaien.gif";
	setInterval(function () {
		img.src = "./img/zwaaien.png";
	}, 2500);
});
