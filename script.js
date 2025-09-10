// 🎵 Botón de música
const btn = document.getElementById('music-btn');
const audio = document.getElementById('wedding-audio');
let playing = false;

// Cuando se pausa manualmente
audio.addEventListener('pause', () => {
  btn.textContent = '▶️ Play';
  playing = false;
});

// Cuando termina la canción
audio.addEventListener('ended', () => {
  btn.textContent = '▶️ Play';
  playing = false;
});

// Control del botón de música
if (btn && audio) {
  btn.addEventListener('click', () => {
    if (!playing) {
      audio.play().then(() => {
        btn.textContent = '⏸️ Pause';
        playing = true;
      }).catch(err => {
        console.error('No se pudo reproducir el audio:', err);
      });
    } else {
      audio.pause();
      btn.textContent = '▶️ Play';
      playing = false;
    }
  });
}

// 🎟️ RSVP: desplegar opciones Sí / No y manejar clics
const rsvpBtn = document.getElementById('btn-rsvp');
const rsvpOptions = document.getElementById('rsvp-options');

if (rsvpBtn && rsvpOptions) {
  rsvpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isHidden = rsvpOptions.hasAttribute('hidden');
    if (isHidden) {
      rsvpOptions.removeAttribute('hidden');
      rsvpBtn.setAttribute('aria-expanded', 'true');
    } else {
      rsvpOptions.setAttribute('hidden', '');
      rsvpBtn.setAttribute('aria-expanded', 'false');
    }
  });

  rsvpOptions.addEventListener('click', (e) => {
    const choiceBtn = e.target.closest('.rsvp-choice');
    if (!choiceBtn) return;
    const choice = choiceBtn.dataset.choice; // 'si' o 'no'

    let url;
    if (choice === 'si') {
      url = 'https://wa.link/jdgfrk';
    } else {
      // Enlace solicitado para "No asisto"
      url = 'https://wa.link/56moo1';
    }

    window.open(url, '_blank');

    // Oculta las opciones después del clic
    rsvpOptions.setAttribute('hidden', '');
    rsvpBtn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', (e) => {
    if (!rsvpOptions.contains(e.target) && e.target !== rsvpBtn) {
      rsvpOptions.setAttribute('hidden', '');
      rsvpBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
