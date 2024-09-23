console.log("page loaded...");
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('preview-video');
    
    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
    });
});
