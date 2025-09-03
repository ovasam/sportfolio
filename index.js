document.querySelectorAll('.skill_ball').forEach(ball => {
    const delay = Math.random() * 2; // entre 0 y 2 segundos
    ball.style.animationDelay = `${delay}s`;
});
document.querySelector('#about_me_button').addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector('#about_me');
    const offset = target.offsetTop - 50;
    ScrollSmoother.get().scrollTo(offset, true)
})