/* Primitive datatype*/

/* String */
var name = "vishwa"
var name2 = 'vis'
console.log(name)
console.log(name2)

/* to print the data type */
console.log(typeof name)
console.log(typeof name2)

// number

var age = 91
var x = 1.4

//BigInt
//add suffix n in number
var big_int = 123n
console.log(typeof big_int)

console.log(typeof NaN)

console.log(typeof null) // this is shown as object 

var name3
console.log(typeof name3)
//symbol
var s1 = Symbol()
console.log(typeof s1)

/*
*Non primitive 
# Objects
*/
var person = {
    name: "vishwa",
    age: 19,
    /*Keys*/hobby: "cricket"//value
}
console.log(person)