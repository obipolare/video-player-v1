const $video = document.getElementById('video');
const $play = document.getElementById('play')
const $pause = document.getElementById('pause')
const $backward = document.getElementById('backward')
const $forward = document.getElementById('forward')
const $title = document.getElementById('video-player__title')
const $input = document.getElementById('input')

console.log($video.title)

$play.addEventListener('click', () =>{
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    
})
$pause.addEventListener('click', () =>{
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
})
$backward.addEventListener('click', () =>{
    $video.currentTime -= 10
})

$forward.addEventListener('click', () =>{
    $video.currentTime += 10
})

const root = document.documentElement

$video.addEventListener('timeupdate', (e) =>{
    root.style.setProperty('--song-width', Number.parseInt(($video.currentTime * 100 / e.target.duration) )+ '%')
})

$input.addEventListener('change', (e) =>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (e) =>{
        $video.setAttribute('src', e.target.result)

    })

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--load-width', Number.parseInt((e.loaded * 100) / e.total) + '%')
    })

    fileReader.addEventListener('loadend', () => { 
        root.style.setProperty('--load-width', '100%')
    })
    
})