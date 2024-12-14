function startBoxerAnimation() {
  var boxerArray = $('.boxer'); // Elements with 'boxer' class
  var fixedText = "F0Marketing"; // Fixed string
  var randomText = "abcdefghijklmnopqrstuvwxyz0123456789$#@%&<>,?/+~!\\;,{*}"; // Random characters
  var clickDisable = true;
  var startTime, largestDuration;

  // Add animation effect to the click button
  function ani() {
      $('.click')[0].classList.add('ani-button');
  }

  // Generate frame properties (duration, time between frames, total frames)
  function frames() {
      function intGet(multiplier) {
          return Math.floor(Math.random() * multiplier);
      }
      var animationDuration = intGet(2500) + 500; // 500-3000ms
      var timeBetweenFrames = intGet(100) + 50; // 50-150ms
      var totalFrames = Math.floor(animationDuration / timeBetweenFrames);
      return [timeBetweenFrames, totalFrames, animationDuration];
  }

  // Start the animation process
  function start() {
      largestDuration = 0;

      // Loop through each boxer element
      Array.prototype.forEach.call(boxerArray, function (el, index) {
          var frameAttr = frames();
          if (frameAttr[2] > largestDuration) {
              largestDuration = frameAttr[2];
          }

          // Function to display random characters and then fixed string
          function timeout() {
              setTimeout(function () {
                  if (frameAttr[1]--, frameAttr[1] !== 0) {
                      el.innerHTML = randomText.charAt(Math.floor(Math.random() * randomText.length));
                      el.style.color = getRandomColor(); // Set a random color for the character
                      timeout();
                  } else {
                      el.innerHTML = fixedText.slice(0, 11).charAt(index);
                      el.style.color = "white"; // Return to white after the animation
                  }
              }, frameAttr[0]);
          }

          timeout();
      });

      startTime = Date.now();
      setTimeout(function () {
          clickDisable = false;
          $('.click')[0].classList.remove('ani-button');
      }, largestDuration);
  }

  // Automatically restart the animation every 10 seconds
  setInterval(function () {
      start();
      ani();
  }, 10000);

  // Handle click event
  $('.click').on('click', function () {
      if (!clickDisable) {
          start();
          ani();
          clickDisable = true;
      } else {
          var timeToWait = largestDuration - (Date.now() - startTime);
          console.log("Please click again in " + timeToWait + "ms");
      }
  });

  // Function to get a random color
  function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  // Initial start
  start();
}

$(document).ready(function () {
  startBoxerAnimation();
});
