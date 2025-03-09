function sayMyn(){
    console.log("that");
    console.log("this");
    console.log("why")
}
// sayMyn();
// sayMyn();
// sayMyn();


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(5, 5);




// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// const result = addTwoNumbers(5, 5);
// console.log(result);


// function addTwoNumbers(number1, number2){
//         return number1 + number2;
// }
// console.log(addTwoNumbers(3, "a"));



function loginUserMessege(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessege("furqan"));
// console.log(loginUserMessege());



function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(100, 200, 590));






const user = {
    username: "furqan",
    price: 300,
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// // handleObject(user);
// handleObject({
//     username: "sam",
//     price: 500,
// })



const myNewArray = [100, 200, 300, 500];
function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 15500, 400]));