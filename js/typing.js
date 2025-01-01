const textDisplay = document.querySelector(".text-typing");
const phrases = [
  "Building intuitive web applications ✨",
  "Turning designs into pixel-perfect code ✨",
  "Optimizing performance & usability ✨",
  "Crafting responsive web experiences ✨",
  "Engineering for better user experiences ✨",
  "Writing clean, efficient code ✨",
  "Creating seamless digital experiences ✨",
  "Passionate about UX/UI excellence ✨",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
let cursorVisible = true;

function updateDisplay() {
  // Always maintain at least one non-breaking space to prevent collapse
  const text = currentPhrase.length > 0 ? currentPhrase.join("") : "\u00A0";
  textDisplay.innerHTML = text + (cursorVisible ? "|" : "\u00A0");
}

function loop() {
  isEnd = false;

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      updateDisplay();
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      updateDisplay();
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const spedUp = 50;
  const normalSpeed = 100;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

  setTimeout(loop, time);
}

// Cursor blinking effect
setInterval(() => {
  cursorVisible = !cursorVisible;
  updateDisplay();
}, 400);

// Initialize with a non-breaking space
textDisplay.innerHTML = "\u00A0";
loop();
