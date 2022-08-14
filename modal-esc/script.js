'use strict';


const openModal = document.querySelectorAll('.show-modal');

const hiddenModal = document.querySelector('.modal');

const closeModal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');


const closeMod = function(){
    hiddenModal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openMod = function(){
    hiddenModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click', openMod)
}

closeModal.addEventListener('click', closeMod)

overlay.addEventListener('click', closeMod);


    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !hiddenModal.classList.contains('hidden')){
            closeMod();
        }
    });
