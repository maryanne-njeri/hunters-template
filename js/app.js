var selectObject = {
	menuItems : document.getElementById('menuItems'),
	bars : document.getElementById('bars')
}

function returnFunc() {
	if(selectObject.menuItems.style.display === 'none'){	
		selectObject.menuItems.style.display = 'block';
		selectObject.menuItems.style.transition = 'width 2s linear 1s';
		selectObject.bars.innerHTML =  '<i class="fa fa-times"></i>';
		// selectObject.bars.style.fontSize = '50px';
	}else{
		selectObject.menuItems.style.display = 'none';
		selectObject.bars.innerHTML = '<i class="fa fa-bars"></i>';
	}
}

selectObject.bars.addEventListener('click', returnFunc);
