//your JS code here. If required.
// const ul = document.getElementByTagName('ul')[0];
// let displayText;

// for(let i=0; i<ul.children.length; i++){
// 	let node = ul.children[i];
// 	if(node.id == 'level'){
// 		displayText = `the level of the element is: ${i+1}`;
// 	}
// }

// alert(displayText);

const testElement = document.getElementById("level");
let levelCount = 1;
 while(true){
	 if (levelElement.tagName == "HTML" ) {
	 	break;
	 } 
	 testElement = testElement.parentNode;
	 levelCount++;
 }

alert(`The level of the element is: ${levelCount}`);
