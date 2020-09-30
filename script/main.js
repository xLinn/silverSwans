    //Video Play Button

const video = document.querySelector('.video')
const playBtn = document.getElementById('playButton')


playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play()
        playBtn.classList.toggle('hidden')
    }   else {
        video.pause()
    }
})
video.addEventListener('pause', function() {
    playBtn.classList.remove('hidden')
})

    //Mobile Nav

const menuBtn = document.querySelector('.m-menu--container')
const menu = document.querySelector('.header__nav--list')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('menu-active')
})

    //Modal Window

window.onclick = function(event) {
    if (event.target == aboutMeModal) {
        aboutMeModal.style.display = 'none'
    }
    if (event.target == portfolioModal) {
        portfolioModal.style.display = 'none'
    }
    if (event.target == videoModal) {
        videoModal.style.display = 'none'
    }
    if (event.target == testimonialsModal) {
        testimonialsModal.style.display = 'none'
    }
}

    //About Me Modal
const aboutMeModal = document.querySelector('.about__me__modal')
const aboutMeModalBtn = document.querySelector('.about__me--button')
const aboutMeCloseBtn = document.querySelector('.about__me__modal--close')

aboutMeModalBtn.onclick = function () {
    aboutMeModal.style.display = 'block'
}
aboutMeCloseBtn.onclick = function () {
    aboutMeModal.style.display = 'none'
}


    //Portfolio Modal 
const portfolioModal = document.querySelector('.portfolio__modal')
const portfolioModalBtn = document.querySelector('.portfolio__button')
const portfolioCloseBtn = document.querySelector('.portfolio__modal--close')
    
portfolioModalBtn.onclick = function () {
    portfolioModal.style.display = 'block'
}
portfolioCloseBtn.onclick = function () {
    portfolioModal.style.display = 'none'
}


    //Video Modal
const videoModal = document.querySelector('.video__modal')
const videoModalBtn = document.querySelector('.video__button')
const videoCloseBtn = document.querySelector('.video__modal--close')
        
videoModalBtn.onclick = function () {
    videoModal.style.display = 'block'
}
videoCloseBtn.onclick = function () {
    videoModal.style.display = 'none'
}


    //Testimonials Modal
const testimonialsModal = document.querySelector('.testimonials__modal')
const testimonialsModalBtn = document.querySelector('.testimonials__button')
const testimonialsCloseBtn = document.querySelector('.testimonials__modal--close')

testimonialsModalBtn.onclick = function () {
    testimonialsModal.style.display = 'block'
}
testimonialsCloseBtn.onclick = function () {
    testimonialsModal.style.display = 'none'
}