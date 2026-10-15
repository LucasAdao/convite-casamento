const music = document.getElementById("wedding-music");
const musicButton = document.getElementById("music-button");
const musicIcon = musicButton.querySelector("img");

function updateMusicButton(isPlaying) {
    musicIcon.src = isPlaying
        ? "assets/img/pause.svg"
        : "assets/img/play.svg";
    musicButton.setAttribute("aria-label", isPlaying ? "Pausar música" : "Tocar música");
    musicButton.setAttribute("aria-pressed", String(isPlaying));
}

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            if (music.currentTime === 0 || music.ended) {
                music.currentTime = 4;
            }
            await music.play();
            updateMusicButton(true);
        } catch (error) {
            console.error("Não foi possível reproduzir a música:", error);
        }
        return;
    }

    music.pause();
    updateMusicButton(false);
});

music.addEventListener("ended", () => {
    updateMusicButton(false);
});