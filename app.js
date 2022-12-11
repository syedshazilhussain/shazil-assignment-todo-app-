var todo_input = document.getElementById("todoInput");
var todo_ul = document.getElementById("todo_ul");
var bo = document.getElementById("bo456");

function Addbtn() {
    if(todo_input.value == ""){
        alert("type your input value")
    }else{
        var li = document.createElement("li");
        li.setAttribute("class" , "task-list-item");
        var liText = document.createTextNode(todo_input.value);
        li.appendChild(liText);
        var editbtn = document.createElement("i");
        editbtn.setAttribute("class" , "fa-solid fa-pen pencil");
        editbtn.setAttribute("onclick" , "editBtn(this)");
        li.appendChild(editbtn);
        var deletebtn = document.createElement("span")
        deletebtn.setAttribute("class" , "delete-btn");
        deletebtn.setAttribute("onclick" , "deleteBtn(this)");
        li.appendChild(deletebtn);
        todo_ul.appendChild(li);
        todo_input.value = "";
    }
}
function editBtn(e) {
    var update = prompt("Enter update value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = update;
}
function deleteBtn(d) {
    d.parentNode.remove();
}
function DeleteAll() {
    todo_ul.innerHTML = "";
}