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
console.log(loginUserMessege());