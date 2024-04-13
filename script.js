var inputbox = document.getElementById("input-box");
var list = document.getElementById("list");

function addtask() {
    if (inputbox.value == '') {
        alert("Enter some task here");
    }
    else {
        document.getElementById("input-box").placeholder = "Enter your task here";
        var li = document.createElement("li");
        li.innerHTML = inputbox.value + ' <button class="button2" onclick="removeItem(this)"></button> <button class="button3" onclick="editItem(this)"></button><br><br>';
        list.appendChild(li);
    }
    inputbox.value = '';
    savedata();
}

function removeItem(button) {
    var item = button.parentNode;
    var itemList = document.getElementById("list");
    itemList.removeChild(item);
    savedata();
}


function editItem(button) {
    var item = button.parentNode;
    var text = item.firstChild;
    var editText = prompt("Edit the task:", text.textContent);

    if (editText !== null) {
        text.textContent = editText;
        savedata();

    }
}

function display() {
    document.addEventListener("contextmenu", function (e) {
        document.getElementById("input-box").placeholder = "Don't try to see my code 😏";
        e.preventDefault();
    })
}

function savedata() {
    localStorage.setItem("data", list.innerHTML)
}
function showlist() {
    list.innerHTML = localStorage.getItem("data");
}
showlist();