// Initialize the Filter modal
const filterModal = new bootstrap.Modal('#filterModal', {
    keyboard: false
});

// Show the Filter modal when the button is clicked
document.getElementById('showfilterModalButton').addEventListener('click', () => {
    filterModal.show();
});