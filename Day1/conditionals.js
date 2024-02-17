// if else condition

var num=21
if(num%2==0){
    console.log("even")
}else{
    console.log("odd")
}

// ternary operator -> if else:
12%2==0 ? console.log("even") : console.log("Odd")

//nested if else ternary operation
var a =3
a>=0 ? a>5 ? console.log("a is greater than 0 and 5") : console.log('a is greater than 0 but less than 5') :console.log('a is less than 0')

//switch statement:
var fruit = "apple"
switch(fruit){
    case "apple":
        console.log("it is an apple")
        break
    case "mango":
        consaole.log("it is a mango")
        break
    default:
        console.log("it is not a valid fruit")
}