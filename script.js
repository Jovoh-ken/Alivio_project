const video = document.querySelector('.custom_video');
const playBtn = document.getElementById('playToggle');
const playIcon = document.getElementById('playIcon');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playIcon.src = './Icon/large/play-white.svg'; // sizning icon
        playBtn.style.display = 'flex'; // play tugma qayta ko‘rinadi
    } else {
        video.play();
        playIcon.src = './Icon/large/play-white.svg'; // icon o‘zgaradi
        setTimeout(() => playBtn.style.display = 'none', 300); // birozdan keyin tugma yo‘qoladi
    }
    isPlaying = !isPlaying;
});

// agar videoga bosilsa – play/pause qilaveradi (ixtiyoriy)
video.addEventListener('click', () => {
    playBtn.click();
});

// video tugaganda play qaytib chiqsin
video.addEventListener('ended', () => {
    playIcon.src = './Icon/large/play-white.svg';
    playBtn.style.display = 'flex';
    isPlaying = false;
});