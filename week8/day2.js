const descThrouJs = document.getElementById("descThrouJs")

descThrouJs.innerHTML = `
    our bank gives 10% profit
`

const getApiResponse = await axios.get(`http://localhost:3000/get-json`)
console.log(getApiResponse)

const postApiResponse = await axios.post(`http://localhost:3000/post-json`, {
    name: "salman",
    email: "salman@gmail.com",
    message: "lorem ipsum"
})
console.log(postApiResponse)

// put
const putApiResponse = await axios.put(`http://localhost:3000/put-json`, {
    name: "put",
    // email: "salman@gmail.com",
    // message: "lorem ipsum"
})
console.log(postApiResponse)

// patch
const patchApiResponse = await axios.patch(`http://localhost:3000/patch-json`, {
    name: "patch",
    // email: "salman@gmail.com",
    // message: "lorem ipsum"
})
console.log(postApiResponse)

// delete
const deleteApiResponse = await axios.delete(`http://localhost:3000/delete-json/11`)
console.log(deleteApiResponse)