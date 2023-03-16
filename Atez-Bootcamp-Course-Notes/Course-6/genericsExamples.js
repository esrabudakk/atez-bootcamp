function takeAJobAndReturn(job) {
    return job;
}
var message1 = takeAJobAndReturn('Hello World');
var message2 = takeAJobAndReturn(123);
function createAnArrayFromAnArray(items) {
    //createAnArrayFromAnArray([1,2,3,4,5])
    return new Array().concat(items);
}
var numberArray = createAnArrayFromAnArray([200, 300, 400]);
var strArray = createAnArrayFromAnArray(['Hello', 'World']);
numberArray.push(500);
strArray.push('hello', 'world');
function getUserInfo(id, name) {
    console.log("User Id: ".concat(id, ", User Name: ").concat(name));
}
getUserInfo(1, 'John');
