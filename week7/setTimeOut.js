const orig = document.getElementById("orig")

setTimeout(() => {
    console.log(`time out func got called`)
}, 5000);

const handleDisplayNote = () => {
    const noteDiv = document.createElement('div')
    noteDiv.innerHTML = `some notification
        <button >x</button>
    `
    noteDiv.style.color="red"
    noteDiv.style.position="absolute"
    noteDiv.style.left="50%"
    noteDiv.style.top="50%"
    
    orig.appendChild(noteDiv)
}

setTimeout(handleDisplayNote, 3000);

console.log(`first`)

