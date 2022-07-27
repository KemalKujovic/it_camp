let btn = document.querySelector('.prvi-div button');

btn.addEventListener ('click', () => {
    let input = document.querySelector('#mojinput').value;
    let drugi = document.querySelector('.drugi-div');
    let main = drugi.querySelector('button');
    console.log(drugi);


     drugi.innerHTML += `<div class="drugi-div"
                        <h1>${input}</h1>
                        <button onclick="brisanje(this)" class="izbrisati">X</button></div>`;
  
})
function brisanje(element){
    let btn_2 = document.querySelector('.drugi-div button');
    let main = element.closest('.drugi-div');
    main.remove();
}




