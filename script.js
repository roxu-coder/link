(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const frag = document.createDocumentFragment();
  const dot = document.createElement('span');

  for (let i = 0; i < 20; i++) {
    const p = dot.cloneNode();
    const size = (Math.random() * 3 + 1).toFixed(1);
    p.className = 'particle';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = (Math.random() * 100).toFixed(2) + '%';
    p.style.animationDuration = (Math.random() * 15 + 12).toFixed(2) + 's';
    p.style.animationDelay = (-Math.random() * 20).toFixed(2) + 's';
    p.style.opacity = (Math.random() * 0.5 + 0.2).toFixed(2);
    frag.appendChild(p);
  }

  document.getElementById('particles').appendChild(frag);
})();
