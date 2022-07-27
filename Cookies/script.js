document.querySelector('#setCookie').addEventListener('click', e => {
    e.preventDefault();

    document.cookie = "name=kemal";
document.cookie = "test=test1";

const date = new Date();

let today = date.getTime();
let expires = 5 * 1000;
date.setTime(today + expires);



let new_date = date.toUTCString();

document.cookie = `login=1; expires=${new_date}`;


console.log(document.cookie);
})


