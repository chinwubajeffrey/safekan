// let icons = document.querySelectorAll('.faq-container-div');
// let faqanswers = document.querySelectorAll('.faq-container-answer');

// icons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     let iconTab = icon.dataset.tab;
//     let rightIcon = icon.querySelector('i'); 
//     let faqAnswer = document.querySelector(`.faq-answer-${iconTab}`); 
//     faqanswers.forEach(item=> item.classList.add('remove-answers'))
//     if (rightIcon.classList.contains('fa-angle-right')) {
//       rightIcon.classList.remove('fa-angle-right');
//       rightIcon.classList.add('fa-angle-down');
      
//       faqAnswer.classList.remove('remove-answers');
//     } else {
//       rightIcon.classList.remove('fa-angle-down');
//       rightIcon.classList.add('fa-angle-right');
      
//       faqAnswer.classList.add('remove-answers');
//     }
//   });
// });


document.querySelectorAll('.faq-container-div').forEach((item) => {
  item.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('.drop-down-icon');

      // Toggle the active class for the answer
      answer.classList.toggle('active');

      // Rotate the icon
      icon.classList.toggle('rotate');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropdown-icon')) {
          if (dropdownContent.classList.contains('show')) {
              dropdownContent.classList.remove('show');
          }
      }
  });
});


// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};