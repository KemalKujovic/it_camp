// let textTag = document.querySelector('.section1 h1');

// let text = textTag.innerText;

// let splitText = text.split(''); // splitali tekst na svako slovo

// textTag.innerHTML = ' '; //izbrisali prosli tekst
// for(let i = 0; i < splitText.length; i++){
//     if(splitText[i] == ' '){ // dodali space na prazno polje
//         splitText[i] = "&nbsp";
//     }
//     textTag.innerHTML += `<span>${splitText[i]}</span>`; // dodali na svako slovo span
// };

const prviBtn = document.querySelector('#prvi-tekst');

prviBtn.addEventListener('click', e => {
    let prviTekst = document.querySelector('.section h1');

    let text = prviTekst.innerText;

    let splitText = text.split(''); // splitali tekst na svako slovo

    prviTekst.innerHTML = ' '; //izbrisali prosli tekst
for(let i = 0; i < splitText.length; i++){
    if(splitText[i] == ' '){ // dodali space na prazno polje
        splitText[i] = "&nbsp";
    }
    prviTekst.innerHTML += `<span>${splitText[i]}</span>`; // dodali na svako slovo span

    let k = 0;
    let interval = setInterval(() => {
       
        let spans = prviTekst.querySelectorAll('span');
        
        let singleSpan = spans[k];
        singleSpan.classList = 'animacija';
    
        k++;
        if(k == spans.length){ // kada dodjde do kraja spanova da se zaustavi.
    
            clearInterval(interval);
        }
    },70);

}})










// let border = document.querySelector('.border-line');
// let animationWidth = 0;
// window.onscroll = () => {
    
//     if(this.oldScroll > this.scrollY){
//         animationWidth -= 2.5;
//     }else{
//         animationWidth += 2.5;

//     }
//     if(animationWidth <= 0){
//         animationWidth = 0;
//     }
//     if(animationWidth > 100){
//         animationWidth = 100;
//     }

//     border.style.width = animationWidth + '%';

//     this.oldScroll = this.scrollY;
    
    
//     // imageAnimacije();
// }





let plusBtn = document.querySelector('#plus')
plusBtn.addEventListener('click', () => {
    
    
let border = document.querySelector('.border-line')

border.style.width = 100 + '%';

    
})



let minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', () => {
    let border = document.querySelector('.border-line')
    border.style.width = 0;

});

























// const imageAnimacije = () => {
//     let rightImg = document.querySelector('.slideFromRight');
//     let leftImg = document.querySelector('.slideFromLeft');
//     let sectionPozicija = document.querySelector('.section2 img');
//     let sectionPosition = sectionPozicija.getBoundingClientRect().top;
//     let windowposition = window.innerHeight / 1.5;
    
//     console.log('Section position:' + sectionPosition);
//     console.log('widnow position:' + windowposition);
    
//     if(sectionPosition < windowposition){
//     rightImg.classList.add('animacijaImg')
//     leftImg.classList.add('animacijaImg')
//     }
// }

const leviBtn = document.querySelector('#ucitajLevu');

leviBtn.addEventListener('click', e => {
    e.preventDefault();

    let leftImg = document.querySelector('.slideFromLeft');
    leftImg.classList.add('animacijaImg');
})


const desniBtn = document.querySelector('#ucitajDesnu');

desniBtn.addEventListener('click', e => {
    e.preventDefault();

    let rightImg = document.querySelector('.slideFromRight');
    rightImg.classList.add('animacijaImg');
})