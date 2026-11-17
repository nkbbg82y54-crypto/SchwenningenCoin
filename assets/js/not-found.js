(() => {
  const button = document.querySelector('.coin-control');
  const coin = document.querySelector('.coin-body');
  const hint = document.querySelector('#coin-hint');
  if (!button || !coin || !hint) return;
  button.hidden = false;
  hint.hidden = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let angle = -18;
  let drag = null;
  let suppressClick = false;
  let frame = 0;
  function render() {
    coin.style.transform = `rotateX(-8deg) rotateY(${angle}deg)`;
  }
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
  }
  function turn(degrees) {
    stop();
    const from = angle;
    if (reducedMotion.matches) {
      angle += degrees;
      render();
      return;
    }
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 650, 1);
      angle = from + degrees * (1 - Math.pow(1 - progress, 3));
      render();
      if (progress < 1) frame = requestAnimationFrame(tick);
      else frame = 0;
    }
    frame = requestAnimationFrame(tick);
  }
  button.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    stop();
    suppressClick = false;
    drag = { id: event.pointerId, x: event.clientX, angle, moved: false };
    button.setPointerCapture(event.pointerId);
  });
  button.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const delta = event.clientX - drag.x;
    if (Math.abs(delta) > 5) drag.moved = true;
    if (drag.moved) {
      angle = drag.angle + delta * 1.2;
      render();
    }
  });
  function finish(event) {
    if (!drag || event.pointerId !== drag.id) return;
    suppressClick = drag.moved || event.type === 'pointercancel';
    drag = null;
    // Settle on a readable face, rather than leaving the coin edge-on.
    if (suppressClick) turn(Math.round(angle / 180) * 180 - angle);
  }
  button.addEventListener('pointerup', finish);
  button.addEventListener('pointercancel', finish);
  button.addEventListener('lostpointercapture', finish);
  button.addEventListener('click', event => {
    if (suppressClick && event.detail !== 0) { suppressClick = false; return; }
    suppressClick = false;
    turn(180);
  });
  button.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    turn(event.key === 'ArrowLeft' ? -180 : 180);
  });
  reducedMotion.addEventListener('change', () => { stop(); render(); });
})();
