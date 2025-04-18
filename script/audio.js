/* -------------------------------- Audio JS -------------------------------- */

// Get elements
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const audioPlayer = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Set up initial state
let isPlaying = false;

// Show/hide volume slider and toggle icons
function updateUI() {
    // Toggle play/pause icons
    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        volumeSlider.style.display = 'inline';  // Show volume slider only when playing
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        volumeSlider.style.display = 'none';  // Hide volume slider when paused
    }
}

// Play/Pause button functionality
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    updateUI();
});

// Volume control functionality
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

// Reset icon when audio ends
audioPlayer.addEventListener('ended', () => {
    isPlaying = false;
    updateUI();
});
