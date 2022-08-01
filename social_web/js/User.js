class User {
    user_id = '';
    username = '';
    email = '';
    password = '';
    api_url = 'https://62e15a2bfa99731d75d4e1ab.mockapi.io';
    create(){
        let data = {
            username: this.username,
            email: this.email,
            password: this.password
        }
        data = JSON.stringify(data);

        fetch(this.api_url + '/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {
            let session = new Session();
            session.user_id = data.id;
            session.startSession();
            window.location.href = 'hexa.html'
        })
    }
    // get(user_id){
    //     let api_url = this.api_url + '/Users/' + user_id;
    //     fetch(api_url)
    //     .then(response => response.json())
    //     .then(data => {
            
    //         document.querySelector('#username').innerText = data['username'];
    //         document.querySelector('#email').innerText = data['email'];

    //         document.querySelector('#korisnicko_ime').value = data['username'];
    //         document.querySelector('#edit_email').value = data['email'];
            
    //     })
    // }

    async get(user_id){
        let api_url = this.api_url + '/Users/' + user_id;
        let response = await fetch(api_url);
        let data = await response.json();
        return data;
    }

    edit(){
        let data = {
            username: this.username,
            email: this.email
        };
        data = JSON.stringify(data);
        let session = new Session();
        session_id = session.getSession();
        fetch(this.api_url + '/Users/' + session_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = 'hexa.html'
        });
    }
   
    login() {
        fetch(this.api_url + '/Users')
        .then(response => response.json())
        .then(data => {

            let login_suscessful = 0;
            data.forEach(db_user => {
                if(db_user.email === this.email && db_user.password === this.password){
                    let session = new Session();
                    session.user_id = db_user.id;
                    session.startSession();
                    login_suscessful = 1;
                    window.location.href = 'hexa.html';
                }
            });
            if(login_suscessful === 0){
                alert('Pogresan email ili lozinka');
            }
        })
    }
    delete(){
        let session = new Session();
        session_id =  session.getSession();

        fetch(this.api_url + '/Users/' + session_id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            let session = new Session();
            session.destroySession();
            window.location.href = '/';
        });

    }
}