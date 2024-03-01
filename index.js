let btn = document.querySelector('button')
btn.addEventListener("click",fetchData)


let url = "https://reqres.in/api/users"

let container = document.getElementById('container');


function fetchData(){
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then((data) => { 
        let username = data.data;
        appendData(username)
    })
    .catch((error) => {
        console.log(error)
    })
}

function appendData(username){
    username.forEach((item) => {
        let card = document.createElement('div');
        card.className = 'cards'
        let img = document.createElement('img')
        img.src = item.avatar;
        let firstName = document.createElement('h2');
        firstName.textContent = `Firstname : ${item.first_name}`;
        let lastName = document.createElement('h2');
        lastName.textContent = `Lastname : ${item.last_name}`;
        let email =  document.createElement('p');
        email.textContent = `Email : ${item.email}`;

        card.append(img,firstName,lastName,email);
        container.append(card);
    });
}
