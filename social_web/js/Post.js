class Post {
    post_id = '';
    post_content = '';
    user_id = '';
    likes = '';
    api_url = 'https://62e15a2bfa99731d75d4e1ab.mockapi.io'

    async create(){
        let session = new Session();
        session_id = session.getSession();
        
        let data = {
            user_id: session_id,
            content: this.post_content,
            likes: 0
        }
        data = JSON.stringify(data);

        let response = await fetch(this.api_url + '/Posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        data = await response.json();

        return data;
    }
    async getAllPosts(){
    let response = await fetch(this.api_url + '/Posts');
    let data = await response.json();
    return data;
}

like(post_id, likes){
    let data = {
        likes: likes,
    };
    data = JSON.stringify(data);
    fetch(this.api_url + '/Posts/' + post_id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {alert('Post lajkovan!')});
}

delete(post_id){
    fetch(this.api_url + '/Posts/' + post_id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Post obrisan')
    });
}
}