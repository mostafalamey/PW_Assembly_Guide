// JavaScript to control the video player

// Get the step title element
const stepTitle = document.getElementById('step-title');

// Get the video element
const video = document.querySelector('#video');
// Get the play/pause button
const playPauseBtn = document.querySelector('#play-pause');
// Get the back and next buttons
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');

// Array of bookmarks
const bookmarks = [0, 21.75, 53.1, 73.8, 92.8, 110.2, 121.3, 135.4, 157];
// Current bookmark index
let currentBookmarkIndex = 0;

// Play/Pause button event listener
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Video time update event listener to loop the video between the current bookmark and the next bookmark
video.addEventListener('timeupdate', () => {
  const nextBookmark = bookmarks[Math.min(currentBookmarkIndex + 1, bookmarks.length - 1)];
  if (nextBookmark && video.currentTime >= nextBookmark - 0.5) {
    video.currentTime = bookmarks[currentBookmarkIndex];
  }
});

// Back button event listener
backBtn.addEventListener('click', () => {
  if (currentBookmarkIndex > 0) {
    currentBookmarkIndex--;
    stepTitle.textContent = 'Step ' + currentBookmarkIndex;
    video.currentTime = bookmarks[currentBookmarkIndex];
  }
});

// Next button event listener
nextBtn.addEventListener('click', () => {
  if (currentBookmarkIndex < bookmarks.length - 2) {
    currentBookmarkIndex++;
    stepTitle.textContent = 'Step ' + currentBookmarkIndex;
    video.currentTime = bookmarks[currentBookmarkIndex];
  }
});
