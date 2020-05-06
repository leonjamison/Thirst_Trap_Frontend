document.addEventListener('DOMContentLoaded', ()=>{
    
    

    renderDrink()
    addComment()
        
    
    
    
    })
    
    function renderDrink(){
        fetch(`http://localhost:3000/drinks/3`)
        .then(resp => resp.json())
        .then(drink => viewDrink(drink))
    
    }
    
    
    function viewDrink(drink){
        // console.log(drink)
        let div = document.getElementById('drink-collection')
        let drinkDiv = document.createElement('div')
     
        drinkDiv.innerHTML = 
        `
        <div style="display: table-cell;" class='card'>
        <h2>${drink.name}</h2>
        <img src=${drink.img_url} class="drink-avatar" />
        <p>${drink.recipe}</p>
        <hr>
        <ul class ='comments' style="font-size: large;">
        <li>AMAZING and not too sweet!</li>
        </ul>
        <form class="comment-form">
        <input class="comment-input"
         type="text"
         name="comment"
         placeholder="Add a comment...">
         <button class="comment-button" type="submit"> Post</button>
       </form>
        </div>
        
        `
        div.appendChild(drinkDiv)
    }
    
    function addComment(){
    
        document.addEventListener('submit', (e)=>{
            e.preventDefault()
            let formInput = e.target[0]
            
            if(formInput.className === "comment-input"){
        
                let ul = document.getElementsByClassName('comments')[0]
                let li = document.createElement('li')
                li.innerText = formInput.value
                ul.appendChild(li)
               
    
            }
        })
    
    
    }