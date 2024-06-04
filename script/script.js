let maximum = document.getElementsByClassName('max-number')
let minimum = document.getElementsByClassName('min-number')

function minAndMax() {
    
    let list = [23,45,67,32,78]
    
    minVal = Math.min(...list)
    maxVal = Math.max(...list)

    console.log('Minimum number is = ' + minVal)
    console.log('Maximum number is = ' + maxVal)
}

minAndMax()