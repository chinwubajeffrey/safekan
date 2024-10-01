let icons = document.querySelectorAll('.drop-down-icon');
let faqanswers = document.querySelectorAll('.faq-container-answer');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    let iconTab = icon.dataset.tab;
    let rightIcon = icon.querySelector('i'); 
    let faqAnswer = document.querySelector(`.faq-answer-${iconTab}`); 
    faqanswers.forEach(item=> item.classList.add('remove-answers'))
    if (rightIcon.classList.contains('fa-angle-right')) {
      rightIcon.classList.remove('fa-angle-right');
      rightIcon.classList.add('fa-angle-down');
      
      faqAnswer.classList.remove('remove-answers');
    } else {
      rightIcon.classList.remove('fa-angle-down');
      rightIcon.classList.add('fa-angle-right');
      
      faqAnswer.classList.add('remove-answers');
    }
  });
});
