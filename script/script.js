let maximum = document.getElementsByClassName('max-number')[0]
let minimum = document.querySelector('.min-number')
let input = document.getElementsByTagName('input')[0]
let reset = document.querySelector('button')


function minAndMax() {
    let inputVal = input.value.split(',').map(Number);

    let minVal = Math.min(...inputVal)
    let maxVal = Math.max(...inputVal)

    maximum.innerText = maxVal
    minimum.innerText = minVal
}

function clear(){
maximum.innerText = ''
minimum.innerText = ''
input.value = ''
}

input.addEventListener('input', minAndMax)
reset.addEventListener('click',clear)