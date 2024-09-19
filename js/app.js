let gridbox = document.querySelectorAll(".grid-item");
let newgame = document.getElementById("play")
let random = Math.floor(Math.random(0) * gridbox.length);




for (let i = 0; i < gridbox.length; i++){

    if(gridbox[i].addEventListener("click", function miss(){
        this.style.backgroundColor = 'red';
    })){

    }else{
        gridbox[random].addEventListener("click", function win(){
            this.style.backgroundColor = 'green'
        })
    }
        
}

gridbox[random].addEventListener("click", function (){
    alert("You sank the enemy ship!")
})

newgame.addEventListener("click", function newgame(){
    location.reload();
})

