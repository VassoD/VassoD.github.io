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

const typingTextElement = document.getElementById("typing-text");
let phraseIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < phrases[phraseIndex].length) {
    typingTextElement.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingTextElement.textContent = phrases[phraseIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});
