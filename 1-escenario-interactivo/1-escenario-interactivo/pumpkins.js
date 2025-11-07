// pumpkins.js — hace desaparecer las calabazas al clic y añade animaciones a araña y fantasma
document.addEventListener('DOMContentLoaded', () => {
  // Inject minimal CSS for animations and fade if not present
  const style = document.createElement('style');
  style.textContent = `
  /* fade-out (fallback if not in style.css) */
  .fade-out { transition: opacity .45s ease, transform .45s ease; opacity: 0; transform: scale(.98); }

  /* spider (araña) subtle bob */
  @keyframes spiderBob { 0% { transform: translateY(0); } 50% { transform: translateY(8px); } 100% { transform: translateY(0); } }
  .animate-arana img { animation: spiderBob 1.6s ease-in-out infinite; }

  /* ghost (fantasma) float + slight rotate */
  @keyframes ghostFloat { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(3deg); } 100% { transform: translateY(0) rotate(0deg); } }
  .animate-fantasma img { animation: ghostFloat 2.2s ease-in-out infinite; }

  /* utility to pause animations */
  .paused { animation-play-state: paused !important; }
  `;
  document.head.appendChild(style);

  // Target the halloween container where calabazas, araña and fantasma live
  const container = document.querySelector('.fondo2');
  if (!container) return;

  const scoreEl = container.querySelector('.counter .numero') || container.querySelector('.numero');

  const pumpkins = container.querySelectorAll('.calabaza1, .calabaza2, .calabaza3, .calabaza4, .calabaza');

  function hideWithFade(el) {
    if (el.dataset.clicked) return;
    el.dataset.clicked = '1';
    el.style.pointerEvents = 'none';
    el.classList.add('fade-out');

    const cs = getComputedStyle(el);
    const anim = parseFloat(cs.animationDuration) || 0;
    const trans = parseFloat(cs.transitionDuration) || 0;
    const maxSec = Math.max(anim, trans);
    const timeout = maxSec > 0 ? Math.ceil(maxSec * 1000) + 50 : 450;

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, timeout);
  }

  pumpkins.forEach(p => {
    p.addEventListener('click', () => {
      if (p.dataset.clicked) return;
      // update local score if present
      if (scoreEl) {
        const n = parseInt(scoreEl.textContent || '0', 10) || 0;
        scoreEl.textContent = n + 1;
      }
      hideWithFade(p);
    });
  });

  // Animate spider and ghost by adding classes that target their child img
  const arana = container.querySelector('.araña');
  const fantasma = container.querySelector('.fantasma');

  if (arana) {
    arana.classList.add('animate-arana');
    // click to pause/resume
    arana.addEventListener('click', () => {
      arana.classList.toggle('paused');
    });
  }

  if (fantasma) {
    fantasma.classList.add('animate-fantasma');
    fantasma.addEventListener('click', () => {
      fantasma.classList.toggle('paused');
    });
  }
});


//* NAVEGACIÓN ENTRE ESCENAS *//
  const escenas = Array.from(document.querySelectorAll('.escena'));
  let escenaIndex = 0;

  function showEscena(i) {
    if (!escenas.length) return;
    escenaIndex = (i + escenas.length) % escenas.length;
    escenas.forEach((s, idx) => {
      s.classList.toggle('activa', idx === escenaIndex);
    });
    
    document.querySelectorAll('.miniatura').forEach((m, idx) => {
      m.classList.toggle('active', idx === escenaIndex);
    });
  }

  
  showEscena(0);

  const btnNext = document.querySelector('.btn-siguiente');
  const btnPrev = document.querySelector('.btn-anterior');
  if (btnNext) btnNext.addEventListener('click', () => showEscena(escenaIndex + 1));
  if (btnPrev) btnPrev.addEventListener('click', () => showEscena(escenaIndex - 1));

  document.querySelectorAll('.miniatura').forEach(m => {
    m.addEventListener('click', () => {
      const idx = parseInt(m.dataset.index || '0', 10);
      showEscena(idx);
    });
  });
