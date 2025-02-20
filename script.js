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
nav_list.style.top = nav_list.clientHeight;
// 	BLOCK B

// let block_E = document.getElementById('e-block');
// let e_BTN_PREV = document.getElementById('e-btn-prev');
// let e_BTN_NEXT = document.getElementById('e-btn-next');


// let type_B_slider_items = Array.from(block_E.children);
// let step_block_E = 0;

// e_BTN_NEXT.addEventListener('click', () => {

// 		// type_B_slider_items.pop();
// 		// console.log(type_B_slider_items);

// 		// block_E.children.pop();
// 		// console.log(block_E.children);

// 		let arr = block_E.children;
// 		let item = arr[arr.length-1];
// 		arr[arr.length-1].remove();
// 		block_E.prepend(item);
// 		console.log(arr);
// 		console.log(block_E);
// 	}
// );

// e_BTN_PREV.addEventListener('click', () => {

// 		// type_B_slider_items.shift();
// 		// console.log(type_B_slider_items);

// 		// block_E.children.shift();
// 		// console.log(block_E.children);

// 		let arr = block_E.children;
// 		let item = arr[0];
// 		arr[0].remove();
// 		console.log(arr);
// 		block_E.append(item);
// 		console.log(arr, block_E);
// 	}
// );
// console.log(block_E.children[block_E.children.length-1]);
// console.log(type_B_slider_items);