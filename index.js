function playAudio(e) {
  // Selecting audio element with data-key of key pressed
  const audioElement = document.querySelector(
    'audio[data-key="' + e.keyCode + '"]'
  );
  // Selecting the corresponding key element on the page
  const keyElement = document.querySelector(
    '.key[data-key="' + e.keyCode + '"]'
  );
  // Checking if there was a valid element and if not returning
  if (!audioElement) return;
  // Restarting audio in case it is already playing
  audioElement.currentTime = 0;
  // Using play function on selected element to play src of element
  audioElement.play();
  // Adding playing class to corresponding element on the page
  keyElement.classList.add('playing');
}

// Setting up function to remove playing class
function removeTransition(e) {
  // If propertyName isn't transform, return
  if (e.propertyName !== 'transform') return;
  // Removing playing from the element this happened on
  this.classList.remove('playing');
}

// Collecting all elements with class of key
const allKeys = document.querySelectorAll('.key');
// For each element in nodelist add transitionend event listener
// that will fire removeTransition when triggered
allKeys.forEach((key) =>
  key.addEventListener('transitionend', removeTransition)
);
// Adding a keydown event listener to the window element
window.addEventListener('keydown', playAudio);
