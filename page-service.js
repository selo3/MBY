const background = document.querySelector(".background");

// Create 100 div elements with the class "block" and append them to the "background."
for (let i = 0; i < 100; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  background.appendChild(block);
}

// Define the animation function using Anime.js
const animateBlocks = () => {
  anime({
    targets: ".block",
    translateX: () => anime.random(-700, 700),
    translateY: () => anime.random(-500, 500),
    scale: () => anime.random(1, 5),
    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks
  });
};

// Start the animation
animateBlocks();

