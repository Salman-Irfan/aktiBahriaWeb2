const displayApiData = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        console.log(response)
    } catch (error) {
        console.log(error.message)
        if(error.message){
            alert(`service unavailable for some technical reason`)
        }
    }
}
displayApiData()


console.log(123)

const checkServer = document.getElementById("checkServer")

checkServer.innerHTML = `
    <p>changed through js client side side</p>
`