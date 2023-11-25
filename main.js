document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (New Year)
    const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
  
    // Update the countdown every 1 second
    const x = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Update the HTML elements with the calculated values
      document.getElementById('days').innerText = formatNumber(days);
      document.getElementById('hours').innerText = formatNumber(hours);
      document.getElementById('minutes').innerText = formatNumber(minutes);
      document.getElementById('seconds').innerText = formatNumber(seconds);
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('flip-book-1').innerHTML = 'Happy New Year!';
      }
    }, 1000);
  
    // Function to add leading zeros to numbers less than 10
    function formatNumber(number) {
      return number < 10 ? '0' + number : number;
    }
  
    // Function to toggle flipbook animation
    function toggleFlipbook() {
      for (let i = 1; i <= 4; i++) {
        const flipBook = document.getElementById(`flip-book-${i}`);
        if (flipBook) {
          flipBook.classList.toggle('flipped');
        }
      }
    }
  
    // Trigger flipbook animation every second
    setInterval(toggleFlipbook, 1000);
  });
  