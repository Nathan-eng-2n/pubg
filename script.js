document.addEventListener('DOMContentLoaded', function() {
    const videos = [
        "https://www.youtube.com/embed/WOqvb7rYG08?si=DIie-efpT_OMRN0j",
        "https://www.youtube.com/embed/4fH4piSa6wk?si=ClNJ-Y5ADONeG_44",
        "https://www.youtube.com/embed/lMTKILG72n4?si=POTov01tW5XktZBO",
        "https://www.youtube.com/embed/HaiOjyPn-s8?si=Z84iKOwVOK825jZx",
        "https://www.youtube.com/embed/YhNgMBUd8Qg?si=02bQtxYqLYh0sfyR",
    ];

    const videosContainer = document.getElementById('videos-container');

    function createVideoFrame(videoUrl) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '350');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.setAttribute('allowfullscreen', '');

        return iframe;
    }

    function displayVideos() {
        videos.forEach(function(videoUrl) {
            const videoFrame = createVideoFrame(videoUrl);
            videosContainer.appendChild(videoFrame);
        });
    }

    displayVideos();
});
