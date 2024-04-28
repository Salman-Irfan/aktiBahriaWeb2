import { videos } from "../libs/store/ytVideos.js";


const ytVideos = document.getElementById("ytVideos")


// for (let i in videos){
//     // console.log(videos[i])
//     console.log(videos[i].title)
//     videoTitles += videos[i].title 
// }

videos.map((video)=>{
    console.log(video)
    const card = document.createElement('div')
    const thumbnail = document.createElement('img')
    thumbnail.src = video.thumbnail
    thumbnail.alt = video.title
    thumbnail.width = "200"
    
    const title = document.createElement('p')
    title.innerHtml = video.title

    card.appendChild(thumbnail)
    card.appendChild(title)
    ytVideos.appendChild(card)
})

// array map 
// let arrSample = [1,2,3,4,5,"asd", "fdg", "sfjdk"]

// const mappedResult = arrSample.map((a)=>{
//     return a*2
// })

// console.log(mappedResult)

// const newDiv = document.createElement("div")

// ytVideos.appendChild(newDiv)
// newDiv.innerHTML = "sfdkj"