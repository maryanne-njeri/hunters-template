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

// let about = document.getElementById('about');
// let paragraph = document.getElementById('paragraph');

// about.addEventListener('click', () => {
// 	paragraph.style.color = 'red';
// })

// blog behaviour
let navigatorOne = document.getElementById('navigatorOne');
let navigatorTwo = document.getElementById('navigatorTwo');
let navigatorThree = document.getElementById('navigatorThree');
// let firstBlog = document.getElementById('firstBlog');

navigatorOne.addEventListener('click', () => {
	location.href = 'blog-one.html';
})

navigatorTwo.addEventListener('click', () => {
	location.href = 'blog-two.html';
})

navigatorThree.addEventListener('click', () => {
	location.href = 'blog-three.html';
})


