const ul = document.createElement('ul');
document.querySelector('body').prepend(ul);
const exampleList = ["Apples", "Pears", "Oranges"];
for (let i= 0; i < exampleList.length; i++){
const element = exampleList[i];
const li = document.createElement('li');
li.textContent = element
ul.prepend(li);

}
const exampleList2 = [
	{name:"Bakyt", age: 18},
	{name: "Dosbol", age: 32}
]

const h1 = document.querySelector("h1");
document.querySelector("#display-text").addEventListener("input",
function(){
	h1.textContent = this.value;
});

document.querySelector("#font-size").addEventListener("input",
function(){
	h1.style.fontSize = this.value +'px';
});

document.querySelector("#text-color").addEventListener("input",
function(){
	h1.style.Color = this.value;
});