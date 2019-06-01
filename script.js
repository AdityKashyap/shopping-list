var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.setAttribute("class","clickable");
	var button = document.createElement("button");
	button.setAttribute("class","delete");
	button.appendChild(document.createTextNode("Delete"));	
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML+ " ";
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function strikeThrough(event){

event.target.classList.toggle("done");
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var ul = document.querySelector("ul");
ul.addEventListener("click", strikeThrough);

function deleteListItem(event){
	event.srcElement.parentElement.remove();
}

var delButtons= document.getElementsByClassName("delete");
for(var i=0; i <delButtons.length; i++){
	delButtons[i].addEventListener("click", deleteListItem);
}
