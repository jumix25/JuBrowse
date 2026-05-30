const revealItems = document.querySelectorAll('.reveal');

function showItems() {
  revealItems.forEach((item) => {
    const box = item.getBoundingClientRect();
    if (box.top < window.innerHeight - 80) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showItems);
showItems();

document.getElementById('demoBtn').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('roadmapBtn').addEventListener('click', () => {
  document.getElementById('versions').scrollIntoView({ behavior: 'smooth' });
});
