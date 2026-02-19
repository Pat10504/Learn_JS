const addData = [];
function addText() {
    const textElement = document.getElementById('inputId');
    const textHtml = textElement.value.trim();
    textElement.value = '';

    if (textHtml){
        addData.push(textHtml);
    }
    pData();
}

function pData() {
    const List = document.getElementById('pText');
    let html = '';
    for(let i = 0; i < addData.length; i++){
        const todo =  addData[i];
        html += `<li>${todo}  <button onclick="deleteData(${i})">x</button></li>`
    }
    List.innerHTML = html;
}

function deleteData(i) {
    addData.splice(i, 1);
    pData();
}