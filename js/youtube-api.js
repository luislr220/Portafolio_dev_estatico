const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let apiReady = false;
const pendingPlayers = [];

window.onYouTubeIframeAPIReady = function () {
  apiReady = true;
  pendingPlayers.forEach((createFn) => createFn());
};

/**
 * @param {string} elementId
 * @param {string} videoId
 */

function setupYoutubeVideo(elementId, videoId) {
  const initPlayer = () => {
    new YT.Player(elementId, {
      height: "100%",
      width: "100%",
      videoId: videoId,
      playerVars: {
        playinline: 1,
        rel: 0,
      },
    });
  };

  if (apiReady) {
    initPlayer();
  } else {
    pendingPlayers.push(initPlayer);
  }
}
