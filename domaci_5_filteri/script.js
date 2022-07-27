 // telefon meni responsiv.

let btn = document.querySelector('.header button');

btn.addEventListener('click', () => {
    let menu = document.querySelector('.header ul');
    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';

    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENU'
    }

});

// galerija 






// slider
let slike = document.querySelectorAll('.slider-images img');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let imgNum = 0;
rightBtn.addEventListener('click', () => {
    positionImg();
    imgNum ++;
    if(imgNum === slike.length){
        imgNum = 0;
    }
    slike[imgNum].style.display = 'block';
})


const positionImg = () => {
    slike.forEach((img) => {
    img.style.display = 'none';
    })
}



leftBtn.addEventListener('click', () => {
    positionImg();
    imgNum --;
    if(imgNum === -1){
        imgNum = slike.length - 1;
    }
    slike[imgNum].style.display = 'block';
});





// Js za filtere. 

const btnFilter = document.querySelectorAll('.portfolio-categories button');
    btnFilter.forEach((btn) => {
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    let category = btn.getAttribute('data-category');
    btn.addEventListener('click', () => {
    
    portfolioItems.forEach((item) => {
        item.style.display = 'none'
    })  

    if(category === 'sve'){
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        
        });
    }
    
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        };
        
    
})

})
})


// modal 


const openBtn = document.querySelector('.modal-section button');

openBtn.addEventListener('click', () => {
    let modal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay')

    modal.style.display = 'block';
    overlay.style.display = 'block';
})

const closeBtn = document.querySelector('.popup-modal button');
let modal = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay')
    closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    })