const btns = document.querySelectorAll('.colors button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let header = document.querySelector('.frist');
        let secondBtn = document.querySelector('#secondBtn');
        console.log(header);
        let a = getComputedStyle(btn)
        let b = a.backgroundColor;
        header.style.backgroundColor=b;
        secondBtn.style.backgroundColor=b;
        
    })
})


const chk = document.querySelector('#chk');
    
    chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    });