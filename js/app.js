let gridbox = document.querySelectorAll(".grid-item");
let newgame = document.getElementById("play")
let random = Math.floor(Math.random(0) * gridbox.length);




for (let i = 0; i < gridbox.length; i++){

    if(gridbox[random].addEventListener("click", function (){
        this.style.backgroundColor = 'green'
    })){
    }else
        gridbox[i].addEventListener("click", function (){
            this.style.backgroundColor = 'red';
        })
}

gridbox[random].addEventListener("click", function (){
    alert("You sank the enemy ship!")
})

newgame.addEventListener("click", function newgame(){
    location.reload();

})


