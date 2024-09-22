'use strict';

function counter() {
  let seconds = 0;
  document.getElementById('time-counter').innerHTML = `<p>You just got here!</p>`;
  setInterval(() => {
    seconds += 1;
    document.getElementById('time-counter').innerHTML = `<p>You have been here for ${seconds} second${seconds > 1 ? 's' : ''}.</p>`;
  }, 1000);
}

counter();



// Attach event listeners to scroll buttons after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const gallery = document.querySelector('.gallery');

  scrollLeftBtn.addEventListener('click', () => {
    gallery.scrollBy({
      left: -300, // Adjust based on card width
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    gallery.scrollBy({
      left: 300, // Adjust based on card width
      behavior: 'smooth'
    });
  });

  // Handle Show Code Buttons
  const showCodeButtons = document.querySelectorAll('.show-code-btn');
  
  showCodeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeFile = button.getAttribute('data-code');
      console.log('Fetching:', codeFile);
      fetch(codeFile)
        .then(response => {
          console.log('Response URL:', response.url);
          return response.text();
        })
        .then(code => {
          console.log('Fetched Code:', code);
          modalCode.textContent = code;
          modal.style.display = 'block';
        })
        .catch(error => console.error('Error fetching the code:', error));
    });
  });
  

  // Modal Elements
  const modal = document.getElementById('codeModal');
  const modalCode = document.getElementById('modalCode');
  const closeBtn = document.querySelector('.close-btn');

  // Close Modal When 'x' is Clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close Modal When Clicking Outside the Modal Content
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});