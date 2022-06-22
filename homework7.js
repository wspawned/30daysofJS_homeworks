const bmi = function(w, h) {
    const index = (w/(h*h))
    if (index>= 30) {
        console.log('obese')
    }
    else if (index<30 && index>= 25) {
        console.log('overweight')
    }
    else if (index<25 && index>= 18.5) {
        console.log('normal')
    }
    else if (index<18.5) {
        console.log('underweight')
    }
}
bmi(56,1.71)

const max = function(num1,num2,num3) {
    const arr = [num1,num2,num3]
    const nArr = arr.sort()
    console.log('Max is ' + nArr[nArr.length-1])
}
max(5,9,3)

////////level2              1 n   2

const now = new Date
const day = ('0' + now.getDate().toString()).slice(-2)
const month = ('0' + (now.getMonth()+1).toString()).slice(-2)
const year = ('0' + now.getFullYear().toString()).slice(-2)
const hour = ('0' + now.getHours().toString()).slice(-2)
const minute = ('0' + now.getMinutes().toString()).slice(-2)
console.log(day + '/' + month + '/' + year + ' ' + hour + '.' + minute)

const swap = function(a,b) {
    [a,b] = [b,a]
    console.log(a,b)
}
swap(1,3)

const anotherSwap = function(a,b) {
    let temp;
    temp = a
    a = b
    b= temp
    console.log(a,b)
}
anotherSwap(1,3)

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(5,6,7,8,9,1,2))

const fruit = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']

const shuffle = function(array) {
    for(var i = array.length -1; i>0; i--) {
        var j = Math.floor(Math.random()*(i+1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    console.log(array)  
}
shuffle(fruit)

const factorial = function(num) {
    let f =1
    for(let i=num; i>0; i--) {
        f*= i
    }
    console.log(f)
}
factorial(15)

const isEmty = function(arr) {
    if(arr.join('').length>0 ) {
        console.log('has some elemnts')
    }
    else console.log('is empty')
}
isEmty([])

function sum() {
    let s = 0
    for(const elm of arguments) {
        s+=elm
    }
    console.log(s)
}
sum(1,7,5,6,4)

const sumOfArrayItems = function(array) {
    var sum = 0
    for(const el of array) {
        if(typeof el == 'number') {
            sum+= el
        }
        else sum = 'element s not number'
        
    }
    console.log(sum)                                         //////////////// IT S FRAUD
}
sumOfArrayItems([1,5,6,8,'yarasa'])

const isUnique = function(array) {                              ////////////////CHECK NEED SMTH LIKE BREAK
    var result
    for(const element of array) {
        if 
        (array.indexOf(element)== array.lastIndexOf(element)) {
        result = 'unique'
    }
    else result = 'there is duplicant'
    }
    console.log(result)
}
isUnique([1,1,1,2,6,7])
isUnique([1,2,23])

