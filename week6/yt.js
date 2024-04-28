const ytCard = {
    thumbnail: `https://cdn.vectorstock.com/i/1000x1000/74/38/water-wave-js-logo-swoosh-letter-design-vector-37697438.webp`,

    title: `java script tutorial`,

    channelName: `COde with Harry`,

    numberOfViews: `300000`,

    uploadTime: `1-Jan-2024`

}

const displayYtCard = document.getElementById("displayYtCard")

displayYtCard.innerHTML = `
    <img src="${ytCard.thumbnail}"  alt="JS" width="400" height="250px" />
    <p>${ytCard.title}</p>
    <p>${ytCard.channelName}</p>
    <p>
        <span>${ytCard.numberOfViews}</span>
        <span>${ytCard.uploadTime}</span>
    </p>
`