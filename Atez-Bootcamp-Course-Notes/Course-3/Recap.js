var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
})(Months || (Months = {}));
var myCat = {
    dot: 'Spotted',
    sound: function () { return console.log("Meow"); },
    name: 'Java',
    type: 'tekir',
    age: 3
};
var Java = {
    birthMonth: Months.February
};
console.log(Java.birthMonth);
