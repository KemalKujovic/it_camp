const loader = document.querySelector('.loader');

function hideLoader(){
    loader.classList.add('hide');
}

window.addEventListener('load', hideLoader);