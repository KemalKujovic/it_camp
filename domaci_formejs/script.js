let inputs = document.querySelectorAll('input');
let errors = {
"ime_prezime": [],
"korisnicko_ime": [],
"email": [],
"lozinka": [],
"ponovi_lozinku": []
};


inputs.forEach((element) => {
    element.addEventListener("change", (e) => {
        let currentInput = e.target; // uzeti svaki input
        let inputValue = currentInput.value; // vrednost koju upisemo
        let inputName = currentInput.getAttribute('name');
        
        if(inputValue.length > 4){
            errors[inputName] = [];
            switch(inputName){
            case 'ime_prezime':
                let validation = inputValue.trim();
                validation = validation.split(" ");
            if(validation.length < 2){
                errors[inputName].push('Moras napisati i ime i prezime');
            }
            break;
            case 'email':
                if(!validationEmail(inputValue)){
                    errors[inputName].push('Neispravna email addresa');
                }
                break;
                case 'ponovi_lozinku':
                    let lozinka = document.querySelector(`input[name="lozinka"]`).value;
                    if(inputValue !== lozinka){
                        errors[inputName].push('Lozinke nisu iste');
                    }
        }

        }  else{
            errors[inputName] = ['Polje ne moze imati manje od 5 karaktera'];
        }
        populateErorrs();
    })
})

const populateErorrs = () => {

    for(let elem of document.querySelectorAll('ul')){
        elem.remove();
    }
    
    for(let key of Object.keys(errors)){
        let input = document.querySelector(`input[name="${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement);
        

        errors[key].forEach(erorr => {
            let li = document.createElement('li');
            li.innerText = erorr;

            errorsElement.appendChild(li);
        })
    }

}


const validationEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
       return true;
    } else{
        return false;
    }
}