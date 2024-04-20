const number = document.getElementById('number');

const button = document.getElementById('button');

const numberForm = document.getElementById('numberForm');

numberForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(`btn click event fired`)
})

