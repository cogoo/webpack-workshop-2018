import nav from "./nav";
import {
    footer
} from "./footer";
import makeButton from "./button";
import {
    makeColorStyle
} from "./button-styles";


import imgUrl from "./icon.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

import makeImg from "./img.js"
const img = makeImg(imgUrl);

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(img);
document.body.appendChild(footer);