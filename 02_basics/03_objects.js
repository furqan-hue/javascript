const JsUser = {
    name: "Hitesh",
    age: 10,
    location: "Godhra",
    email: "furqan@google.com",
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);


JsUser.greeting1 = function(){
    console.log("hello js");
}
JsUser.greeting2 = function(){
    console.log(`hello js, ${this.name}`);
}
console.log(JsUser.greeting1());
console.log(JsUser.greeting2());