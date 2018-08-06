// take a name or a string, the button label and return a element
/**
 * CommonJS Pattern
 * @param {string} buttonName
 * @returns {Element}
 */

const makeButton = (buttonName) => {
    const buttonLabel = `Button: ${buttonName}`;
    const button = document.createElement("button");
    button.innerText = buttonLabel;

    return button;
};

module.exports = makeButton;