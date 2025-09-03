document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
        smooth: 1,
        effects: true
    })
});

const mainText = document.querySelector('.position')
gsap.from([mainText, '#about_me_button'], {
    opacity: 0,
    duration: 10,
    ease: "power3.out"
})

const container = document.querySelector('.about_me')
gsap.from(container, {
    opacity: 0,
    scale: 0.5,
    duration: .3,
    scrollTrigger: {
        trigger: container,
        start: '30% bottom',
        end: 'top 50%',
        scrub: 1,
    }
})

gsap.from('.skill_ball', {
    opacity: 0,
    y: -80,
    duration: 1,
    ease: 'back.out(4)',
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.software_skills',
        start: '20% bottom',
        end: '30% center',
        scrub: 1,
    }
})

gsap.from('.software_skills', {
    opacity: 0,
    duration: 0.2,
    ease: 'back.out(4)',
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.software_skills',
        start: '20% bottom',
        end: '40% center',
        scrub: 1,
    }
})

gsap.from(['.soft_skill-card', '.midd'], {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.soft_skill-card',
        start: 'center bottom',
        end: '-30% center',
        scrub: 1
    }
})