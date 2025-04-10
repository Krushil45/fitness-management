// Greeting the user based on time of day
window.addEventListener('load', () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(`${greeting} Welcome to Elysius Fitness System!`);
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // If it's an anchor link on same page, prevent default
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Gallery image popup modal
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';
        modal.style.cursor = 'pointer';

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.style.width = 'auto';
        modalImg.style.height = '80vh'; // Consistent height
        modalImg.style.maxWidth = '90vw'; // Prevent overflow
        modalImg.style.borderRadius = '10px';
        modalImg.style.boxShadow = '0 0 15px white';
        modalImg.style.objectFit = 'cover';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});

