var arrayTasks = [];
var form = document.querySelector(".newTask__inputText");
var addTasks = document.querySelector(".newTask__button");

//створюємо самі html елементи
var leftBlock = document.querySelector(".left");
var allTasksCreate = document.querySelectorAll(".tasks");
var countTasks = allTasksCreate.length;

var change = function () {
    if (form.value != null || form.value == "") {
        arrayTasks[countTasks] = form.value;
        countTasks++;

        // присвоюєм батківські елементи щоб потім вивести
        var structurDiv = document.createElement("div");
        var structurInput = document.createElement("input");
        var structurText = document.createElement("span");
        structurDiv.className = "tasks";
        structurInput.className = "tasks__check";
        structurInput.type = "checkbox";
        structurText.className = "tasks__text";
        structurText.innerHTML = form.value;
        structurDiv.appendChild(structurInput);
        structurDiv.appendChild(structurText);
        leftBlock.insertBefore(structurDiv, leftBlock.children[1]);
        form.value = "";
        allTasksCreate = document.querySelectorAll(".tasks");
        console.log(allTasksCreate.length);
    } else {
        alert("Ви ввели неприпустиме значення!");
    }
}

leftBlock.onchange = function(){
    for (var i = 0; i < allTasksCreate.length; i++) {
        allTasksCreate[i].children[1].innerHTML;
        if(allTasksCreate[i].children[0].checked == true && allTasksCreate.length > 1){
            leftBlock.removeChild(allTasksCreate[i]);
        }else if(allTasksCreate[i].children[0].checked == 1){
            allTasksCreate[i].children[0].checked = false;
            alert("остане не видаляється");
        }
            
            //continue;
       
    }
    console.log(allTasksCreate.length+"++");
}



//на кнопку додаемо в масив значення
addTasks.addEventListener("click", change);

/*
for (var i = 0; i < allTasksCreate.length; i++) {
    if(allTasksCreate[i].children[0].checked == true){

        leftBlock.removeChild(allTasksCreate[i]);
    }
}
*/








/*var tasks = document.querySelectorAll(".left");
 var structurDiv = document.createElement("div");
 var structurInput = document.createElement("input");
 var structurText = document.createElement("span");

 structurDiv.className = "tasks";
 structurInput.className = "tasks__check";
 structurText.className = "tasks__text";

 structurDiv.appendChild()
 tasks[0].appendChild(structurLebel);*/

/*for (var i = 0; i < tasks.length; i++) {
 tasks[i].children[0] = addEventListener("click", function (){
 if(this.checked == true){
 tasks[i].style.visibility = "hidden";
 }
 });
 }*/
