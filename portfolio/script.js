const typedTextElement = document.getElementById('name'); // Ensure you have the correct ID here
const cursorElement = document.getElementById('cursor'); // Get the cursor element
const textArray = ["Achraf Ikisse", "A computer Science Student, AI and Big Data focused"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingSpeed = 100; // Speed of typing (milliseconds)
let isDeleting = false;

function type() {
    const currentText = textArray[currentTextIndex];

    // If deleting, reduce the text
    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    // Display the current text in the span
    typedTextElement.textContent = currentText.substring(0, currentCharIndex);

    // Show cursor when typing
    cursorElement.style.display = 'inline';

    // If the text is fully typed, start deleting after a delay
    if (currentCharIndex === currentText.length) {
        isDeleting = true;
        setTimeout(() => {
            cursorElement.style.display = 'none'; // Hide cursor when deleting
            type();
        }, 2000); // Delay before starting to delete
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textArray.length; // Move to next text
        setTimeout(() => {
            type();
        }, 1000); // Delay before starting to type the next text
    } else {
        setTimeout(type, typingSpeed); // Continue typing
    }

    // Blink cursor
    cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
    setTimeout(() => {
        cursorElement.style.visibility = 'visible'; // Keep cursor visible for typing
    }, typingSpeed); // Adjust blink speed as needed
}

// Start the typing effect
type();
