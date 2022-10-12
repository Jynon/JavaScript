const inputMin = document.querySelector("#minInput");
const inputMax = document.querySelector("#maxInput");
const btnsubmit = document.querySelector("#generate");
const btnclear = document.querySelector("#clear");

window.addEventListener('load', (event) => {
    let mainWrap = document.querySelector('.main-wrap')


    //inputMin.value = 1;
    //inputMax.value = 100;

    for (let index = 1; index <= 100; index++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add('card');
        div.appendChild(p);
        mainWrap.appendChild(div)
        p.innerHTML = index
        if ((index % 5 == 0) && (index % 3 == 0)) {
            console.log ('modulus 5 and 3 is 0')
            div.classList.add('fizzbuzz')
            p.innerHTML = index + "=FIZZBUZZ"}
        else if (index % 5 == 0) {
            console.log ('modulus 5 is 0')
            div.classList.add('buzz')
            p.innerHTML = index + "=BUZZ"}
        else if (index % 3 == 0) {
            console.log ('modulus 3 is 0')
            div.classList.add('fizz')
            p.innerHTML = index + "=FIZZ"}
        else if ((index % 5 !== 0) && (index % 3 !== 0)) {
            console.log(index)
            div.classList.add('num')}
            div.id = "myid" + index;
    }
})

//btnsubmit.addEventListener('click', submitElements)
//btnclear.addEventListener('click', clearElements)

btnsubmit.onclick = function() {
        deleteAll()
        create();
}
    
btnclear.onclick = function() {
        deleteAll()
}
    
$(document).ready(function(){ $("fizz").click(function(){
        $(".num, .buzz, .fizzbuzz").toggle();
        });
});
$(document).ready(function(){ $("buzz").click(function(){
        $(".num, .fizz, .fizzbuzz").toggle();
        });
});
$(document).ready(function(){ $("fizzbuzz").click(function(){
        $(".num, .buzz, .fizz").toggle();
        });
});

function create() {
        let mainWrap = document.querySelector('.main-wrap')


    //inputMin.value = 1;
    //inputMax.value = 100;
console.log(inputMin.value)
console.log(inputMax.value)
const min = inputMin.value
const max = inputMax.value
    for (let index = min; index <= max; index++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add('card');
        div.appendChild(p);
        mainWrap.appendChild(div)
        p.innerHTML = index
        if ((index % 5 == 0) && (index % 3 == 0)) {
            console.log ('modulus 5 and 3 is 0')
            div.classList.add('fizzbuzz')
            p.innerHTML = index + "=FIZZBUZZ"}
        else if (index % 5 == 0) {
            console.log ('modulus 5 is 0')
            div.classList.add('buzz')
            p.innerHTML = index + "=BUZZ"}
        else if (index % 3 == 0) {
            console.log ('modulus 3 is 0')
            div.classList.add('fizz')
            p.innerHTML = index + "=FIZZ"}
        else if ((index % 5 !== 0) && (index % 3 !== 0)) {
            console.log(index)
            div.classList.add('num')}
            div.id = "myid" + index;
    }
}

function deleteAll() {
        const elements = document.querySelectorAll('.main-wrap > div')
        elements.forEach(element => {
                element.remove()
        });
}