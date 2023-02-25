// string - number - boolean
var stringVal = "Some string Value";
var numberValue = 12212;
var boolValue = true;
// any type
var userInput = [];
// userInput = ['someVal'] --> error: because of string value
// userInput = 3 --> error: because is not array
// Union Type example
var userLogin = function (email, password) {
    typeof password === "string" ? password = password.toUpperCase() : "error";
    return email + password;
};

console.log(userLogin('@outlook.com', 'abcdfFGG'));


var Animal = {
    name: "Java",
    type: "Persian",
    age: 3
};
var Java = {
    name: "Java",
    type: "Cat",
    age: 3
};
console.log("Animal: ", Java);
var createCatUser = function (cat) {
    return "Our cat name is ".concat(cat.name, " and she is ").concat(cat.type, " also she is ").concat(cat.age);
};
console.log(createCatUser(Animal));
