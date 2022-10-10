window.addEventListener('load', (event) => {
    let mainWrap = document.querySelector('.main-wrap')

    //const inputMin = document.getElementById('minInput');
    //const inputMax = document.getElementById('maxInput');
    const btnsubmit = document.getElementById('generate');
    const btnclear = document.getElementById('clear');

    //inputMin.value = 1;
    //inputMax.value = 100;

    for (let index = 1; index <= 100; index++) {
        let div = document.createElement('div');
        div.classList.add('card')
        if ((index % 5 == 0) && (index % 3 == 0)) {
            console.log ('modulus 5 and 3 is 0')
            div.classList.add('fizzbuzz')}
        if (index % 5 == 0) {
            console.log ('modulus 5 is 0')
            div.classList.add('buzz')}
        if (index % 3 == 0) {
            console.log ('modulus 3 is 0')
            div.classList.add('fizz')}
        else console.log(index)
            div.id = 'myid' + index;
        let p = document.createElement('p');
        p.innerHTML = 'nr' + index;
        div.appendChild(p)
        mainWrap.appendChild(div)
    }
    
})
//btnsubmit.addEventListener('click', onClickgenerate);

