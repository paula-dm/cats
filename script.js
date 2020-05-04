const buttonSubmit = document.getElementById('submit');
const inputText = document.getElementById('input');
const newInputLine = document.getElementById('newLine');

let render = () => {
    inputText = "";
};

buttonSubmit.addEventListener("click", () => {
   if (inputText.value !== "") {
       let newText = inputText.value;
        newText.innerHTML=inputText.value;
        newInputLine.append(newText);
        render();

   }
   else alert("Input field is empty!")
});
