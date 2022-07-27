let ukupno = 0; // samo za ovo pogledo
function prvafunk(dugme){
    let mainEl = dugme.closest('div');
    let name = mainEl.querySelector('h1').innerText;
    let opis = mainEl.querySelector('p').innerText;
    let price = mainEl.querySelector('h5').innerText;
    let items = document.querySelector('.total');
    
    price = parseInt(price);
        ukupno += price;
       items.innerHTML += `<div class="novi">
                        <p class="zaime">${name}</p>
                        <p>Opis: ${opis}</p>
                        <h3 class="cenaa">Cena:<span>${price}</span></h3><button onclick="zatvoriti(this)" class="btn">Ukloniti</button><br></div>`
    
    document.querySelector('.ukupno').innerHTML = `Ukupno: ${ukupno}`;
    dugme.innerText = 'Odgledano';
    dugme.setAttribute('disabled', 'true');
    mainEl.style.background = 'gray';
}



function zatvoriti(dugme){
   let mainEl = dugme.closest('.novi');
   let name = mainEl.querySelector('.zaime').innerText;
   let price = mainEl.querySelector('.novi h3 span').innerText;
   let filmovi = document.querySelectorAll('.card');
    price = parseInt(price);
   ukupno -= price;
   mainEl.remove();
   document.querySelector('.ukupno').innerText = `Ukupno ${ukupno}`;
   filmovi.forEach(function (film) {
       let itemName = film.querySelector('.card h1').innerText;
        console.log(itemName)
       if(itemName === name){
        film.style.background = 'white';
        film.querySelector('.card button').innerText = 'Gledaj';
        film.querySelector('.card button').removeAttribute('disabled');
       }
       
       
    }) 
    }















