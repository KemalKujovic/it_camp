window.addEventListener("keydown", (klik) => {
   let keyCode =  klik.keyCode;
   let cods = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!cods){
        return 0;
    }

   let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

   audio.currentTime = 0;
   audio.play();
})
// napraviti da na dugme svira audio, da krene, da se vrati na time 0, i da nema erora



// resize.

window.addEventListener("mousemove", (event) => {
console.log('mis pomeren');
});