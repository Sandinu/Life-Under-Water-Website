const cards = document.querySelectorAll('.target');
let currentCard = null;

function rotateToMouse(e) {
  if (!currentCard) return;

  const bounds = currentCard.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  currentCard.style.transform = `
    scale(1.03)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
}

function handleMouseEnter(card) {
  currentCard = card;
  document.addEventListener('mousemove', rotateToMouse);
}

function handleMouseLeave() {
  if (!currentCard) return;
  document.removeEventListener('mousemove', rotateToMouse);
  currentCard.style.transform = '';
  currentCard = null;
}

cards.forEach(card => {
  card.addEventListener('mouseenter', () => handleMouseEnter(card));
  card.addEventListener('mouseleave', handleMouseLeave);
});
