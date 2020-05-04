const buttonSubmit = document.getElementById('submit');
const inputText = document.getElementById('inputOne');
const newInputLine = document.getElementById('newLine');

let render = () => {
    inputText.value = "";
};

buttonSubmit.addEventListener("click", () => {
    let newText = inputText.value;
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = newText;
    render();
    return newInputLine.appendChild(newParagraph);

});
