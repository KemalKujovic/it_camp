let config = {
    'ime_prezime': {
        required: true,
        minlength: 3,
        maxlength: 50
    },
    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength: 50
    },
    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50
    },
    'broj_telefona': {
        required: false,
        minlength: 9,
        maxlength: 15,
    },
    'lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },
        'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'lozinka'
    },
    'zip_code': {
        required: true,
        minlength: 5,
        maxlength: 6,
    }
};


let validator = new Validator(config);




// Domaci dodaditi zip code da moze samo brojevi i to maksimalno 5 brojeva.















































// sa klasom
// class Osoba {
//     constructor(frist_name, last_name, phone){
//         this.frist_name = frist_name;
//         this.last_name = last_name;
//         this.phone = phone;
//     }
//     getNameAndPhone(){
//         console.log(`${this.frist_name}-${this.phone}`);
//     }
// }

// let osoba1 = new Osoba('Kemal', 'Kujovic', '121212121');
// let osoba2 = new Osoba('Legi', 'Kujovic', '121313121');

// console.log(osoba1.last_name);

// osoba1.getNameAndPhone();
// osoba2.getNameAndPhone();




// const Osoba = {
//     frist_name: 'Kemal',
//     getNameAndPhone: function(){
//         console.log(`${this.frist_name} - ${this.phone}`);
//     }
// }

// let legi = Object.create(Osoba);
// legi.frist_name = 'Legi'
// legi.phone = '121212'
// legi.getNameAndPhone();

// let Amir = Object.create(Osoba);
// Amir.phone = '2121212';
// Amir.frist_name = 'Amir';
// Amir.getNameAndPhone();



























// object konstuktor
// function Osoba(frist_name, last_name, phone){
//     this.frist_name = frist_name;
//     this.last_name = last_name;
//     this.phone = phone;
//     this.getNameAndPhone = function(){
//         console.log(`${frist_name} - ${phone}`);
//     }

// }

// let osoba1 = new Osoba('Kemal', 'Kujovic', '06231533');
// let osoba2 = new Osoba('Legi', 'Kujovic', '06111333');
// osoba1.getNameAndPhone();
// osoba2.getNameAndPhone();




// object literal


// const Osoba = {
//     frist_name: 'Kemal',
//     last_name: 'Kujovic',
//     phone: '0625124213',

//     getNameAndPhone: function(){
//         console.log(`${this.frist_name} - ${this.phone}`);
//     }
// }

// const Osoba2 = {
//     frist_name: 'Legi',
//     last_name: 'Kujovic',
//     phone: '06233333',

//     getNameAndPhone: function(){
//         console.log(`${this.frist_name} - ${this.phone}`);
//     }
// }

// Osoba.getNameAndPhone();
// Osoba2.getNameAndPhone();