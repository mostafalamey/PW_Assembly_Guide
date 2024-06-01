// JavaScript to control the video player

// Get the logo button
const logoBtn = document.querySelector('#logo');

// Get the video element
const video = document.querySelector('#video');
// Get the play/pause button
const playPauseBtn = document.querySelector('#play-pause');
// Get the back and next buttons
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');

// Array of bookmarks
const bookmarks = [0, 21.9, 52.6, 73.3, 91.6, 112, 130.3, 155.5, 171.7, 194, 210.2, 231.8];
// Current bookmark index
let currentBookmarkIndex = 0;

// Logo button event listener
logoBtn.addEventListener('click', () => {
  window.location.href = '../baseCornerUnits.html';
});

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
    video.currentTime = bookmarks[currentBookmarkIndex];
  }
});

// Next button event listener
nextBtn.addEventListener('click', () => {
  if (currentBookmarkIndex < bookmarks.length - 2) {
    currentBookmarkIndex++;
    video.currentTime = bookmarks[currentBookmarkIndex];
  }
});
