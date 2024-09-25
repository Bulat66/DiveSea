
// 	BLOCK B

let block_E = document.getElementById('e-block');
let e_BTN_PREV = document.getElementById('e-btn-prev');
let e_BTN_NEXT = document.getElementById('e-btn-next');


let type_B_slider_items = Array.from(block_E.children);
let step_block_E = 0;

e_BTN_NEXT.addEventListener('click', () => {

		// type_B_slider_items.pop();
		// console.log(type_B_slider_items);

		// block_E.children.pop();
		// console.log(block_E.children);

		let arr = block_E.children;
		let item = arr[arr.length-1];
		arr[arr.length-1].remove();
		console.log(arr);
		block_E.prepend(item);
		console.log(arr);
	}
);

e_BTN_PREV.addEventListener('click', () => {

		// type_B_slider_items.shift();
		// console.log(type_B_slider_items);

		// block_E.children.shift();
		// console.log(block_E.children);

		let arr = block_E.children;
		let item = arr[0];
		arr[0].remove();
		console.log(arr);
		block_E.append(item);
		console.log(arr);
	}
);
console.log(block_E.children[block_E.children.length-1]);
// console.log(type_B_slider_items);