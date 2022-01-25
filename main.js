let text = document.getElementById('text');
let info = document.getElementById('textarea')
let edit = document.getElementById('edit');
let style = document.getElementById('style');
let add = document.getElementById('add');
let save = document.getElementById('save');
let zone = document.getElementById('zone')
let buttons = document.getElementById('buttons')
console.log(buttons)
let tableCont = document.getElementById('tableCont')
let editArea = document.getElementById('editArea')

// Виводить текст на верхній блок!
text.innerHTML = info.value;


// При кліку показує або приховує блок редагування!
edit.onclick = function() {

        if (zone.style.display = "none") {
            zone.style.display = "block";
        } else {
            zone.style.display = "none";
        }
    }
    // Зберігає зміни які відбулись при редагуванні поля!
save.onclick = function() {
    text.innerHTML = info.value;
    zone.style.display = "none";
}


let textColor = document.getElementById('textcol');
let textColorBtn = document.getElementById('text-color');
let backgroundColorBtn = document.getElementById('background-color');
let backgroundColor = document.getElementById('textcolor');


let getId = x => document.getElementById(x);
const getEl = x => document.querySelector(x);

textColorBtn.onclick = function() {

    if (textColor.style.display === "none") {
        textColor.style.display = "flex";
        backgroundColor.style.display = "none"
    } else {
        textColor.style.display = "none";
    }
}
let square = document.querySelectorAll('.square');
for (let i = 0; i < square.length; i++) {
    square[i].onclick = (e) => {
        text.style.color = e.target.classList[0]
        textColor.style.display = "none"
    }
}

let squareBackground = document.querySelectorAll('.squarebg');
for (let i = 0; i < squareBackground.length; i++) {
    squareBackground[i].onclick = (e) => {
        text.style.backgroundColor = e.target.classList[0]
        backgroundColor.style.display = "none"
    }
}


backgroundColorBtn.onclick = function() {

    if (backgroundColor.style.display === "none") {
        backgroundColor.style.display = "flex";
        textColor.style.display = "none"
    } else {
        backgroundColor.style.display = "none";
    }
}
let styleEdit = document.getElementById('font-edit')

style.onclick = function() {

    if (styleEdit.style.display === "block") {
        styleEdit.style.display = "none";
    } else {
        styleEdit.style.display = "block";
    }
}

let form1 = document.forms.f1;
for (let i = 0; i < form1.length; i++) {
    form1[i].onclick = (e) => {
        text.style.fontSize = e.target.classList[0]
    }
}


let form2 = getId('fontfamily');


form2.onchange = function() {
    for (let i = 0; i < form2.length; i++) {
        if (form2[i].selected) text.style.fontFamily = this.value;
    }
}


let form3 = document.forms.form3;


let boldText = document.getElementById('bold-text');
let cursiveText = document.getElementById('cursive-text')

function checkbox() {

    if (boldText.checked) {
        text.style.fontWeight = 'bold';
    } else {
        text.style.fontWeight = 'normal'
    }

    if (cursiveText.checked) {
        text.style.fontStyle = 'italic'
    } else {
        text.style.fontStyle = 'normal'
    }

}

checkbox()

add.onclick = function() {
    text.style.display = 'none';
    editArea.style.display = 'none';
    buttons.style.display = 'none'
    tableCont.style.display = 'block'
}

let chose1 = getId('chose1');
let createTable = getId('createTable');
let createList = getId('createList');

chose1.onclick = function() {
    createTable.style.display = 'block'
    createList.style.display = 'none'
}

chose2.onclick = function() {
    createList.style.display = 'block'
    createTable.style.display = 'none'
}

let createTb = getId('createTb')
createTb.onclick = function() {
    createTable.style.display = 'none'
    text.style.display = 'block';
    editArea.style.display = 'block';
    buttons.style.display = 'block'
    tableCont.style.display = 'none'

    let createTables = document.forms.createTable;
    let divTable = document.createElement('div');
    let table = document.createElement('table');
    let totalTr = createTables.TR.value;
    let totalTd = createTables.td.value;

    createList.style.display = 'none'

    createTables.border.onchange = function() {
        for (let i = 0; i < createTables.border.length; i++) {}
    }

    createTables.colorBorder.onchange = function() {
        for (let i = 0; i < createTables.colorBorder.length; i++) {}
    }

    for (let i = 0; i < totalTr; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        divTable.appendChild(table)
        for (let i = 0; i < totalTd; i++) {
            let td = document.createElement('td');
            tr.appendChild(td)
            td.innerHTML = `TD`;
            td.style.width = createTables.wtd.value + 'px';
            td.style.height = createTables.htd.value + 'px';
            table.style.borderCollapse = 'collapse';
            td.style.borderWidth = createTables.wbr.value + 'px';
            td.style.borderColor = createTables.colorBorder.value;
            td.style.borderStyle = createTables.border.value;
        }
    }
    textarea.innerHTML += divTable.innerHTML;

}


let createListF = document.forms.createList;
let createLi = getId('createLi');
let typeMarks = getId('typeMarks')
createLi.onclick = function() {
    createTable.style.display = 'none'
    text.style.display = 'block';
    editArea.style.display = 'block';
    buttons.style.display = 'block'
    createListF.style.display = 'none'
    tableCont.style.display = 'none'

    let amount = createListF.li.value;

    let ul = document.createElement('ul');

    for (let i = 0; i < amount; i++) {

        createListF.typeMarks.onchange = function() {
            for (let i = 0; i < createListF.typeMarks.length; i++) {}
        }

        let li = document.createElement('li');
        li.innerHTML = `item ${i+1}`;
        li.style.listStyle = createListF.typeMarks.value;
        ul.appendChild(li)
        textarea.innerHTML += ul.innerHTML;
    }


}