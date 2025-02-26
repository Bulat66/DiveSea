function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

//NAVIGATION
let nav = document.getElementById('nav');
let nav_list = document.getElementById('nav-list');
let nav_step = 1;
let header = document.getElementById('header');
nav.addEventListener('click', () => {
	nav_step++;
	open(nav_list, nav_step);
})
function open(a, b){
	let indent = header.clientHeight + header.clientTop;
	let elemH = nav_list.clientHeight;
	if(b%2 == 0){		
		a.style.top = `${indent}px`;
	} else {
		a.style.top = `${-elemH}px`;
	}
}
	// BLOCK B

let block_B = document.getElementById('b-block');
let b_BTN_PREV = document.getElementById('b-btn-prev');
let b_BTN_NEXT = document.getElementById('b-btn-next');

let bArray = Array.from(block_B.children);
let b_step = 0;

function b_next(a) {
	if(b_step <= bArray.length - 1){
		a.children[b_step].remove();
		a.prepend(bArray[b_step]);
		b_step++;
	} else {
		b_step = 0;
		a.children[b_step].remove();
		a.prepend(bArray[b_step]);
	}
}
function b_prev(a){
		if(b_step <= bArray.length - 1){
		a.children[b_step].remove();
		a.append(bArray[b_step]);
		b_step++;
	} else {
		b_step = 0;
		a.children[b_step].remove();
		a.append(bArray[b_step]);
	}
}
b_BTN_NEXT.addEventListener('click', () => { b_next(block_B) });
b_BTN_PREV.addEventListener('click', () => { b_prev(block_B) });