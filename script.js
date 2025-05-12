// Existing menu toggle code
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Initialize EmailJS with your public key
(function() {
    emailjs.init("ASVOFc88uy1njgDYd");  // Replace with your actual public key from the EmailJS dashboard
})();

// Send the form data using EmailJS
function emailSend(event) {
    event.preventDefault(); // Prevent form submission (default behavior)

    const form = document.getElementById("contact-form");

    // Send the form data to the EmailJS service
    emailjs.sendForm('service_pyvpiz6', 'template_1hljibk', form)
    .then(() => {
        alert("Email sent successfully!");
        form.reset(); // Reset the form after successful submission
    }, (error) => {
        alert("Failed to send email: " + error.text); // Show error if email sending fails
    });
}
