function redirectTo(url) {
    window.location.href = url;
}

// Create multiple fire particles
const fireContainer = document.getElementById('fire-container');
const particleCount = 50; // Number of particles
const particles = [];

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    particles.push(particle);
}

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    particles.forEach((particle, index) => {
        setTimeout(() => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 20;
            const x = clientX + radius * Math.cos(angle);
            const y = clientY + radius * Math.sin(angle);
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = 1;
            particle.style.transform = `translate(-50%, -50%) scale(${Math.random() * 1.5})`;
            setTimeout(() => {
                particle.style.opacity = 0;
            }, 50);
        }, index * 10);
    });
});
