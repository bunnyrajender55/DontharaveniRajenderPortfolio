
    function openVideoModal(videoSrc) {
      const modal = document.getElementById('videoModal');
      const video = document.getElementById('modalVideo');
      const videoSource = document.getElementById('videoSource');
  
      videoSource.src = videoSrc;
      video.load();
      video.play();
      
      modal.classList.add('active');
    }
  
    function closeVideoModal() {
      const modal = document.getElementById('videoModal');
      const video = document.getElementById('modalVideo');
  
      video.pause();
      video.currentTime = 0;
      modal.classList.remove('active');
    }
  
    // Close modal when clicking outside video
    document.getElementById('videoModal').addEventListener('click', function(e) {
      if (e.target.classList.contains('video-modal')) {
        closeVideoModal();
      }
    });

   document.addEventListener("DOMContentLoaded", function () {
  // Surprise Animation: Fade-in Effect
  const projectCards = document.querySelectorAll(".project__card");
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 500); // Staggered delay
  });

  // Video Controls for Each Project Card
  const projectCardsWithVideo = document.querySelectorAll(".project__card");

  projectCardsWithVideo.forEach((card) => {
    const playButton = card.querySelector(".project__play-button");
    const videoContainer = card.querySelector(".project__video-container");
    const video = card.querySelector(".project__video");
    const exitButton = card.querySelector(".project__video-exit");
    const projectImg = card.querySelector(".project__img");
    const projectOverlay = card.querySelector(".project__overlay");

    if (playButton && videoContainer && video && exitButton && projectImg && projectOverlay) {
      // Show Video and Hide Image on Play Button Click
      playButton.addEventListener("click", () => {
        videoContainer.style.display = "block";
        projectImg.style.display = "none";
        projectOverlay.style.display = "none";
        video.play();
      });

      // Hide Video and Show Image on Exit Button Click
      exitButton.addEventListener("click", () => {
        videoContainer.style.display = "none";
        projectImg.style.display = "block";
        projectOverlay.style.display = "flex";
        video.pause();
      });
    }
  });
});
    