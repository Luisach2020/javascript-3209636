//* juego 1 //*

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.game-container, .contenedor, .fondo2, .fondo3');

  containers.forEach(container => {
    let score = 0;

    const scoreEl = container.querySelector('.score') || container.querySelector('.numero');

    const clickableItems = container.querySelectorAll('.clickable, .moneda, .coin');

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

    clickableItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.dataset.clicked) return;
        score++;
        if (scoreEl) scoreEl.textContent = score;
        hideWithFade(item);
      });
    });

    
    ['.araña', '.fantasma', '.estrella', '.luna'].forEach(sel => {
      const el = container.querySelector(sel);
      if (!el) return;
      el.addEventListener('click', () => {
        const state = el.style.animationPlayState;
        el.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
      });
    });
  });
});

const animal = document.querySelectorAll(".animales")
const counter = document.querySelector(".contador")
let i = 0
let j = 0 

console.log(animal)
console.log(counter)


animal.forEach(item => {

  

    item.addEventListener("click" , () => {
        item.classList.add("saltar")
    })

    i++ 
    counter.

    item.addEventListener("animationend" , () => {
        item.computedStyleMap.display = "none"
    }, {once: true})
});

//* juego 2 //*

document.addEventListener('DOMContentLoaded', () => {

  const style = document.createElement('style');
  style.textContent =  document.head.appendChild(style);

  
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
      
      if (scoreEl) {
        const n = parseInt(scoreEl.textContent || '0', 10) || 0;
        scoreEl.textContent = n + 1;
      }
      hideWithFade(p);
    });
  });

  
  const arana = container.querySelector('.araña');
  const fantasma = container.querySelector('.fantasma');

  if (arana) {
    arana.classList.add('animate-arana');
    
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

//* juego 3 //*
document.addEventListener('DOMContentLoaded', () => {
  
  const style = document.createElement('style');
  style.textContent = document.head.appendChild(style);

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
