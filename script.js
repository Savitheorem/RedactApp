document.addEventListener("DOMContentLoaded", () => {
    // Get references to HTML elements
    const originalText = document.getElementById("originalText");
    const redactWords = document.getElementById("redactWords");
    const redactButton = document.getElementById("redactButton");
    const redactedText = document.getElementById("redactedText");

    // Add a click event listener to the redactButton
    redactButton.addEventListener("click", () => {
        // Get the original text and words to redact from input fields
        const textToRedact = originalText.value;
        const wordsToRedact = redactWords.value.split(" ");

        // Redact the specified words with asterisks using a manual function
        const redacted = redactWordsManually(textToRedact, wordsToRedact);

        // Display the redacted text
        redactedText.value = redacted;
    });
});

// Function to redact words from text manually
function redactWordsManually(text, wordsToRedact) {
    // Split the input text into an array of words
    const words = text.split(" ");

    // Iterate through the words
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Check if the word should be redacted
        if (wordsToRedact.includes(word)) {
            // Replace the word with asterisks
            words[i] = "****";
        }
    }

    // Join the words back together into a single text
    return words.join(" ");
}


