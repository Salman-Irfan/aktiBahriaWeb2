const realApiResponse = await axios.get(`http://localhost:3000/todos/1`)
console.log(realApiResponse.data)


const noteForm = document.getElementById("noteForm")

const title = document.getElementById("title")
const description = document.getElementById("description")

const handleNoteFormSubmission = async(e) => {
    e.preventDefault();
    const noteFormObject = {
        titleValue: title.value,
        descriptionValue: description.value
    }
    // post request
    const realApiPostResponse = await axios.post(`http://localhost:3000/test-post-json`, noteFormObject )
    console.log(realApiPostResponse.data)
}

noteForm.addEventListener("submit", handleNoteFormSubmission)

console.log(valueFromVar)