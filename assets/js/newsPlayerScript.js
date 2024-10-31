document.addEventListener("fullscreenerror", () => {
  setTimeout(() => {
    if (document.fullscreenElement === null) {
      videoFullscreen();
    }
  }, 1000);
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement === null) {
    videoFullscreen();
  }
});

function videoFullscreen() {
  let playerVideo;
  let videos = document.querySelectorAll("video");
  if (videos.length === 0) {
    setTimeout(() => {
      videoFullscreen();
    }, 1000);
    return;
  }

  for (let i = 0; i < videos.length; i++) {
    if (!videos[i].paused) {
      if (!playerVideo) {
        playerVideo = videos[i];
      } else if (
        videos[i].width * videos[i].height >
        playerVideo.width * playerVideo.height
      ) {
        playerVideo = videos[i];
      }
    }
  }

  if (playerVideo) {
    try {
      console.log("playerVideo", playerVideo);
      if (!!document.fullscreenElement) {
        return;
      }

      playerVideo.requestFullscreen();
      playerVideo.volume = 0.5;
      playerVideo.onended = () => {
        document.exitFullscreen();
        setTimeout(() => {
          videoFullscreen();
        }, 1000);
      };
      playerVideo.onpause = () => {
        playerVideo.play();
        setTimeout(() => {
          videoFullscreen();
        }, 1000);
      };
    } catch (error) {
      console.log("error", error);
      setTimeout(videoFullscreen, 1000);
    }
  } else {
    setTimeout(videoFullscreen, 1000);
  }
}
videoFullscreen();
