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

const menuBtn = document.querySelector('.m-menu--container')
const menu = document.querySelector('.header__nav--list')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('menu-active')
})