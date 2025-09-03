const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 300 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
    requestAnimationFrame(animate);
}

animate();