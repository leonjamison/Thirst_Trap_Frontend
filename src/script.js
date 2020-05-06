const endPoint = `http://localhost:3000/drinks`
const reviewUrl = `http://localhost:3000/reviews`



document.addEventListener('DOMContentLoaded', ()=> {


renderDrinks()
getReviewObj()
    


    





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
    <button class="like-btn">0 Likes</button> 
    </div>
    `
    div.append(drinkDiv)
}

function getReviewObj(){
    fetch(reviewUrl)
    .then(resp => resp.json())
    .then(reviews => reviews.forEach((review)=>{
        addLikes(review)
    }) )


}

function addLikes(review){
    console.log(review)

    // document.addEventListener('click', (e)=>{

    //     // if(e.target.className === 'like-btn' ){
    //     //     console.log(likes.likes)
            
    //     //     let likeBtn = e.target
    //     //     // debugger
    //     //     // // console.log(likeBtn.textContent[0])
    //     //     likeBtn.textContent = `${likes.likes} Likes`
    //     //     // let likes = parseInt(likeBtn.textContent[0])


    //     //     // likeBtn.textContent = `${likes.likes} likes`
           
    //     //     // console.log(likeBtn)
            
    //     // }


    // })

}






// `
// <div class = 'card'>
// <h2>${drink.name}</h2>
// <img src=${drink.image_url} class="drink-avatar" />
// {/* <p>${drink.likes} Likes </p> */}

// </div>
// `


// may have to add likes to seed data?