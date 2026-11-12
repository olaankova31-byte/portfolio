(() => {
  const loader = document.querySelector('.site-loader');
  const value = loader?.querySelector('.site-loader-value');
  if (!loader || !value) return;

  let ready = document.readyState === 'complete';
  let progress = 0;
  const started = performance.now();

  window.addEventListener('load', () => { ready = true; }, { once: true });

  function frame(now) {
    if (ready) progress = Math.min(100, progress + Math.max(2, (100 - progress) * .18));
    else progress = Math.min(92, Math.floor((now - started) / 11));
    value.textContent = `${String(Math.floor(progress)).padStart(2, '0')}%`;

    if (progress < 100) requestAnimationFrame(frame);
    else window.setTimeout(() => loader.classList.add('is-done'), 120);
  }

  requestAnimationFrame(frame);
})();
