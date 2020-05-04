const buttonSubmit = document.getElementById('submit');
const inputText = document.getElementById('input');
const newInputLine = document.getElementById('newLine');

let render = () => {
    inputText = "";
};

buttonSubmit.addEventListener("click", () => {
    let newText = inputText.value;
    if (newText !== "") {

        return newText;
    }
    else alert("Input field is empty!")

    render();
    inputText.innerHTML = newText;
});
