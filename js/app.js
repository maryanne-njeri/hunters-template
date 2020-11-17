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

var selectObjectTwo = {
	blogOne : document.querySelector('.blogOne'),
	blogTwo : document.querySelector('.blogTwo'),
	blogThree : document.querySelector('.blogOne')
}

function returnFuncTwo() {
	if () {}
	selectObjectTwo.blogOne.innerHTML = 'Read More...';
	selectObjectTwo.blogOne.style.backgroundColor = 'blue';
}

selectObjectTwo.blogOne.addEventListener('mouseover', returnFuncTwo);