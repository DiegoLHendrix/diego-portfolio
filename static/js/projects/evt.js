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

// Show the LVSS or CAN modal when the button is clicked
document.getElementById('showLvssModalButton').addEventListener('click', () => {
    lvssModal.show();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const modalToOpen = urlParams.get('modal');

    if (modalToOpen === 'lvss') {
        const lvssModal = new bootstrap.Modal(document.getElementById('lvssModal'));
        lvssModal.show();
    } else if (modalToOpen === 'can') {
        const canModal = new bootstrap.Modal(document.getElementById('canModal'));
        canModal.show();
    }
});