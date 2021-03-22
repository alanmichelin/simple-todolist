var currentDate = new Date()

console.log(currentDate.toLocaleTimeString())
function addTask() {
    var newItem= document.createElement("li");
    var text = document.createElement("input");
    text.type='text'
    var confirm = document.createElement('button');
    //confirma la task
    confirm.textContent='Add to tasklist';
    newItem.appendChild(text);
    // agrega la task a la lista
    document.querySelector('ul').appendChild(newItem).appendChild(confirm);
    confirm.onclick= ()=> {
    //aca agrega el innerText del input como task
        console.log(text.value);
        newItem.innerHTML= text.value;
        text.remove();
        confirm.remove();
    // para tachar la task una vez hecha
        var buttonDone = document.createElement('button');
        buttonDone.textContent='Close task';
        buttonDone.onclick= ()=>{
            newItem.style.textDecoration = 'line-through';
            buttonDone.remove()
        }
        
        newItem.appendChild(buttonDone);

    }

    
}

    