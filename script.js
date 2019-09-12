let liList = document.querySelectorAll('.list');
let container = document.querySelector('.container');
let list_cont = document.querySelector('.list_cont');
let main_anime = document.querySelector('.main_anime');
let darkMode = document.querySelector('.darkMode');
let buttonColor = document.querySelector('.buttonColor');
let text = document.querySelectorAll('.list .text')
let light = "M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z";
let dark = "M18.5 32.5C18.5 50.4493 32.5 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C32.5 0 18.5 14.5507 18.5 32.5Z";
let toggle = ''

darkMode.addEventListener('click', () => {
	const darkline = anime.timeline({
		duration: 500,
		easing: 'easeOutExpo'
	})

	darkline
	.add({
		targets: '#logo path',
		d: [{ value: toggle ? light : dark }],
		fill: toggle ? '#FFB800' : '#FFFFFF'
	})
	.add({
		targets: '#logo',
		rotate: toggle ? 0 : 320,
	})
	// .add({
	// 	targets: '#logo path',
	// 	fill: toggle ? '#FFB800' : '#FFFFFF'
	// })
	// .add({
	// 	targets: '#logo',
	// 	rotate: toggle ? 0 : 320,
	// 	scale: 1
	// })
	toggle = !toggle
	switchTheme(toggle)
})

const switchTheme = data => {
    if (data)
        document.documentElement.setAttribute('data-theme', 'dark');
    else
        document.documentElement.setAttribute('data-theme', 'light');
}

anime({
  targets: '#outline_text path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 200 }
});

let timeline = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});

timeline.
add({
	targets: '.main_anime',
	opacity: 1,
	delay: 2800,
	complete: () => main_anime.remove()
})
.add({
	targets: '.list_cont, .generate',
	opacity: 1
})

const randomColor = () => {
	return `#${randomNumber()}${randomNumber()}${randomNumber()}`
}

const randomNumber = () => {
	return rgbToHex(Math.floor( Math.random() * 255 ) + 1);
}

const fillColor = () => {
	for(let i=0; i< liList.length; i++){
		let color = randomColor()
		liList[i].style.background = color
		text[i].innerHTML = color
	}
}

const rgbToHex = rgb => { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

for(let i=0; i< liList.length; i++){
	liList[i].addEventListener('click', () => {
		container.style.background = `linear-gradient(45deg, ${liList[i].style.background} 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, ${liList[i].style.background} 90%)`
		
		let aux = document.createElement("input");

		// Get the text from the element passed into the input
		aux.setAttribute("value", (liList[i].innerText || liList[i].textContent));

		// Append the aux input to the body
		document.body.appendChild(aux);

		// Highlight the content
		aux.select();

		// Execute the copy command
		document.execCommand("copy");

		// Remove the input from the body
		document.body.removeChild(aux);

		let timeline = anime.timeline({
			duration: 800,
			easing: 'easeOutExpo'
		})
		timeline
		.add({
			targets: '.snackbar',
			opacity: 1
		})
		.add({
			targets: '.snackbar',
			opacity: 0
		})
	})
}

buttonColor.addEventListener('click', fillColor)

fillColor()

const copyToClipboard = elementId => {

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);

}