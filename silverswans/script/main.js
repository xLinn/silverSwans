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