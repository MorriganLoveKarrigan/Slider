const SLIDE = document.querySelectorAll(".slide")


 for (const slide of SLIDE) {
   slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.toggle('active')
        slide.classList.add('clicked')
    })
}

function clearActiveClasses() {
    SLIDE.forEach((slide)=> {
        slide.classList.remove('active')
    })
}

