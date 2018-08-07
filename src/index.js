import nav from "./nav";
// import * as gsap from "gsap";
const getGsap = () => import("gsap");
// import { footer } from "./footer";
const getFooter = () => import("./footer");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const setButtonStyle = (color) => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);

button.addEventListener("click", e => {
	getFooter().then(footerModule => {
		document.body.appendChild(footerModule.footer);
	});

	getGsap().then((gsapModule) => {
		console.log(gsapModule);
	})

	setButtonStyle('red').then((style) => {
		button.style = style.default;
	})
});


document.body.appendChild(image);

