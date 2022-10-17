const inputMin = document.querySelector("#minInput");
const inputMax = document.querySelector("#maxInput");
const btnsubmit = document.querySelector("#generate");
const btnclear = document.querySelector("#clear");
const btnrefresh = document.querySelector("#refresh");
const btnfizz = document.querySelector("#fizz")
const btnbuzz = document.querySelector("#buzz")
const btnfizzbuzz = document.querySelector("#fizzbuzz")

const mainWrap = document.querySelector('.main-wrap');
const card = document.querySelector('.card');

const fizz = document.getElementsByClassName('fizz');
const buzz = document.getElementsByClassName('buzz');
const fizzbuzz = document.getElementsByClassName('fizzbuzz');
const allnum  = document.getElementsByClassName('num')

window.addEventListener('load', (event) => {
    create();
})

btnsubmit.onclick = function() {
    deleteAll()
    create();
}
    
btnclear.onclick = function() {
    deleteAll()
}

btnrefresh.onclick = function() {
    deleteAll()
    inputMin.value = 1;
    inputMax.value = 100;
    create();
}
btnfizz.onclick = function() {
    hide()
    toggleClass(".fizz")
}
btnbuzz.onclick = function() {
    hide()
    toggleClass(".buzz")
}
btnfizzbuzz.onclick = function() {
    hide()
    toggleClass(".fizzbuzz")
}

function create() {

    const min = parseInt(inputMin.value)
    const max = parseInt(inputMax.value)

    for (let index = min; index <= max; index++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.classList.add('card');
        div.appendChild(p);
        mainWrap.appendChild(div)
        p.innerHTML = index
        if (index < min || index > max) {
            div.style = "display: none";
        }
        else if ((index % 5 == 0) && (index % 3 == 0)) {
            div.classList.add('fizzbuzz')
            p.innerHTML = index + "=FIZZBUZZ"
        }
        else if (index % 5 == 0) {
            div.classList.add('buzz')
            p.innerHTML = index + "=BUZZ"
        }
        else if (index % 3 == 0) {
            div.classList.add('fizz')
            p.innerHTML = index + "=FIZZ"
        }
        else if ((index % 5 !== 0) && (index % 3 !== 0)) {
            div.classList.add('num')
            div.id = "myid" + index;
        }
    }
}

function deleteAll() {
    const elements = document.querySelectorAll('.main-wrap > div')
    elements.forEach(element => {
        element.remove()
    });
}

function hide() {
    const elements = document.querySelectorAll('.main-wrap > div')
    elements.forEach(element => {
        element.classList.add("hide")
    });
}

function toggleClass(className) {
    const elements = document.querySelectorAll(className)
    elements.forEach(element => {
        if (element.classList.contains("hide")) {
            element.classList.remove("hide")
        }
    })
}