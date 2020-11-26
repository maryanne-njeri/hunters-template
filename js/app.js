// header behaviour

// selecting objects
var selectObject = {
	menuItems : document.getElementById('menuItems'),
	bars : document.getElementById('bars')
}
// manipulation
function returnFunc() {
	if(selectObject.menuItems.style.display === 'none'){	
		selectObject.menuItems.style.display = 'block';
		selectObject.menuItems.style.transition = 'width 2s linear 1s';
		selectObject.bars.innerHTML =  '<i class="fa fa-times"></i>';
	}else{
		selectObject.menuItems.style.display = 'none';
		selectObject.bars.innerHTML = '<i class="fa fa-bars"></i>';
	}
}
// calling function
selectObject.bars.addEventListener('click', returnFunc);


// blog behaviour
var navigatorOne = document.querySelector('.navigatorOne');
var navigatorTwo = document.querySelector('.navigatorTwo');
var navigatorThree = document.querySelector('.navigatorThree');

navigatorOne.addEventListener('click', () => {
	window.location.href = 'blog-one.html';
})

navigatorTwo.addEventListener('click', () => {
	window.location.href = 'blog-two.html';
})

navigatorThree.addEventListener('click', () => {
	window.location.href = 'blog-three.html';
})
