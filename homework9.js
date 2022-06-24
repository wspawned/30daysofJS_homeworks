const countriesData = require('./countries_data')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries.forEach((country) => console.log(country))

const upperCasedCountries = countries.map(country => country.toUpperCase())
console.log(upperCasedCountries)

const squared = numbers.map(num => num * num)
console.log(numbers, squared)

const prices = products.map(item => item.price)
console.log(prices)

const land = countries.filter(country => country.toLowerCase().includes('land'))
console.log(land)

const sixnmore = countries.filter(country => country.length >= 6)
console.log(sixnmore)

const startingE = countries.filter(country => country.startsWith('E'))
console.log(startingE)

const prices = products.filter(item => item.price > 0)
console.log(prices)

//////Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = function (arr) {
    return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists(numbers))

const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

/////////Use reduce to concatenate all the countries and to produce this sentence: 
////////Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries    /////////////////////////


console.log(names.some(n => n.length > 7))
console.log(countries.every(c => c.includes('land')))

console.log(countries.find(country => country.length === 6))
console.log(countries.findIndex(country => country.length === 6))

console.log(countries.findIndex(country => country === 'Norway'))
console.log(countries.findIndex(country => country === 'Russia'))

//////////level2

const sumProducts = products.map((item) => item.price).filter(item => item > 0).reduce((acc, cur) => acc + cur, 0)
console.log(sumProducts)

const sumProducts = products.reduce((acc, cur) => acc += Number(cur.price), 0)       ////////////
console.log(sumProducts)

const categorizeCountries = function (arr) {
    return arr.filter(c => c.name.endsWith('stan'))
}
console.log(categorizeCountries(countriesData))


///////WORKS BUT IS IT OK
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const seperate = characters.split('')

const list = function (arr) {
    const newArr = []
    seperate.forEach((char) => {
        const count = arr.filter(c => c.name.startsWith(char)).length
        const obje = { char, count }
        newArr.push(obje)
    })
    return newArr
}
console.log(list(countriesData))

const getFirstTenCountries = countriesData.map((item, index) => {                   ////10dan sonra undef neden 
    if (index < 10) return item                                                         ////alltta yapılı öğrenince silinecek
    else return
})
console.log(getFirstTenCountries)


const getFirstTenCountries = countriesData.filter(item => countriesData.indexOf(item) < 10)      ////can it be done with map
console.log(getFirstTenCountries)

const getLastTenCountries = countriesData.filter(item => (countriesData.length - 1) - countriesData.indexOf(item) < 10)
console.log(getLastTenCountries)

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const seperate = characters.split('')
const list = function (arr) {
    const newArr = []
    seperate.forEach((char) => {
        const count = arr.filter(c => c.name.startsWith(char)).length
        const obje = { char, count }
        newArr.push(obje)
    })
    return newArr
}
console.log(list(countriesData).filter(item => item.count > 1))

///level3

console.log(countriesData.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
}))

console.log(countriesData.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
}))

console.log(countriesData.sort((a, b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
}))

//////////////////////////////////////////////////////////////////////////Find the 10 most spoken languages

const popSorted = countriesData.sort((a, b) => {
    if (a.population < b.population) return 1
    if (a.population > b.population) return -1
    return 0
})
console.log(popSorted.filter(item => popSorted.indexOf(item) < 10))

/* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
  measure of variability(range, variance, standard deviation). 
  In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
  You can create an object called statistics and create all the functions which do statistical calculations as method 
  for the statistics object. Check the output below. */