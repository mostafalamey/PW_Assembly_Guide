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
//                 0   1      2     3    4     5     6    7      8     9     10     11     12    13      14     15  16
const bookmarks = [0, 21.9, 53.1, 93.6, 109, 120.8, 192, 217.8, 251.7, 287.8, 313, 334.8, 362.2, 392.4, 415.7, 434, 448.1, 465];
// Current bookmark index
let currentBookmarkIndex = 0;

// Logo button event listener
logoBtn.addEventListener('click', () => {
  window.location.href = '../tallUnits.html';
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
