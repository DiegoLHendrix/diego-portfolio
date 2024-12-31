// Initialize the CAN modal
const canModal = new bootstrap.Modal('#canModal', {
    keyboard: false
});

// Show the CAN modal when the button is clicked
document.getElementById('showCanModalButton').addEventListener('click', () => {
    canModal.show();
});

// Initialize the LVSS modal
const lvssModal = new bootstrap.Modal('#lvssModal', {
    keyboard: false
});

// Show the LVSS modal when the button is clicked
document.getElementById('showLvssModalButton').addEventListener('click', () => {
    lvssModal.show();
});