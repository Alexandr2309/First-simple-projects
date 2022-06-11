let arr = ['X', 'O']; let order = ['Ходит: x', 'Ходит: o']
let set = new Set();
let xW = document.querySelector('#winX');
let oW = document.querySelector('#win0');
let draw = document.getElementById('draw');
let match = document.getElementById('p');
let set2 = new Set();

let tr = document.querySelectorAll('tr');
let array = []; for (let elem of tr) {
    for (let ch of elem.children) {
        array.push(ch)
    }
}

let winC = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [0, 4, 8], [2, 4, 6], [6, 7, 8], [3, 4, 5]];

function isTrue(x, arr) {
    for (let elem of arr) {
        if (!x.has(elem)) { return false }
    }
    return true;
}
function win(w) {
    // let flag = false; 
    for (let elem of winC) {
        if (isTrue(w, elem)) { return true }
    }
    // if(flag==true){return true}
    // else{return false};
    return false;
}
let i = 0, x = 0; o = 1; let flag = false;
let td = document.querySelectorAll('td');
for (let elem of td) {
    elem.addEventListener('click', function () {
        p.innerHTML = order[o]; o++; if (o == 2) { o = 0 };
        this.innerHTML = arr[i]; i++; x++;
        if (this.innerHTML === 'X') {
            set.add(array.indexOf(this)); if (win(set)) {
                p.innerHTML = 'Выиграл X'; xW.innerHTML = Number(xW.innerHTML) + 1; flag = true;
            }
        }
        else {
            set2.add(array.indexOf(this)); if (win(set2)) {
                p.innerHTML = 'Выиграл 0'; oW.innerHTML = Number(oW.innerHTML) + 1; flag = true;
            }
        };
        if (i == 2) { i = 0 };
        if (x == 9 && flag == false) { p.innerHTML = 'Ничья'; draw.innerHTML = Number(draw.innerHTML) + 1 }
    });

}
document.querySelector('.restart').addEventListener('click', function () {
    for (let elem of td) {
        elem.innerHTML = ''
    }
    p.innerHTML = order[0];
    set.clear(); set2.clear(); flag = false; x = 0; o = 1; i = 0;
})

