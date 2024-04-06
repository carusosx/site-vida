document.getElementById('sim').addEventListener('click', function() {
  window.location.href = 'https://www.youtube.com/watch?v=2kTeFZ7PIdk';
});

document.getElementById('nao').addEventListener('click', function() {
  const naoButton = document.getElementById('nao');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const naoButtonRect = naoButton.getBoundingClientRect();

  const maxX = windowWidth - naoButtonRect.width;
  const maxY = windowHeight - naoButtonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  naoButton.style.position = 'absolute';
  naoButton.style.left = `${randomX}px`;
  naoButton.style.top = `${randomY}px`;
});
