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

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    const cardValue = e.currentTarget.childNodes[1].textContent;
    const audio = new Audio(`audio/${cardValue}.mp3`);
    audio.addEventListener('canplaythrough', () => {
      audio.play();
      audio.src = `audio/${cardValue}.mp3`;
      audio.play();
    });
  });
});