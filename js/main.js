document.addEventListener("DOMContentLoaded", () => {
    
    const videos = [
        "/assets/videos/video1.mp4",
        "/assets/videos/video2.mp4",
        "/assets/videos/video3.mp4",
    ];

    const indiceSorteado = Math.floor(Math.random() * videos.length);

    const videoPlayer = document.getElementById("bg-video-player");

    videoPlayer.src = videos[indiceSorteado];

    videoPlayer.play();
});