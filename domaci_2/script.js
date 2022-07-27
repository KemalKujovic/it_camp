let btn = document.querySelector('button');

    btn.addEventListener('click', () => {

    let value = document.querySelector('input').value;
    
    if(value.includes('@') && value.includes('.')){
        let gl_div = document.querySelector('.glavni-div');
        let pozicijaAt = value.indexOf('@');
        let pozicijaTacke = value.indexOf('.');
        let izmedjuAtTacke = value.substring(pozicijaAt + 1, pozicijaTacke);
        let prijeAt = value.substring(0 , pozicijaAt);
        let posleTacke = value.substring(pozicijaTacke, value.length);
        if(izmedjuAtTacke.length > 2){
            

            if(prijeAt.length > 4){
                if(posleTacke.length > 3){
                    gl_div.innerHTML = `<span>Uspeno ste se Prijavili</span>`;
                }else{
                    console.log('nije dobroo');
                }
            } else{
                console.log('nije dobro');
            }


        }else{
            console.log('NIJE DOBRO');
        }

    } else{
        console.log('nije dobro');
    }

   });