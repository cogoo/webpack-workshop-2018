// ESM Pattern

// Import default export
import nav from "./nav";

// Import named export
import {
	top,
	bottom,
	footer
} from "./footer";

// Import CommonJS named export
import makeButton from "./button";

// Import CommonJS named export
import {
	red,
	makeColorStyle
} from "./button-styles"

const button = makeButton("yay a button");
button.style = makeColorStyle('blue');
document.body.appendChild(button);

document.body.appendChild(footer);