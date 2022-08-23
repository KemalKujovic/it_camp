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

// if(avgOcena > 91 && avgOcena <= 100){
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

// let rec = prompt('Unesite slovo');

// if(rec === 'a'){
//     console.log('SAMOGLASNIK');
// }else if(rec === 'e'){
//     console.log('SAMOGLASNIK');

// }else if(rec === 'i'){
//     console.log('SAMOGLASNIK');

// }else if(rec === 'o'){
//     console.log('SAMOGLASNIK');

// }else if(rec === 'u'){
//     console.log('SAMOGLASNIK');

// }
// else{
//     console.log('SUGLASNIK');
// }

// for(i = 171; i > 16; i--){
//     console.log(i);
// }

// zadatak 5

// for(i = 1; i <= 10; i++){
//     if(i === 7) continue;
//     console.log(i);

// if(i != 7){
//     console.log(i);
// }
// }

// // zadatak 6
// let ukupno = 0
// for(i = 0; i <=20; i += 2){

//     ukupno += i;
//     console.log(`Nakon broja, ${i} zbir je ${ukupno}`);
// }

// // zadatak 7
// for(i = 0; i < 3; i++){
//     console.log(`${i} python`);
// }

// for(i = 0; i < 3; i++){
//     console.log(`${i} je super`);
// }

// let i = 0;

// while (i <= 10) {
//   i++;
//   if(i === 7){
//     continue;
//   }else{

//       console.log(i);
//   }
// }

// const broj = Number(prompt('Unesite broj'));

// let i = 0;

// while(i<broj){
//     i++;
//     if(i % 3 === 0){
//         console.log(i);
//     }

// }

// do{
//     console.log(i);
//     i++
// }while(i < 12);

// // koiristici for petlju izbrisati razmake date recenice.
// let recenica = "Danas je nakon 20 dana padala kisa";
// let recenica2 = "";

// for(let i = 0; i < recenica.length; i++){
//     if(recenica[i] === " ") {
//         continue;
//     }else{
//         recenica2 += recenica[i];
//     }
// }
// console.log(recenica2);

//

// let recenica = "IT Camp je kurs koji treba da traje 9 meseci"

// let recenica2 = "";

// // izbrisati a i m karaktere date racenica;

// for(let i = 0; i < recenica.length; i++){
//     if(recenica[i] === 'a' || recenica[i] === 'm'){
//         continue
//     }else{
//         recenica2 += recenica[i]
//     }
// }

// console.log(recenica2);

// .toUpperCase();
// fizz bazz challenge

// iteracija se vrsi od 1 do 100(ukljucici 100).
// ako je dati broj deljiv sa 3 u konzoli se ispisuje FIZZ,
// ako je dati broj deljiv sa 5 u konozoli se ispisuje BUZZ,
// ako je dati broj deljiv i sa i sa 5 ispisuje fizz i buzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ i Buzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   }else{
//     console.log(i);
//   }
// }

// let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// let recenica2 = '';

// for(let i = 0; i < recenica.length; i++){
//     if(i === 0){

//         recenica2 += recenica[i].toUpperCase();
//     }else if(recenica[i-1] === " "){

//         recenica2 += recenica[i].toUpperCase();
//     }else{
//         recenica2 += recenica[i]
//     }

// }
// console.log(recenica2);

// let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// let recenica2 = '';

// for(let i = 0; i < recenica.length; i++){
//     if(i === 0){

//         recenica2 += recenica[i].toUpperCase();
//     }else if(recenica[i+1] === " "){

//         recenica2 += recenica[i].toUpperCase();
//     }else{
//         recenica2 += recenica[i]
//     }

// }
// console.log(recenica2);

// let recenica = "Nakon svakog vezbanje je preporuka postaviti promene na github";

// // sabrati razmake i ispisati njihov broj u konzoli.
// let brojRazmaka = 0;
// for(let i = 0; i <= recenica.length - 1; i++){
//     if(recenica[i] === " "){
//         brojRazmaka++;

//     }
// }

// console.log(brojRazmaka);

// Iz date recenice izbrisati razmake i ispisati u konzoli novudobijanu recenicu/

// let recenica = "nakon svakog vezbanje je preporuka postaviti promene na github";

// napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom

// let recenica2 = '';

// for(let i = 0; i < recenica.length ; i++){
//     if(i === recenica.length - 1){

//         recenica2 += recenica[i].toUpperCase();
//     }else if(recenica[i+1] === " "){

//         recenica2 += recenica[i].toUpperCase();
//     }else{
//         recenica2 += recenica[i]
//     }

// }
// console.log(recenica2);

// let recenica = "nakon svakog vezbanje je preporuka postaviti promene na github";

// let recenica2 = '';
// for (let i = 0; i < recenica.length; i++){
//     if(recenica[i] === ' '){
//         continue;

//     }else{
//         recenica2 += recenica[i]
//     }
// }
// console.log(recenica2);

// if(password === nekipassword){
//     console.log(nekipassword);
// }else{
//     console.log('uneli ste pogresnu lozinku');
// }

// let nekipassword = 'kemal123'
// let password = prompt('Unesite vasu sifru');

// korisnik = '';

// while(korisnik !== nekipassword){
//     korisnik = prompt('Unesite sifru')
// }

//

// let broj = 35;
// let korisnik = 0;

// while(broj === korisnik){

//     if(broj !== 35){
//         if(broj > 35){
//             alert('Vas broj je veci');
//         }else if(broj < 35){
//             alert('vas broj je manji')
//         }
//     }
//     korisnik =  prompt('Unesite broj');
// }

// console.log('Pogodili ste broj');

// let noviBr = 0;

// while(true){
//     let broj1 = Number(prompt('unesite vas prvi broj'));
//     let broj2 = Number(prompt('unesite vas drugi broj'));
//     let opert = prompt('Unesite znak');
//     if(opert === '+'){
//         alert(broj1 + broj2);
//     }else if(opert === '-'){
//         alert(broj1 - broj2)
// }

// if(opert === '0'){
//     alert('izlaz')
//     break;
// }
// }

// let broj = 35;

// let korisnik = null;

// while(broj !== korisnik){
//     korisnik = Number(prompt('Unesite vas broj'));
//     if(broj > korisnik){
//         alert('Uneli ste manji broj');

//     }else if(broj < korisnik){
//         alert('uneli ste veci broj');
//     }else{
//         console.log('uneli ste ispriavan broj');
//     }
// }
// alert('tacan broj');

// 1.
// let number = 50312312;

// let rec = String(number).length;
// console.log(rec);

// 2.
// const racunanje = function(brojcic){

//     let rec = String(brojcic).length;
//     console.log(rec);
// }

// racunanje(23123);

// 3.

// const racunanje = function(){
//     let broj = Number(prompt('unesite vas broj'));
//     let rec = String(broj).length;
//     console.log(rec);
// }

// racunanje();

// parne elementa niza proveravamo
// let nizovi = [];

// broj = 10;
// for(let i = 0; i < broj; i++){

//     el = prompt('unesite element');
//     if(el % 2 === 0){

//         nizovi.push(el);
//     }

// }
// console.log(nizovi);

// for (let i = 0; i < nizovi.length; i++) {
//     console.log(nizovi[i]);

// }

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = niz.length - 1; i >= 0; i--){
//     console.log(niz[i]);
// }
// conctact
// let niz = [1,2,3,4,5];
// maxEl = niz[0];
// secEl = niz[0];

// for (let i = 0; i < niz.length; i++) {
//     if(niz[i] > maxEl){
//       maxEl = niz[i];
//     }

// }
// console.log(maxEl);
// for(let i = 0; i < niz.length; i++){
//   if(niz[i] < maxEl && niz[i] > secEl){
//     secEl = niz[i]
//   }
// }
// console.log(secEl);

// 2 zadatak

// let niz = [];
// let broj = 10;
// let ukupno = 0;
// for(let i = 0; i < broj; i++){
//     unos = Number(prompt('unesite broj'));
//     niz.push(unos)
// }
// console.log(niz);
// for(let i = 0; i < niz.length; i++){
//     // ukupno += niz[i];
//     ukupno = ukupno + niz[i]

// }
// console.log(ukupno);

// bonus zadatak

// let niz = [13, 214, 44, 33];
// maxEl = niz[0];
// secEl = 0;
// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] > maxEl) {
//     secEl = maxEl; // stavljamo zadnju vrednost od maxEl
//     maxEl = niz[i];
//   }
//   if (niz[i] !== maxEl && niz[i] > secEl) {
//     secEl = niz[i];
//   }
// }
// console.log(maxEl);
// console.log(secEl);

// 11 zadatak

// deklarirajte niz naziva niz i ogranicte ga na 10 elemenata. , kopirate u drugi niz samo parne elemente prvog niza.

// let niz = [3, 4, 5, 7, 6, 8, 9, 10];
// let emptyNiz = [];
// for (let i = 0; i < niz.length; i++) {
//   if(niz[i] % 2 === 0){
//     emptyNiz.push(niz[i])

//   }
// }
// console.log(emptyNiz);

// 12 zadatak
// napunite niz s 10 elemenata i ispiste najveci i najmanji element niza (min/max);

// let niz = [4, 3, 5, 6, 7, 8, 9, 10];
// maxNum = niz[0];
// minNum = niz[0];
// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] > maxNum) {
//     maxNum = niz[i];
//   }
//   if (niz[i] < minNum) {
//     minNum = niz[i];
//   }
// }
// console.log('Najveci broj ' + maxNum);
// console.log('Najmanji broj ' + minNum);
