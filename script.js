// script.js

// Open the contact form modal
const getYoursBtn = document.getElementById('getYoursBtn');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModalBtn');

getYoursBtn.addEventListener('click', () => {
    contactModal.style.display = 'block'; // Show the modal
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
    contactModal.style.display = 'none'; // Hide the modal
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});
