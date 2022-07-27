let allTotal = 0;

function addtoCart(element){
    let mainEl = element.closest('.left-card');
    
    let name = mainEl.querySelector('.naslov').innerText;
    let price = mainEl.querySelector('.cena').innerText;
    let potrosnjaNovca = document.querySelector('.potreseno-novca');

    
    price = price.substring(1);
    price = parseInt(price);
    let total = price;
    allTotal += total;

    potrosnjaNovca.innerHTML += `<div class="potroseno-novca">
                                <h3>${name}</h3>
                                <p>Cena: $<span>${price}</span></p>
                                <button onclick="removeFromcart(this)" class="remove-item">ukloni</button>
                                </div>`;

                                document.querySelector('.total').innerText =`Ukupno: $${allTotal}`;
    element.innerText = 'Odgledano';
    element.setAttribute('disabled', 'true');
    
}

function removeFromcart(element) {
    let mainEl = element.closest('.potroseno-novca');
    console.log(mainEl);
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let filmovi = document.querySelectorAll('.left-card');

    console.log(filmovi);
    
    price = parseInt(price);
    allTotal -= price;

   document.querySelector('.total').innerText = `Ukupno: $${allTotal}`;

    mainEl.remove();
    
    filmovi.forEach(function (film){
        let itemName = film.querySelector('.left-card p').innerText;
        
        if(itemName === name){
            film.querySelector('.left-card button').removeAttribute('disabled');
            film.querySelector('.left-card button').innerText = 'GLEDAJ';
        }
    })

}