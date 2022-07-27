let textTag = document.querySelector('.section1 h1');

let text = textTag.innerText;

let splitText = text.split(''); // splitali tekst na svako slovo

textTag.innerHTML = ' '; //izbrisali prosli tekst
for(let i = 0; i < splitText.length; i++){
    if(splitText[i] == ' '){ // dodali space na prazno polje
        splitText[i] = "&nbsp";
    }
    textTag.innerHTML += `<span>${splitText[i]}</span>`; // dodali na svako slovo span
};


let k = 0;
let interval = setInterval(() => {
   
    let spans = textTag.querySelectorAll('span');
    
    let singleSpan = spans[k];
    singleSpan.classList = 'animacija';

    k++;
    if(k == spans.length){ // kada dodjde do kraja spanova da se zaustavi.

        clearInterval(interval);
    }
},70);


let border = document.querySelector('.border-line');
let animationWidth = 0;
window.onscroll = () => {
    
    if(this.oldScroll > this.scrollY){
        animationWidth -= 2.5;
    }else{
        animationWidth += 2.5;

    }
    if(animationWidth <= 0){
        animationWidth = 0;
    }
    if(animationWidth > 100){
        animationWidth = 100;
    }

    border.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;
    
    imageAnimacije();
}

const imageAnimacije = () => {
    let rightImg = document.querySelector('.slideFromRight');
    let leftImg = document.querySelector('.slideFromLeft');
    let sectionPozicija = document.querySelector('.section2 img');
    let sectionPosition = sectionPozicija.getBoundingClientRect().top;
    let windowposition = window.innerHeight / 1.5;
    
    console.log('Section position:' + sectionPosition);
    console.log('widnow position:' + windowposition);
    
    if(sectionPosition < windowposition){
    rightImg.classList.add('animacijaImg')
    leftImg.classList.add('animacijaImg')
    }
}