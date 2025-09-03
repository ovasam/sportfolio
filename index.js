import { modal } from "./modal.js";
import { projects } from "./projects.js";

function animatedBalls() {
    document.querySelectorAll('.skill_ball').forEach(ball => {
        const delay = Math.random() * 2; // entre 0 y 2 segundos
        ball.style.animationDelay = `${delay}s`;
    });
}


function aboutMeBtnEvents() {
    document.querySelector('#about_me_button').addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector('#about_me');
        const offset = target.offsetTop - 10;
        setTimeout(() => {
            ScrollSmoother.get().scrollTo(offset, true)
        }, 200);
    })
}


function hoverProjects() {
    const hoverImage = document.querySelector('.hover-image');

    document.querySelectorAll('.project_card').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgSrc = item.getAttribute('data-image');
            hoverImage.innerHTML = `<img src="${imgSrc}" alt="preview">`;
            hoverImage.style.opacity = 1;
        });

        item.addEventListener('mousemove', e => {
            hoverImage.style.left = `${e.clientX}px`;
            hoverImage.style.top = `${e.clientY}px`;
        });

        item.addEventListener('mouseleave', () => {
            hoverImage.style.opacity = 0;
            hoverImage.innerHTML = '';
        });
    });
}

const techlabels = {
    'nodejs': 'Node.js',
    'expressjs': 'Express.js',
    'mongodb': 'MongoDB',
    'jwt': 'JsonWebToken',
    'bcrypt': 'Bcrypt',
    'inquirer': 'Inquirer',
    'git': 'GIT',
    'html': 'HTML',
    'css': 'CSS',
}
const techicos = {
    'nodejs': 'nodejs.svg',
    'expressjs': 'express.svg',
    'mongodb': 'mongodb.svg',
    'jwt': 'jwt.svg',
    'bcrypt': 'bcrypt.svg',
    'inquirer': 'inquirer.svg',
    'git': 'git.svg',
    'html': 'html-svg.svg',
    'css': 'css-svg.svg',
}

function renderProjects() {

    const cardFragment = document.createDocumentFragment()

    projects.forEach((project, index) => {
        const projectCardTemplate = document.querySelector('#project_card-template')
        const project_card = projectCardTemplate.content.cloneNode(true)

        const element = project_card.querySelector('#project_card')
        element.dataset.image = project.preview

        const name = project.name.split(' ')
        project_card.querySelector('#resume-title').innerHTML = `${name.slice(0, -1).join(' ')} <strong class="purple">${name.at(-1)}</strong>`

        const techFragment = document.createDocumentFragment()

        project.tech.forEach((tech) => {
            const li = document.createElement('li')
            li.textContent = techlabels[tech] || tech
            techFragment.appendChild(li)
        })

        project_card.querySelector('.read_more').dataset.id = index

        project_card.querySelector('#tech').replaceChildren(techFragment)
        cardFragment.appendChild(project_card)

    })

    document.querySelector('.projects_overview').replaceChildren(cardFragment)

    gsap.from(['.projects > h1', '.project_card'], {
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: '.projects',
            start: 'center 80%',
            end: '20% 40%',
            duration: 1,
            scrub: 1
        }
    })

    document.addEventListener('click', async (e) => {
        if (!e.target.matches('.read_more')) return
        const id = e.target.dataset.id
        await renderProjectModal(id)

    })

}

async function renderProjectModal(id) {
    const project = projects[id]

    const content = document.createElement('div')
    content.classList.add('projectView')
    content.innerHTML = `
    <div class="image">
        <img src="${project.preview}"></img>
    </div>
    <div class="info">
        <div class="desc">
            <p>${project.description}</p>
            <div class="tech">
                <ul class="list">
                    ${project.tech.map(t => `<li><img src="./svg/${techicos[t]}"></img></li>`).join(" ")}
                </ul>
            </div>
        </div>
        <div class="foot">
            <p>${project.brand}</p>
            <a href="${project.repository}" target="_blank">ver en github</a>
        </div>
    </div>
    `

    const view = await modal({
        content: content,
        onConfirm: async (e) => {
            console.log(e)
            return { ok: true }
        }
    })
}

renderProjects()
aboutMeBtnEvents()
animatedBalls()
if (window.innerWidth > 766) {
    hoverProjects()

}