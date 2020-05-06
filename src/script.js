const endPoint = `http://localhost:3000/drinks`
const pic = document.getElementsByClassName('drink-avatar')
// console.log(pic)
// const reviewUrl = `http://localhost:3000/`



document.addEventListener('DOMContentLoaded', ()=> {


renderDrinks()



    
document.addEventListener('click', (e)=>{

    if(e.target.className === 'like-btn' ){
        let likeBtn = e.target
        let likes = parseInt(likeBtn.textContent[0])
        likeBtn.textContent = `${likes + 1} Likes ♥`
    }else if(e.target.className === 'drink-avatar'){
        e.preventDefault()
        // console.log(e.target)
        let p = e.target.parentNode 
        let id = p.parentNode.dataset.id
        redirect(id)

    }


})





})

function renderDrinks(){
    fetch(endPoint)
    .then(resp => resp.json())
    .then(drinks => drinks.forEach((drink)=>{
        viewDrinks(drink)
    }))
        
   

}




function viewDrinks(drink){
    // console.log(drink)
    let div = document.getElementById('drink-collection')
    let drinkDiv = document.createElement('div')
    drinkDiv.dataset.id = drink.id
    drinkDiv.innerHTML = 
    `
    <div style="display: table-cell;" class='card'>
    <h2>${drink.name}</h2>
    <img src=${drink.img_url} class="drink-avatar" />
    <button class="like-btn">0 Likes ♥ </button> 
    </div>
    `
    div.append(drinkDiv)
   
}

function redirect(id){
     window.location.href=
     `file:///Users/juliusjamison/Desktop/Thirst_Trap_Frontend/Thirst_Trap_Frontend/drink.${id}.html`

}


// `
// <div class = 'card'>
// <h2>${drink.name}</h2>
// <img src=${drink.image_url} class="drink-avatar" />
// {/* <p>${drink.likes} Likes </p> */}

// </div>
// `


// may have to add likes to seed data?