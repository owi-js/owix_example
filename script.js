const button = document.getElementById('clickme');
const output = document.getElementById('output');

// Add event listener for interactivity
button.addEventListener('click', () => {
    output.textContent = 'WONDERHOY!';
});

// Example of dynamic content
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and interactive.');
});
