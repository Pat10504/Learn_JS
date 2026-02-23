const inputEl = document.getElementById('inputText');
const dateEl = document.getElementById('inputDate');
const timeEl = document.getElementById('inputTime');
const btnEl = document.getElementById('btnSubmit');
const htmlEl = document.getElementById('listData');

const todoList = [];
btnEl.addEventListener('click',() => {
    const listData = {
        text: inputEl.value.trim(),
        date: dateEl.value,
        time: timeEl.value
    }
    todoList.push(listData);
    console.log(todoList);
    
    inputEl.value = '';
    dateEl.value = '';
    timeEl.value = '';

    displayData();
});

const displayData = () => {
    htmlEl.innerHTML = '';
    todoList.forEach((item,index) => {
        htmlEl.innerHTML += 
        `<p>
            <span>${item.text}</span>
            <span>${item.date}</span>
            <span>${item.time}</span>
            <button onclick="deleteData(${index})">x</button>
        </p>`
    });
}

const deleteData = (index) => {
    todoList.splice(index, 1);
    displayData();
}