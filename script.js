let list = document.querySelectorAll('.list')
let container = document.querySelector('.container')

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
		container.style.background = `linear-gradient(45deg, ${list[i].style.background} 10%, #3c3c3d 10%, #3c3c3d 90%, ${list[i].style.background} 90%)`
	})
}

