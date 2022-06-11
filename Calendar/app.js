let date = new Date(); let now = new Date(date.getFullYear(),date.getMonth(), date.getDate());
let year = document.querySelector('.header__year')
let month = document.querySelector('.header__month');
let m = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
let numbers = document.querySelector('.numbers__row');
let numbersDiv = document.querySelectorAll('.numbers__row div');
function createDiv(x){
    for(let i = 1;i<=x;i++){
        let div = document.createElement('div');
        div.innerHTML = i;
        div.className = 'day';
        numbers.appendChild(div);
    }
}
let days = [];
for(let i=1;i<=12;i++){
    days.push((new Date(2021,i,0)).getDate())
};
let y = now.getFullYear(); let mNum = now.getMonth();
year.innerHTML = now.getFullYear(); month.innerHTML = m[now.getMonth()];
let next = document.querySelector('.header__next');
let prev = document.querySelector('.header__prev');
    for(let elem of numbersDiv){
        if(elem.innerHTML == now.getDate()){elem.style.backgroundColor = 'black';elem.style.color = 'white'};
    }

next.addEventListener('click',function(e){
e.preventDefault(); numbers.innerHTML ='';
if(mNum==11){y++;mNum=0;
createDiv(days[mNum]);
year.innerHTML = y; month.innerHTML =m[mNum]}
else{mNum++;
    createDiv(days[mNum]);
year.innerHTML = y; month.innerHTML = m[mNum]
};
})
prev.addEventListener('click',function(e){
e.preventDefault(); numbers.innerHTML ='';
if(mNum==0){y--;mNum=11;
createDiv(days[mNum]);
year.innerHTML = y; month.innerHTML = m[mNum]}
else{mNum--;
    createDiv(days[mNum]);
year.innerHTML = y; month.innerHTML = m[mNum]
};
})

getRandom = (max,min)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}

let func = (a,b,bool,num) =>{
let x = getRandom(a,b);
if(x%num==0 && bool){console.log(x)}
else if(x%num !== 0 && !bool){
    console.log(x);
}
else{console.log('Результат обратный вашему условию');}
}
func(10,1,false,2)
