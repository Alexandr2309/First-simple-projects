const input = document.querySelector('input');
const listProcess = document.querySelector('.cheklist__process');
const listEnd = document.querySelector('.cheklist__end');
const listEndText = document.querySelector('.cheklist__list-end');
const clearBtn = document.querySelector('.cheklist__clear-end');

function createElements(){
    return {
        containerInput: addStyle(document.createElement('div'), 'chekbox'),
        inpChekbox: addStyle(document.createElement('input'), 'custom-checkbox', 'checkbox')
        ,
        label: document.createElement('label')
    }
};
function addStyle(elem, clas, type){
    elem.classList.add(clas);
    elem.type = type;
    return elem
};
function addToListNew(div, checkbox, label, value){
    checkbox.setAttribute('name', value);
    checkbox.id = value;
    label.innerText = value;
    label.setAttribute('for', value);
    div.append(checkbox, label);

    localStorage.setItem(value, false);
    listProcess.append(div);
}
function addToList(elem, div){
    let value = elem.name;
    localStorage.setItem(value, false);
    listProcess.append(div);
}
function addToEndList(parent){
    let span = document.createElement('span');
    span.classList.add('close');
    parent.append(span);
    listEndText.append(parent);
    
    span.addEventListener('click', function(e){
        let removeChek = this.closest('.chekbox');
        this.remove();
        let select = removeChek.cloneNode(true);
        let selectInp = select.querySelector('input');

        selectInp.disabled = false;
        selectInp.checked = false;

        selectInp.addEventListener('click',eventForInput.bind(this, selectInp))
        removeChek.remove();
        addToList(selectInp, select);
    });
    
}
function eventForInput(e){
    if(e.checked){
        localStorage.setItem(e.name, true);
        e.disabled = true;
        let importItem = e.closest('.chekbox').cloneNode(true);
        setTimeout(() => {
            e.closest('.chekbox').remove();
            addToEndList(importItem);
        }, 500);
    }
};

const btnAdd = document.getElementById('inp-btn');

btnAdd.addEventListener('click', e => {
    let value = input.value;
    input.value = '';

    let cheklistItem = createElements();
    let {containerInput: div, inpChekbox: checkbox, label} = cheklistItem;
    addToListNew(div, checkbox, label, value);

    checkbox.addEventListener('click', eventForInput.bind(this, checkbox))
});
clearBtn.addEventListener('click', function(e){
    let allChekbox = listEndText.querySelectorAll('.chekbox');
    for(let block of allChekbox){
        localStorage.removeItem(block.querySelector('input').name);
        block.remove();
    };

});
window.onload = function(e){
    let removeItems = [];
    for(let i =0; i<localStorage.length;i++){
        
        let value = localStorage.key(i);
        if(localStorage.getItem(value) === "true") {
            removeItems.push(value);
            continue;
        }
        let cheklistItem = createElements();
        let {containerInput: div, inpChekbox: checkbox, label} = cheklistItem;
            addToListNew(div, checkbox, label, value);
        
            checkbox.addEventListener('click', eventForInput.bind(this, checkbox))
        };
        removeItems.forEach(text => localStorage.removeItem(text));
        console.log(localStorage);
    };




