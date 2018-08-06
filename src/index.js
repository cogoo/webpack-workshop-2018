import nav from "./nav";
import {
    top,
    bottom
} from "./footer";
import makeButton from "./button";
import {
    red,
    makeColorStyle
} from "./button-styles"

console.log(
    nav(),
    top,
    bottom,
    makeButton('my first button'),
    makeColorStyle('green')
);