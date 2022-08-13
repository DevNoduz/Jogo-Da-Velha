document.addEventListener('DOMContentLoaded', () => {
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() => {
            alert("O Jogo Acabou - O Vencedor foi " + playertime);
        }, 10);
    
    }


    updateSquares();

}

function updateSquares(){
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
       let position = square.id;
       let symbol = board[position]

       if(symbol != ''){
        square.innerHTML = `<div class='${symbol}'></div>`
       }
    })
}

