particlesJS.load('particles-js', 'particles-config.json');


// const jaar1 = document.getElementById('jaar1');

// const headerslide = document.getElementById('cool-animation');

const jaarElements = document.getElementsByClassName('jaar');

// Assuming you want to add the click event to all elements with the class 'jaar'
for (let i = 0; i < jaarElements.length; i++) {
    jaarElements[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}

// moving emoji
// const element = document.querySelector('.delay-element');
// let mouseX = 0;
// let mouseY = 0;

// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function updateElementPosition() {
//     const currentX = parseFloat(element.style.left) || 0;
//     const currentY = parseFloat(element.style.top) || 0;

//     const deltaX = mouseX - currentX;
//     const deltaY = mouseY - currentY;

//     // Adjust these values to control the speed of following
//     const speed = 0.08;

//     element.style.left = currentX + speed * deltaX + 'px';
//     element.style.top = currentY + speed * deltaY + 'px';

//     requestAnimationFrame(updateElementPosition);
// }

// updateElementPosition();






