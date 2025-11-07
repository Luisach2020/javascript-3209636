//* juego 1 //*
// Audio / SFX setup: captura los <audio> añadidos en HTML, expone play()/pause() y playSfx(name)
const SFX = { audios: {} };

function _setupAudio() {
  SFX.audios = {
    bgm: document.getElementById('audio-bgm'),
    coin: document.getElementById('audio-coin'),
    pumpkin: document.getElementById('audio-pumpkin'),
    flake: document.getElementById('audio-flake'),
    toggle: document.getElementById('audio-toggle')
  };

  // funciones globales solicitadas
  window.play = function() { const a = SFX.audios.bgm; if (a) a.play().catch(()=>{}); };
  window.pause = function() { const a = SFX.audios.bgm; if (a) a.pause(); };

  // reproducir SFX corto (clonamos para permitir solapamiento)
  window.playSfx = function(name) {
    const a = SFX.audios[name];
    if (!a) return;
    try {
      const clone = a.cloneNode();
      // append to DOM so some browsers allow autoplay after user gesture
      document.body.appendChild(clone);
      clone.play().catch(()=>{});
      setTimeout(() => { try { clone.remove(); } catch (e) {} }, 4000);
    } catch (e) {}
  };
}

document.addEventListener('DOMContentLoaded', _setupAudio);

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

        // elegir SFX según elemento o escena
        try {
          if (item.matches('.coin, .moneda')) {
            window.playSfx && window.playSfx('coin');
          } else if (item.matches('.calabaza1, .calabaza2, .calabaza3, .calabaza4, .calabaza') || item.closest('.fondo2')) {
            window.playSfx && window.playSfx('pumpkin');
          } else if (item.matches('.copo1, .copo2, .copo3, .copo4, .copo') || item.closest('.fondo3')) {
            window.playSfx && window.playSfx('flake');
          } else {
            window.playSfx && window.playSfx('coin');
          }
        } catch (e) {}

        hideWithFade(item);
      });
    });

    
    ['.araña', '.fantasma', '.estrella', '.luna'].forEach(sel => {
      const el = container.querySelector(sel);
      if (!el) return;
      el.addEventListener('click', () => {
        const state = el.style.animationPlayState;
        el.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
        window.playSfx && window.playSfx('toggle');
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
      // sfx
      window.playSfx && window.playSfx('pumpkin');
      hideWithFade(p);
    });
  });

  
  const arana = container.querySelector('.araña');
  const fantasma = container.querySelector('.fantasma');

  if (arana) {
    arana.classList.add('animate-arana');
    
    arana.addEventListener('click', () => {
      arana.classList.toggle('paused');
      window.playSfx && window.playSfx('toggle');
    });
  }

  if (fantasma) {
    fantasma.classList.add('animate-fantasma');
    fantasma.addEventListener('click', () => {
      fantasma.classList.toggle('paused');
      window.playSfx && window.playSfx('toggle');
    });
  }
});

//* juego 3 //*
document.addEventListener('DOMContentLoaded', () => {
  
  const style = document.createElement('style');
  style.textContent = document.head.appendChild(style);

  const container = document.querySelector('.fondo3');
  if (!container) return;

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
      window.playSfx && window.playSfx('flake');
      hideWithFade(f);
    });
  });

  const estrella = container.querySelector('.estrella');
  const luna = container.querySelector('.luna');

  if (estrella) {
    estrella.classList.add('animate-estrella');
    estrella.addEventListener('click', () => {
      estrella.classList.toggle('paused');
      window.playSfx && window.playSfx('toggle');
    });
  }

  if (luna) {
    luna.classList.add('animate-luna');
    luna.addEventListener('click', () => {
      luna.classList.toggle('paused');
      window.playSfx && window.playSfx('toggle');
    });
  }
});



//*NAVEGACIÓN ENTRE ESCENAS*//
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slidesEl = carousel.querySelector('.slides');
  const slides = Array.from(slidesEl.querySelectorAll('section'));
  const prevBtn = carousel.querySelector('.carousel-button.prev');
  const nextBtn = carousel.querySelector('.carousel-button.next');
  const indicatorsWrap = carousel.querySelector('.carousel-indicators');

  let current = 0;

  function update() {
    slidesEl.style.transform = `translateX(-${current * 100}%)`;
    
    const buttons = Array.from(indicatorsWrap.children);
    buttons.forEach((b, i) => b.classList.toggle('active', i === current));
    
    slides.forEach((s, i) => s.setAttribute('aria-hidden', i === current ? 'false' : 'true'));
  }

  function go(n) {
    current = (n + slides.length) % slides.length;
    update();
  }

  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.addEventListener('click', () => go(i));
    if (i === 0) btn.classList.add('active');
    indicatorsWrap.appendChild(btn);
  });

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(current - 1);
    if (e.key === 'ArrowRight') go(current + 1);
  });

  
  slides.forEach((s, i) => {
    s.setAttribute('role', 'group');
    s.setAttribute('aria-roledescription', 'slide');
    s.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);
    if (i !== 0) s.setAttribute('aria-hidden', 'true');
  });


  const thumbnails = document.querySelectorAll('.miniatura');
  thumbnails.forEach(t => {
    t.addEventListener('click', () => {
      go(current + 1);
    });
  });

  update();
});




