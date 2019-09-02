let list = document.querySelectorAll('.list');
let container = document.querySelector('.container');
let list_cont = document.querySelector('.list_cont');
let main_anime = document.querySelector('.main_anime');
let darkMode = document.querySelector('.darkMode');
let light = "M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z";
let dark = "M18.5 32.5C18.5 50.4493 32.5 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C32.5 0 18.5 14.5507 18.5 32.5Z";
let toggle = false

darkMode.addEventListener('click', () => {
	const darkline = anime.timeline({
		duration: 500,
		easing: 'easeOutExpo'
	})

	darkline
	.add({
		targets: '#logo path',
		d: [{ value: toggle ? light : dark }]
	})
	.add({
		targets: '#logo',
		rotate: toggle ? 0 : 320
	})
	.add({
		targets: '#logo path',
		fill: toggle ? '#FFB800' : '#FFFFFF'
	})
	toggle = !toggle
	switchTheme(toggle)
})

const switchTheme = data => {
    if (data) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        // localStorage.setItem('theme', 'light');
    }    
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
	targets: '.list_cont',
	opacity: 1
})

const randomColor = () => {
	return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

const randomNumber = () => {
	return Math.floor( Math.random() * 255 ) + 1;
}

for(let i=0; i< list.length; i++){
	list[i].style.background = randomColor()
}

for(let i=0; i< list.length; i++){
	list[i].addEventListener('click', () => {
		container.style.background = `linear-gradient(45deg, ${list[i].style.background} 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, ${list[i].style.background} 90%)`
	})
}
