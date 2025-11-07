// copos.js — hace desaparecer los copos al clic y anima la estrella fugaz y la luna
document.addEventListener('DOMContentLoaded', () => {
  // Inject styles for fade and the new animations (safe to duplicate)
  const style = document.createElement('style');
  style.textContent = `
  .fade-out { transition: opacity .45s ease, transform .45s ease; opacity: 0; transform: scale(.98); }

  /* shooting star: a gentle oscillation with periodic quick slide */
  @keyframes shootingStarFloat { 0% { transform: translateY(0) scale(1); opacity: 1; } 40% { transform: translateY(-6px) scale(1.02); } 60% { transform: translateY(0) scale(1); } 100% { transform: translateY(0) scale(1); } }
  .animate-estrella img { animation: shootingStarFloat 2.4s ease-in-out infinite; }

  /* moon slow drift and subtle rotation */
  @keyframes moonDrift { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-8px) rotate(2deg); } 100% { transform: translateY(0) rotate(0deg); } }
  .animate-luna img { animation: moonDrift 4s ease-in-out infinite; }

  .paused { animation-play-state: paused !important; }
  `;
  document.head.appendChild(style);

  const container = document.querySelector('.fondo3');
  if (!container) return;

  // Score element in the nieve section
  const scoreEl = container.querySelector('.contar .numero') || container.querySelector('.numero');

  const flakes = container.querySelectorAll('.copo1, .copo2, .copo3, .copo4, .copo');

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

  flakes.forEach(f => {
    f.addEventListener('click', () => {
      if (f.dataset.clicked) return;
      if (scoreEl) {
        const n = parseInt(scoreEl.textContent || '0', 10) || 0;
        scoreEl.textContent = n + 1;
      }
      hideWithFade(f);
    });
  });

  const estrella = container.querySelector('.estrella');
  const luna = container.querySelector('.luna');

  if (estrella) {
    estrella.classList.add('animate-estrella');
    estrella.addEventListener('click', () => {
      estrella.classList.toggle('paused');
    });
  }

  if (luna) {
    luna.classList.add('animate-luna');
    luna.addEventListener('click', () => {
      luna.classList.toggle('paused');
    });
  }
});
