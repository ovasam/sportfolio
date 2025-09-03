export async function modal({ content = null, onConfirm, run = null }) {
    ScrollSmoother.get().paused(true);
    const template = document.querySelector(".modal-template")
    const cloneModal = template.content.cloneNode(true)


    const modalWrapper = document.createElement("section")
    modalWrapper.id = "unique-modal"
    modalWrapper.appendChild(cloneModal)

    document.body.appendChild(modalWrapper)

    const modalDOM = modalWrapper.querySelector(".modal#modal")
    const cancel = modalDOM.querySelector("#cancel")
    const confirm = modalDOM.querySelector("#confirm")

    if (content) {
        modalDOM.querySelector("#wrapper").insertAdjacentElement('afterbegin', content)
    }

    requestAnimationFrame(() => {
        gsap.from(modalDOM, {
            opacity: 0,
            scale: 0.90,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    let externalClose = null
    const promise = new Promise(async (resolve) => {

        externalClose = (data = {}) => {
            ScrollSmoother.get().paused(false)
            modalWrapper.remove()
            resolve({ confirmed: true, data })
        }

        if (run) {
            await run(content, externalClose)
        }


        cancel.addEventListener("click", (e) => {
            ScrollSmoother.get().paused(false)
            modalWrapper.remove()
            resolve({ confirmed: false })
        })

        confirm.addEventListener("click", async (e) => {
            ScrollSmoother.get().paused(false)
            const result = await onConfirm(content)
            if (result.ok) {
                modalWrapper.remove()
                resolve({ confirmed: true, data: result.data })
            }
        })

        modalDOM.addEventListener('click', (e) => {
            if (e.target !== e.currentTarget) return
            e.preventDefault()
            ScrollSmoother.get().paused(false)
            modalWrapper.remove()
            resolve({ confirmed: true })
        })
    })

    promise.close = externalClose
    return promise
}
