// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Add a click event listener to the button
  const button = document.getElementById('clickMeButton');
  button.addEventListener('click', function() {
    alert("Button clicked! You can integrate more features here.");
  });

  // Log a simple message to confirm that the JS is loaded
  console.log("Static Web App Loaded!");
});
