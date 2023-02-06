var form = document.querySelector('.form');
var input = document.querySelector('.input');
var list = document.querySelector('.list')
var todos = []

function handleSubmit (event) {
    event.preventDefault();
   var trimmedVal  = input.value.trim();
   input.value = "";
   if(!trimmedVal) return;
   todos.push({name:trimmedVal, isDone:false});
   createUI(todos)


}

handleDel = (event) =>{
    var index = event.target.id
if(!event.target.className.includes('delete-btn')) return;
todos.splice(index,1);
createUI(todos);

}

handlechecked = (event) =>{
    if(!event.target.className.includes('checked')) return;
    var index = event.target.id
   todos[index].isDone = event.target.checked;
 
}



function createUI(arr){
    list.innerHTML = ""
   arr.map((item,i) => {
    list.innerHTML += `<li class='todo-list'>
    <input class='checked' type='checkbox' id="${i} checked=${item.isDone}">
    <label for="${i}" class="strikethrough"> ${item.name}</label>
     <button class='delete-btn' id='${i}' > X </button>
        </li>`
   });

}

list.addEventListener('click', handlechecked)

list.addEventListener('click', handleDel)
form.addEventListener('submit', handleSubmit);

