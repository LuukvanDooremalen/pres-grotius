particlesJS.load('particles-js', 'particles-config.json');

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorSwitch");
    const mainContent = document.getElementById("mainContent");

    const colors = ["#912F40", "#006494", "#008148" , "#3D314A", "#231651" ];
    let currentIndex = 0;

    button.addEventListener("click", function () {
        mainContent.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });
});

// moving emoji
const element = document.querySelector('.delay-element');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateElementPosition() {
    const currentX = parseFloat(element.style.left) || 0;
    const currentY = parseFloat(element.style.top) || 0;

    const deltaX = mouseX - currentX;
    const deltaY = mouseY - currentY;

    // Adjust these values to control the speed of following
    const speed = 0.08;

    element.style.left = currentX + speed * deltaX + 'px';
    element.style.top = currentY + speed * deltaY + 'px';

    requestAnimationFrame(updateElementPosition);
}

updateElementPosition();


