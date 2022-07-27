let btn = document.querySelector('.container button');
btn.addEventListener('click', () => {
    let rata = document.querySelector('#inflationRate');
    let money  = document.querySelector('#money');
    
    rata = parseFloat(rata.value);
    money = parseFloat(money.value);

    let godine = document.querySelector('#years').value;
    godine = parseFloat(godine);
    // forumma za inflaciju.
    let worth = money + (money * (rata / 100));
    
    for(let i = 1; i < godine; i++){
        worth += worth * (rata / 100);
    }
    worth = worth.toFixed(2);
    console.log(worth);

    let newEl = document.createElement('div');
    newEl.className = 'new-value';
    newEl.innerText = `Danasnjih ${money} vredi isto kao ${worth} za ${godine} godina`
    document.querySelector('.container').appendChild(newEl);
})