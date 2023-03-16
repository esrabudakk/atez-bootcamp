

/* Senkron kod*/
const userName = 'Hakan Kolcu'
const userAge = 25
function getUserName() {
  return userName
}
function getUserAge() {
    return userAge
}

/* Asenkron kod */

//Callback Hell --> araştır
function sth(cb,cb2,cb3) {
  cb()
  cb2()
  cb3()
}
//Event handling and client side example

document.querySelector('.button').addEventListener('click', function () {
    //do something with it
})
const xhr = new XMLHttpRequest()
xhr.open('GET', 'herhangibirurl.com/users')

// Promise Deep Dive ödev
const fetchOurUser = fetch('herhangibirurl.com/users')

fetchOurUser.then((res) => console.log(res))

/*fail dönme durumunda mesela url hatalı ise*/
fetchOurUser.catch((err) => console.log(err))

async function getUserNames(){
    const response = await fetch('herhangibirurl.com/users')
    return {}
}