const endPoint = `http://localhost:3000/drinks`


document.addEventListener('DOMContentLoaded', ()=> {


renderDrinks()
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
    drinkDiv.innerHTML = 
    `
    <div class = 'card'>
    <h2>${drink.name}</h2>
    <img src=${drink.img_url} class="drink-avatar" />
    <button class="like-btn">Like </button> 
    </div>
    `
    div.append(drinkDiv)
}









// `
// <div class = 'card'>
// <h2>${drink.name}</h2>
// <img src=${drink.image_url} class="drink-avatar" />
// {/* <p>${drink.likes} Likes </p> */}

// </div>
// `


// may have to add likes to seed data?