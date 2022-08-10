

// unos = prompt("unesite neku vrednost");
// unos1 = prompt("unesite neku vrednost 2")
// if(unos % 2 === 0){
//     console.log('Broj je paran');
// }else if(unos % 2 === 1){
//     console.log('broj je nepran');
// }

// if(unos === unos1){
//     console.log('vasi brojevi su isti')
// }else{
//     console.log('vasi brojevi nisu isti');
// }

// unos2 = prompt('unesite temepraturu');

// if(unos2 < 0){
// console.log('frezing');
// }else if(unos2 <= 10){
// console.log('very cold');

// }else if(unos2 < 30){
// console.log('thenn normal temp');
// }
// else if(unos2 <= 40){
// console.log('then its hot');
// }
// else if(unos2 >= 40){
// console.log('its very hot');
// }



// // 3 zadatak 

// let broj = prompt('Unesite broj');

// if(broj >= 0){
//     console.log('Vas broj je pozitivan');
// }else{
//     console.log('vas broj je negativan');
// }

// // 4 zadatak

// let year = prompt('unesite godinu');

// if(year % 4 === 0){
//     console.log(`${year} je prestupna godina`);
// }else{
//     console.log(`${year} nije presudna godina`);
// }


// // 8 zadatak

// let number1 = parseInt(prompt('Unesite vas prvi broj'));
// let number2 = parseInt(prompt('Unesite vas drugi broj'));
// let number3 = parseInt(prompt('Unesite vas treci broj'));


// if(number1 > 2 && number1 > number3){
//     console.log(`${number1} je najveci broj`);
// }else if(number2 > number3 && number2 > number1 ){
//     console.log(`${number2} je najveci broj`);
// }else if(number3 > number1 && number3 > number2){
//     console.log(`${number3} je najveci broj`);
// }

// // 15 zadatak

// let ugao1 = parseInt(prompt('Unesite prvi ugao'));
// let ugao2 = parseInt(prompt('Unesite drugi ugao'));
// let ugao3 = parseInt(prompt('Unesite treci ugao'));

// ukupnoUglova = ugao1 + ugao2 + ugao3;

// if(ukupnoUglova === 180){
//     console.log('Trugao se moze formirati');
// }else{
//     console.log('Trugao se ne moze formirati');
// }

// // 23 zadatak 

// let nedelja = prompt('Unesite broj za dan');

// if(nedelja == 1){
//     console.log('Ponedeljak');
// }else if(nedelja == 2){
//     console.log('Utorak');
// }
// else if(nedelja == 3){
//     console.log('Sreda');
// }
// else if(nedelja == 4){
//     console.log('Cetvrtak');
// }
// else if(nedelja == 5){
//     console.log('Petak');
// }
// else if(nedelja == 6){
//     console.log('Subota');
// }
// else if(nedelja == 7){
//     console.log('Nedelja');
// }else{
//     console.log('Uneli ste pogresan broj');
// }




// let ugao4 = Number(prompt('unesite vas ugao'));

// console.log(ugao4);





// const btn = document.querySelector('#prviBtn');

// btn.addEventListener('click', () => {
//     const input = document.querySelector('input').value;

//     if(input === '1'){
//     console.log('Ponedeljak');
//     }else if(input === '2'){
//     console.log('Utorak');
//     }
//     else if(input === '3'){
//     console.log('Sreda');
//     }
//     else if(input === '4'){
//     console.log('Cetvrtak');
//     }
//     else if(input === '5'){
//         console.log('Petak');
//     }
//     else if(input === '6'){
//         console.log('Subota');
//     }
//     else if(input === '7'){
//         console.log('Nedelja');
// }else{
//     console.log('Uneli ste manji broj od 7');
// }
// });


// let a = prompt('Unesite prvu stranicu')
// let b = prompt('Unesite drugu stranicu')
// let c = prompt('Unesite trecu stranicu')



// if(a + b < c){
//     console.log('ne mozemo formirati trugao');
// }

// else if(a + c < b){
//     console.log('ne mozemo formirati trugao');
// }

// else if(b + c < a){
//     console.log('ne mozemo formirati trugao');
// }else{
//     console.log('trugao je validan');
// }


//  7 zadatak


// let matematika = parseInt(prompt('Unesite ocenu iz matematike'));
// let istorija = parseInt(prompt('Unesite ocenu iz istorija'));
// let geografija = parseInt(prompt('Unesite ocenu iz geografija'));

// let avgOcena = (matematika + istorija + geografija) / 3;

// if(avgOcena > 91){
//     console.log('Ocena je 10');
// }else if(avgOcena > 81){
// console.log('ocena je 9');
// }else if(avgOcena > 71){
//     console.log('ocena je 8');
// }else if(avgOcena > 61){
//     console.log('ocena je 7');
// }else if(avgOcena > 51){
//     console.log('ocena je 6');
// }else if(avgOcena < 50){
//     console.log('Nazalost niste polozili ispit');
// }

// // 8 zadatak

// let nedelja = prompt('Unesite broj za dan');

// if(nedelja == 1){
//     console.log('Ponedeljak');
// }else if(nedelja == 2){
//     console.log('Utorak');
// }
// else if(nedelja == 3){
//     console.log('Sreda');
// }
// else if(nedelja == 4){
//     console.log('Cetvrtak');
// }
// else if(nedelja == 5){
//     console.log('Petak');
// }
// else if(nedelja == 6){
//     console.log('Subota');
// }
// else if(nedelja == 7){
//     console.log('Nedelja');
// }else{
//     console.log('Uneli ste pogresan broj');
// }

// 9 zadatak 


let rec = String(prompt('Unesite slovo'));

if(rec === 'a'){
    console.log('SAMOGLASNIK');
}else if(rec === 'e'){
    console.log('SAMOGLASNIK');
    
}else if(rec === 'i'){
    console.log('SAMOGLASNIK');
    
}else if(rec === 'o'){
    console.log('SAMOGLASNIK');
    
}else if(rec === 'u'){
    console.log('SAMOGLASNIK');
    
}
else{
    console.log('SUGLASNIK');
}