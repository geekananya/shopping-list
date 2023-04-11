let input = document.getElementById("item");
let enter_b = document.getElementById("enter");
let ul = document.querySelector("ul");

function strikeDelete(event){
	if(event.target !== event.currentTarget)
	{
		console.log(event.target.tagName);
		let ele = event.target;
		let tag = ele.tagName;
		if(tag === "LI")
			ele.classList.toggle("done");
		if(tag === "BUTTON")
			ele.parentElement.remove();
	}
	event.stopPropagation();
}
ul.addEventListener("click", strikeDelete, false);	//Event Bubbling is used here to listen to the event from parent element. (true is for tunneling mode and false is for bubbling mode)


function addItem()
{
	if(input.value.length > 0)
	{
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + " "));
			let button = document.createElement("button");
			button.appendChild(document.createTextNode("Delete"));
			button.classList.add("delete");
		li.appendChild(button);
		ul.appendChild(li);
		input.value="";
	}
}

function addbyclick()
{
	if(input.value.length > 0)
	{
		addItem();
	}
}
enter_b.addEventListener("click", addbyclick);

function addbykey(e)
{
	if(input.value.length > 0 && e.code==="Enter")
	{
		addItem();
	}
}
input.addEventListener("keydown", addbykey)