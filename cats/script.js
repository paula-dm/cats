const buttonSubmit = document.getElementById('submiter');
const inputText = document.getElementById('inputOne');
const newInputLine = document.getElementById('newLine');
const myAlert = document.getElementById('alercik');
const myAlert2 = document.getElementById('alercik2');
const buttonAlert = document.getElementById("alertBtn");
const buttonAlert2 = document.getElementById("alertBtn2");
const taskList = [{name: "Put my pijamas on"}];


const addNewItem = () => {

    if (inputText.value === "") {
        myAlert.classList.add('alert-info');
        myAlert.classList.toggle('alert');
    }
    else if (inputText.value !== ""){
    let task = inputText.value;
    taskList.push({name: task});
    render();
    inputText.value = "";
    }
};
    
let render = function () {
    newInputLine.innerHTML = "";

    for (let task of taskList) {
        let newParagraph = document.createElement("li");
        newParagraph.classList.add("list-group-item", "d-flex", "flex-row", "align-items-center", "justify-content-between", "item");
        newParagraph.innerHTML = task.name;
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn");
        deleteBtn.classList.add("btn-success");
        deleteBtn.innerHTML = "X";
        let niceBtn = document.createElement("button");
        niceBtn.classList.add("btn", "btn-info");
        niceBtn.innerHTML = "i";
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        buttons.appendChild(niceBtn);
        buttons.appendChild(deleteBtn);
        newParagraph.appendChild(buttons);
        newInputLine.appendChild(newParagraph);

        niceBtn.addEventListener("click", () => {
    
            myAlert2.classList.add('alert-success');
            myAlert2.classList.toggle('alert');
        });

        deleteBtn.addEventListener("click", () => {
            let index = taskList.indexOf(task);
            taskList.splice(index, 1);
            render();
    
        });
    }

}
buttonSubmit.addEventListener("click", addNewItem);

inputText.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        addNewItem();
      
    }
});

buttonAlert.addEventListener("click", () => {
    myAlert.classList.toggle('alert');

})


buttonAlert2.addEventListener("click", () => {
    myAlert2.classList.toggle('alert');

})
render();