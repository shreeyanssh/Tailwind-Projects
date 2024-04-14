// Get references to the scrollable containers
const text = document.querySelector('.text');
const image = document.querySelector('.image-container');

// Add a scroll event listener to the first container
text.addEventListener('scroll', function () {
  // Update the scrollTop property of the second container
  image.scrollLeft = text.scrollLeft;
});

// Add a scroll event listener to the second container
image.addEventListener('scroll', function () {
  // Update the scrollTop property of the first container
  text.scrollLeft = image.scrollLeft;
});

