// Selectors and variables
const grid = document.querySelector('.snake-grid')
const startButton = document.getElementById('start')
const scoreDisplay = document.getElementById('score')

let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0
let chillIndex = 0
let powerIndex = 0
let score = 0
let intervalTime = 500
const speed = 0.9
let timerId = 0
let colors = ['snake1', 'snake2', 'snake3']

//create the snakeBoard
function createGrid() {
    for (let i=0; i < width*width; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)   
        squares.push(square)
    }
}
createGrid()

// give snake class
currentSnake.forEach(index => squares[index].classList.add('snake'))
// Give snake 3 different colors
function coralSnake(){   
    for (let i = 0; i < currentSnake.length; i++){
        squares[currentSnake[i]].classList.add(colors[i % 3])
        squares[currentSnake[i]].classList.remove(colors[(i + 1) % 3])
        squares[currentSnake[i]].classList.remove(colors[(i + 2) % 3])
    }
}
coralSnake()

// resets needed to start the game
function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake', 'snake1', 'snake2', 'snake3'))
    squares[appleIndex].classList.remove('apple')
    squares[chillIndex].classList.remove('chillpill')
    squares[powerIndex].classList.remove('power')
    clearInterval(timerId)
    currentSnake = [2, 1, 0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 500
    generateFood()  
    //readd the class of snake and color to new currentSnake
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
    coralSnake()
}

function move() {
    // handle loss scenarios
    if (
        //if snake has hit bottom
        (currentSnake[0] + width >= width*width && direction === width) || 
        //if snake has hit right wall
        (currentSnake[0] % width === width-1 && direction === 1) ||
        //if snake has hit left wall
        (currentSnake[0] % width === 0 && direction === -1) ||
        //if snake has hit top
        (currentSnake[0] - width < 0 && direction === -width) ||
        //if snake eats itself
        squares[currentSnake[0] + direction].classList.contains('snake')
        )
        // stop the game
        return clearInterval(timerId)

    //remove last element from currentSnake array
    const tail = currentSnake.pop()
    //remove styling from last element
    squares[tail].classList.remove('snake', 'snake1', 'snake2', 'snake3', 'chillpill', 'power')
    //add new snake head in snake's direction
    currentSnake.unshift(currentSnake[0] + direction)
    
    //deal with snake head eating apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        generateFood()
        score++
        scoreDisplay.textContent = score
        //speed up snake
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime) 

    //  slow snake when it eats chillpill
    }else if (squares[currentSnake[0]].classList.contains('chillpill')){
        squares[currentSnake[0]].classList.remove('chillpill')
        generateFood() 
        clearInterval(timerId)
        intervalTime = intervalTime * 1.1
        timerId = setInterval(move, intervalTime) 

    // speed snake up when it eats powerPill
    }else if (squares[currentSnake[0]].classList.contains('power')){
        squares[currentSnake[0]].classList.remove('power')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        score += 2
        scoreDisplay.textContent = score

        generateFood()  
        clearInterval(timerId)
        intervalTime = intervalTime * Math.pow(speed, 4)
        timerId = setInterval(move, intervalTime)         
    }
    //add class to new snake head
    squares[currentSnake[0]].classList.add('snake')
    //keep snake 3-colored
    coralSnake()
}
// create new food
function generateFood() {
    let randomFood = Math.floor(Math.random()*11)
    if (randomFood < 7){
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
    } else if (randomFood >= 7 && randomFood <9){
        do {
            chillIndex = Math.floor(Math.random() * squares.length)
        } while (squares[chillIndex].classList.contains('snake'))
        squares[chillIndex].classList.add('chillpill')
    } else if (randomFood >= 9){
        do {
            powerIndex = Math.floor(Math.random() * squares.length)
        } while (squares[powerIndex].classList.contains('snake'))
        squares[powerIndex].classList.add('power')
    }
}
generateFood()

// change snake's direction according to keys pressed
function control(e) {
    // right
    if (e.keyCode === 39) {        
        direction = 1
    } //up
     else if (e.keyCode === 38) {       
        direction = -width
    } //left
    else if (e.keyCode === 37) {  
        direction = -1
    } //down
    else if (e.keyCode === 40) {       
        direction = width
    }
}

// run the control function on each keyup
document.addEventListener('keyup', control)
// hook up start button to start function
startButton.addEventListener('click', startGame)

// prevent arrow keys from scrolling page
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);