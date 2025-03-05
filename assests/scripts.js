// Dynamically create the button and add it to the DOM
const button = document.createElement("button");
button.innerHTML = '<i class="fas fa-arrow-up">';
button.classList.add("scrollToTopBtn");
button.id = "scrollToTopBtn";  // Add ID dynamically

// Add the button to the container
document.getElementById("scrollToTopContainer").appendChild(button);

// Get the button element by class
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};