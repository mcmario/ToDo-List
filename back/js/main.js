var arrayTasks = [];
var form = document.forms.addNewTask;
var addTasks = document.querySelector();
var countTasks = 0;

//створюємо самі html елементи
var leftBlock = document.querySelector(".left");


var change = function () {

    if (form.children[0].children[0].value != "") {

        arrayTasks[countTasks] = form.children[0].children[0].value;
        countTasks++;

        // присвоюєм батківські елементи щоб потім вивести
        var structurDiv = document.createElement("div");
        var structurInput = document.createElement("input");
        var structurText = document.createElement("span");
        structurDiv.className = "tasks";
        structurInput.className = "tasks__check";
        structurInput.type = "checkbox";
        structurText.className = "tasks__text";
        structurText.value = form.children[0].children[0].value;
        structurDiv.appendChild(structurInput);
        structurDiv.appendChild(structurText);
        leftBlock.insertBefore(structurDiv, leftBlock.children[1]);
    } else {
        alert("Ви ввели неприпустиме значення!");
    }
}


//на кнопку додаемо в масив значення
addTasks.addEventListener("click", change);



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
