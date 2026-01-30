const petals = document.querySelectorAll('.petal');
const center = document.querySelector('.center');
const name = document.querySelector('.name');

petals.forEach((petal, i) => {
  setTimeout(() => {
    petal.style.transform = 'scale(1)';
    petal.style.opacity = '1';
  }, i * 250);
});

setTimeout(() => {
  center.style.opacity = '1';
}, petals.length * 250 + 300);

setTimeout(() => {
  name.style.opacity = '1';
}, petals.length * 250 + 900);
