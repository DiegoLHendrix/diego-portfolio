document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.skill'); // Select all cards with class "skill"

    cards.forEach(card => {
        const hiddenElement = card.querySelector('.hidden-element'); // Find the hidden element in each card

        if (hiddenElement) {
            card.addEventListener('mouseenter', function () {
                hiddenElement.classList.remove('hidden'); // Show the hidden element
            });

            card.addEventListener('mouseleave', function () {
                hiddenElement.classList.add('hidden'); // Hide the hidden element
            });
        }
    });
});

function viewDetails(url) {
    window.location.href = url; // Redirect to the specified URL
}
