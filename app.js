const letters = document.querySelectorAll('.letter');
const descriptions = document.querySelectorAll('.description');
const toggleDescriptionsBtn = document.querySelector('.toggle-descriptions');

toggleDescriptionsBtn.addEventListener('click', () => {
  descriptions.forEach((description) => {
    description.classList.toggle('display-none');
  });
  letters.forEach((letter) => {
    if (window.getComputedStyle(letter, null).getPropertyValue('font-size') === '28px') {
      letter.style.fontSize = '48px';
    } else {
      letter.style.fontSize = '28px';
    }
  });
});