console.log("hello");

//initialize 
let grid=document.querySelector(".grid");
let start=document.querySelector(".start");
let playAgain=document.querySelector(".playAgain");
let scoreDisplay= document.querySelector(".scoreDisplay");
//intialize
let speed=1000;
const board = document.getElementById("board");//get the board
const context = board.getContext("2d");//in 2d design
let blockSize = 25;//setting the block size
let totalrow = 20; //total row number
let totalcol = 20; // total column number
let snakebodyx = blockSize * 5;//x position of snake
let snakebodyy = blockSize * 5;//y position of snake
let speedX = 0; //x speed for snake 
let speedY = 0;  // y speed for snake
let snakePart = [];// array for snakepart
let foodX;// food at x position
let foodY; // food at y position
let GameOver = false;//is the gameover
let score=0//score

 //eventlistener-has a changedirection for snake,loads the screen, start the game and playagain
document.addEventListener("click", ()=> {
    document.addEventListener("keyup", changedirection);//change direction of the snake
    restart();//loads the board
    startGame();
  });

  //loads the board
const restart = ()=> {
    board.height = totalrow * blockSize;//set height
    board.width = totalcol * blockSize;//set width
    placefood();//food is placed randomly
    //speed=1000;
    GameOver=false;
    setInterval(update, speed);//set the speed

    
}


 //update the snake
function update() {
    if (GameOver) {//checks if game is over then return
        
        return;
    }
 
    // Background of a Game
    context.fillStyle = "white";
    context.fillRect(0, 0, board.width, board.height);//the rectangle size
 
    // Set food color and position
    context.fillStyle = "orange";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    //snakeX=snake x position,snakey=ypositionofsnake,foodx=food at position x,foody=food at position y
    console.log("snakebodyx","snakebodyy")
    if (snakebodyx == foodX && snakebodyy == foodY) {
        snakePart.push([foodX, foodY]);
        score++;
        placefood();
    }
    // body of snake will grow
    for (let i = snakePart.length - 1; i > 0; i--) {
        // it will store previous part of snake to the current part
        snakePart[i] = snakePart[i - 1];
        
    }
    if (snakePart.length) {
        snakePart[0] = [snakebodyx, snakebodyy];
    }
 
    context.fillStyle = "green";//colorofthesnake
    snakebodyx += speedX * blockSize; //updating Snake position in X coordinate.
    snakebodyy += speedY * blockSize;  //updating Snake position in Y coordinate.
    context.fillRect(snakebodyx, snakebodyy, blockSize, blockSize);
    
    for (let i = 0; i < snakePart.length; i++) {
        context.fillRect(snakePart[i][0], snakePart[i][1], blockSize, blockSize);
    }
 
    if ((snakebodyx < 0) || (snakebodyx > totalcol * blockSize) || (snakebodyy < 0) || (snakebodyx > totalrow * blockSize)) {
         
        // Out of bound condition
            GameOver = true;
            gameOver();
        if(score>0){
            GameOver = true;
            gameOver();
        } 
        
    }
    console.log(snakePart)
    //theforloop the snakes body will increase if it eats the ball
    for (let i = 0; i < snakePart.length; i++) {
        if (snakebodyx == snakePart[i][0] && snakebodyy == snakePart[i][1]) {
             
            // Snake eats own body
            GameOver = true;
            gameOver();
        }
    }
}

// Movement of the Snake  
function changedirection(e) {
   //up
    if (e.code == "ArrowUp" && speedY != 1) {
        // If up arrow key pressed with this condition...
        // snake will not move in the opposite direction
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        //If down arrow key pressed
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        //If left arrow key pressed
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        //If Right arrow key pressed
        speedX = 1;
        speedY = 0;
    }
}
 
// Randomly place food
const placefood=() => {
    
    // in x coordinates.
    foodX = Math.floor(Math.random() * totalcol) * blockSize;
     
    //in y coordinates.
    foodY = Math.floor(Math.random() * totalrow) * blockSize;
}

console.log(GameOver);
function gameOver() {
   
    if(GameOver==true){
    alert(`Your score is: ${score}`)
    return;
    }else if(score>0){
        //score++;
        alert(`Your score is: ${score}`);
        return;
    }else{
        alert(`Your score is: ${score}`)
    }
}
//starts the game
const startGame=()=>{
   GameOver=false;
  
    update();
    placefood();
    welcome();
    gameOver();
}
//add window.revo
//welcome the game
const welcome=()=>{
    if(startGame==true){
        alert("Welcome to the game");
    }else {
        alert(" Let's start the game");
    }
}

const level=()=>{
    GameOver=false;
    const board = document.getElementById("board");//get the board
    const context = board.getContext("2d");//in 2d design
    //clearInterval();
    speed=500;
    restart();
    welcome();
   
    //GameOver=false;
    if(GameOver=false){
        //resetscore();
        startGame();
        
    }else{
        alert("Let's Play");
    }
    gameOver();
    setInterval(update, 2000);

}

const level1=()=>{
    debugger;
    const board = document.getElementById("board");//get the board
    const context = board.getContext("2d");//in 2d design
    restart();
    welcome();
    if(GameOver=false){
        //resetscore();
        startGame();
    }else{
        alert("Let's Play");
    }
    gameOver();
    //clearInterval(update);
    setInterval(update, 3000);

}
const level2=()=>{
    
    const board = document.getElementById("board");//get the board
    const context = board.getContext("2d");//in 2d design
    restart();
    welcome();
    if(GameOver=false){
        //resetscore();
        startGame();
    }else{
        alert("Let's Play");
    }
    gameOver();
    //clearInterval(update);
    setInterval(update, 4000);

}

 startGame();