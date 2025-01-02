// Initialize the Filter modal
const filterModal = new bootstrap.Modal('#filterModal', {
    keyboard: false
});

// Show the Filter modal when the button is clicked0
document.getElementById('showfilterModalButton').addEventListener('click', () => {
    filterModal.show();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const modalToOpen = urlParams.get('modal');

    if (modalToOpen === 'filter') {
        const filterModal = new bootstrap.Modal(document.getElementById('filterModal'));
        filterModal.show();
    }
});