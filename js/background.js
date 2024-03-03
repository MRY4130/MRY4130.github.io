//background image
const images = ["img (1).jpg", "img (2).jpg", "img (3).jpg", "img (4).jpg", "img (5).jpg", "img (6).jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.append(bgImage);
