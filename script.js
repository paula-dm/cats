const buttonSubmit = document.getElementById('submiter');
const inputText = document.getElementById('inputOne');
const newInputLine = document.getElementById('newLine');
const myAlert = document.getElementById('alercik');
const myAlert2 = document.getElementById('alercik2');
const buttonAlert = document.getElementById("alertBtn");
const buttonAlert2 = document.getElementById("alertBtn2");


const saveToLocalStorage = function(){
    localStorage.setItem("taskList", JSON.stringify(taskList));
};
const getFromLocalStorage = function(){
    return JSON.parse(localStorage.getItem("taskList"));
};

const taskList =  getFromLocalStorage() || [{name: "Przykład, możesz go usunąć", completed: false,}, {name: "Example - you can delete it", completed: true,}];

const addNewItem = () => {

    if (inputText.value === "") {
        myAlert.classList.add('alert-info');
        myAlert.classList.toggle('alert');
    }
    else if (inputText.value !== ""){
    let task = inputText.value;
    taskList.push({name: task});
    saveToLocalStorage();
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
        if (task.completed)
        newParagraph.classList.add('done');
        
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn");
        deleteBtn.classList.add("btn-danger");
        deleteBtn.innerHTML = "X";
        let niceBtn = document.createElement("button");
        niceBtn.classList.add("btn", "btn-secondary");
        niceBtn.innerHTML = "i";
        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        buttons.appendChild(niceBtn);
        buttons.appendChild(deleteBtn);
        newParagraph.prepend(checkbox);
        if (task.completed)
        checkbox.checked = true;
        newParagraph.appendChild(buttons);
        
        newInputLine.appendChild(newParagraph);

        niceBtn.addEventListener("click", () => {
    
            myAlert2.classList.add('alert-success');
            myAlert2.classList.toggle('alert');
        });
        checkbox.addEventListener("change", () => {
            if (task.completed === true)
            task.completed = false;
            else task.completed = true;
            saveToLocalStorage();
            render();
        });

        deleteBtn.addEventListener("click", () => {
            let index = taskList.indexOf(task);
            taskList.splice(index, 1);
            saveToLocalStorage();
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