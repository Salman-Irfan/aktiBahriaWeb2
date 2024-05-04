let originalTitle = document.title;

let changedTitle = "some title changed"

document.title = changedTitle

const handleOriginalTitle = () => {
    document.title = originalTitle
}

setInterval(handleOriginalTitle, 1000);

const handleChangedTitle = () => {
    document.title = changedTitle
}
setInterval(handleChangedTitle, 2300);