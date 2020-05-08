const endPoint = `http://localhost:3000/users/1`



document.addEventListener('DOMContentLoaded', ()=>{


    getUser()

})




function getUser(){
    fetch(endPoint)
    .then(r=>r.json())
    .then(user => createUser(user))
}

function createUser(user){
    let div = document.getElementsByClassName('user-profile')[0]
    console.log(div)
    let userDiv = document.createElement('div')
    userDiv.class = 'profile-card'
    userDiv.innerHTML = 
    `
    <h2>User Name: ${user.name}</h2>
    <h2>City: New York, NY </h2>
    <h2>Background: 6 Years In the Restaruant Industry</h2>
    
    `
    div.append(userDiv)


}