const audioContainers = document.querySelectorAll('.card');
audioContainers.forEach(audioContainer => {
    audioContainer.addEventListener('click', function (event) {
        const audioPlayer = audioContainer.querySelector('audio');

        // If the audio is playing, pause it
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        } else { // Otherwise, play the audio
            audioPlayer.play();
        }
    });
});
