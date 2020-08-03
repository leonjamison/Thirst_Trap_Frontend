const endPoint = `http://localhost:3001/drinks`
const pic = document.getElementsByClassName('drink-avatar')
// const reviewUrl = `http://localhost:3001/`
document.addEventListener('DOMContentLoaded', ()=> {
renderDrinks()
// window.onload = function() {
//     document.getElementById("my_audio").play();
// }

    document.addEventListener('click', (e)=>{

        if(e.target.className === 'like-btn' ){
            let likeBtn = e.target
            let drink = likeBtn.parentNode
            let currentNum = parseInt(likeBtn.textContent)
            let likes = ++currentNum
            let id = parseInt(drink.dataset.id)
            likeBtn.textContent = `${likes} Likes ♥`
            fetch(`http://localhost:3001/drinks/${id}`, {
                method: 'PATCH',
                headers: 
                {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({likes})
                // .then(r=>r.json())
                // .then(console.log)
            })     
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
        .then(drinks => 
            drinks.forEach((drink)=>{
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
        <div data-id=${drink.id} style="display: table-cell;" class='card'>
        <h2>${drink.name}</h2>
        <img src=${drink.img_url} class="drink-avatar" />
        <br>
        <hr>
        <h3>Rating: ${drink.rating}</h3>
        <button class="like-btn">${drink.likes} Likes ♥ </button> 
        <hr>
        </div>
        `
        div.append(drinkDiv)  
    }

    function redirect(id){
        window.location.href =
        `file:///Users/juliusjamison/Desktop/Thirst_Trap_Frontend/Thirst_Trap_Frontend/drink.${id}.html`

    }

    // function likePics(){
        
        // fetch("http://localhost:3001/drinks", {
        //     method: 'PATCH',
        //     headers: 
        //     {
        //         'content-type': 'application/json',
        //         'accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         likes
        //     })
        // })
    // }




