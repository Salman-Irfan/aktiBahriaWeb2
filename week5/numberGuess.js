let number = document.getElementById('number');

const button = document.getElementById('button');

const numberForm = document.getElementById('numberForm');

const gameStatus = document.getElementById('gameStatus');

const winningNumber = Math.floor(Math.random() * 100)
console.log(winningNumber)

let attempts = 1 // variable to track record of attempts

numberForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let userInput = number.value // 70

    let userNumber = parseInt(userInput)

    if (userNumber === winningNumber) {
        console.log(`you won`)
        gameStatus.innerHTML = `
            <p>You won in attempts ${attempts} </p>
        `
    } else if (userNumber < winningNumber) {
        // attempts = attempts + 1 
        // attempts+=1
        attempts++ // increment in attempts count
        console.log(`you entered smaller`)
        gameStatus.innerHTML = `
            <p>Smaller</p>
        `
    } else if (userNumber > winningNumber) {
        attempts++ // increment in attempts count
        console.log(`greater`)
        gameStatus.innerHTML = `
            <p>Greater</p>
        `
    }
})