const images = [
    "경복궁.jpg",
    "경희궁.jfif",
    "덕수궁.jpg",
    "창경궁.jfif",
    "창덕궁.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src  = `image/${chosenImage}`;

document.body.appendChild(bgImage);