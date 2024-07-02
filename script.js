document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        "https://www.youtube.com/embed/WOqvb7rYG08?si=DIie-efpT_OMRN0j",
        "https://www.youtube.com/embed/4fH4piSa6wk?si=ClNJ-Y5ADONeG_44",
        "https://www.youtube.com/embed/lMTKILG72n4?si=POTov01tW5XktZBO",
        "https://www.youtube.com/embed/HaiOjyPn-s8?si=Z84iKOwVOK825jZx",
        "https://www.youtube.com/embed/YhNgMBUd8Qg?si=02bQtxYqLYh0sfyR",
        "https://www.youtube.com/embed/75ivx4rwEVE?si=vy0OAUZ5C664Fmxm",
        "https://www.youtube.com/embed/ijjYE2bcMOc",
    ];

    const videosContainer = document.getElementById('videos-container');
    let currentIndex = 0;

    function createVideoFrame(videoUrl) {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video-wrapper');

        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '350');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', videoUrl);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.setAttribute('allowfullscreen', '');

        videoWrapper.appendChild(iframe);
        return videoWrapper;
    }

    function displayVideo(index) {
        // Limpa o container de vídeos antes de adicionar um novo
        videosContainer.innerHTML = '';

        const videoFrame = createVideoFrame(videos[index]);
        videosContainer.appendChild(videoFrame);

        // Adiciona botões para navegar entre os vídeos
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Anterior';
        prevButton.classList.add('video-button');
        prevButton.addEventListener('click', previousVideo);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Próximo';
        nextButton.classList.add('video-button');
        nextButton.addEventListener('click', nextVideo);

        videosContainer.appendChild(prevButton);
        videosContainer.appendChild(nextButton);
    }

    function nextVideo() {
        currentIndex++;
        if (currentIndex >= videos.length) {
            currentIndex = 0; // Volta para o primeiro vídeo se chegar ao final
        }
        displayVideo(currentIndex);
    }

    function previousVideo() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = videos.length - 1; // Vai para o último vídeo se estiver no primeiro
        }
        displayVideo(currentIndex);
    }

    displayVideo(currentIndex);
});
