// Script loaded check
console.log("Portfolio JavaScript is connected successfully");

// Welcome message
window.onload = function () {
    console.log("Welcome to my portfolio website!");
};

// Simple alert on name click (optional)
const header = document.querySelector("header h1");

if (header) {
    header.addEventListener("click", function () {
        alert("Hello! Welcome to my portfolio 😊");
    });
}

