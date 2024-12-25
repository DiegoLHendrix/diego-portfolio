document.addEventListener('DOMContentLoaded', (event) => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']; // Array holding a variation of the Konami code
    let currentIndex = 0; // Index of the current key in the sequence

    document.addEventListener('keydown', (event) => { // Listen for keydown events
        if (event.key === sequence[currentIndex]) { // Check if the key is the expected key in the sequence
            currentIndex++; // Move to the next key in the sequence
            if (currentIndex === sequence.length) { // Check if the sequence is complete
                // alert('Sequence completed!'); // Alert the user that the sequence is complete
                const imageAlertModal = new bootstrap.Modal(document.getElementById('imageAlertModal')); // Show the custom modal with the image
                imageAlertModal.show();
                currentIndex = 0; // Reset the sequence
            }
        } else {
            currentIndex = 0; // Reset if the sequence is broken
        }
    });
});