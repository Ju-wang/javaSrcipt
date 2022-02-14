const images = [
    "0.webp",
    "1.webp",
    "2.webp"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const image = document.createElement("img")

image.src = `img/${chosenImage}`

document.body.appendChild(image)

