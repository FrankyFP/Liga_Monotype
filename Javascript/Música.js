let currentAudio = null;

function playAudio(audioId) {
    let audioElement = document.getElementById(audioId);
    let playingSpan = document.getElementById(`playing${audioId.slice(-1)}`);

    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
    }

    if (audioElement.paused) {
        audioElement.play();
        currentAudio = audioElement;
    } else {
        audioElement.pause();
        currentAudio = null;
    }
}
