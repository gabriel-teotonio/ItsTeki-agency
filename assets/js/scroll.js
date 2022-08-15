
const topButton = document.querySelector('.top-button')


const scrollToggle = () => {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        topButton.classList.add('show-arrow')
        return
    }
    topButton.classList.remove('show-arrow')
}

const scrollToTop = (e) => {
    e.preventDefault()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', scrollToTop)
window.addEventListener('scroll', scrollToggle)


window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('menu-fixo')
        return
    }    
    document.querySelector('header').classList.remove('menu-fixo')
})



// SCROLL REVEAL    
ScrollReveal({ reset: false });

// reveal main-home
ScrollReveal().reveal('.text-main', {
    delay:500,
    distance: '70px',
    origin: 'left'
})
ScrollReveal().reveal('.btn-main', {
    delay:600,
    distance:'50px',
})

// reveal service item
ScrollReveal().reveal('.service-item1', {
    delay:700,
    distance:'70px',
    origin:'bottom'
})
ScrollReveal().reveal('.service-item2', {
    delay:600,
    distance:'70px',
    origin:'bottom'
})
ScrollReveal().reveal('.service-item3', {
    delay:500,
    distance:'70px',
    origin:'bottom'
})

// reveal features item

ScrollReveal().reveal('.feature-item', {
    delay:600,
    distance:'70px',
    origin:'bottom'
})

// reveal tools

ScrollReveal().reveal('.tools', {
    delay:700,
    distance:'10rem',
    origin:'left'
})

// reveal accordion

ScrollReveal().reveal('.accordion-item', {
    delay:600,
    distance:'5rem',
    origin:'left'
})

// reveal contact

ScrollReveal().reveal('.contact-form', {
    delay:700,
    distance:'5rem',
    origin:'left'
})
ScrollReveal().reveal('.contact-othes', {
    delay:700,
    distance:'5rem',
    origin:'top'
})