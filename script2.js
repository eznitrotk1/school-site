const rectangle = document.querySelector('.rectangle');

rectangle.addEventListener('mousemove', function(event) {
  const rect = this.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const scaleX = 1.1;
  const scaleY = 1.1;
  const offsetX = (scaleX - 1) / 2;
  const offsetY = (scaleY - 1) / 2;
  this.style.transformOrigin = `${mouseX}px ${mouseY}px`;
  this.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) translate(${offsetX}%, ${offsetY}%)`;
});

rectangle.addEventListener('mouseout', function() {
  this.style.transform = 'none';
});