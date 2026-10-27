// BITSTREAM — rotating dot globe with real continents (canvas, no deps).
// Land mask sampled from assets/img/earth-land.png (public domain silhouette).
(function () {
  const canvas = document.getElementById("globe");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const DOTS = 5200;
  const COLOR = "29, 78, 126"; // site accent
  const SPEED = 0.0016;

  let w, h, r, dpr;
  let points = [];
  let running = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let rot = 0;
  let mask = null; // {data, w, h}

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    const size = Math.min(canvas.clientWidth || 560, 900);
    w = h = size;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.height = size + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    r = size * 0.42;
  }

  function loadMask(src) {
    const img = new Image();
    img.onload = () => {
      const off = document.createElement("canvas");
      off.width = img.width;
      off.height = img.height;
      const octx = off.getContext("2d", { willReadFrequently: true });
      octx.drawImage(img, 0, 0);
      const d = octx.getImageData(0, 0, img.width, img.height).data;
      mask = { d, w: img.width, h: img.height };
      build();
      draw();
    };
    img.src = src;
  }

  // land if dark pixel (map is black land / white ocean)
  function isLand(lat, lon) {
    if (!mask) return false;
    const x = Math.floor(((lon + 180) / 360) * mask.w);
    const y = Math.floor(((90 - lat) / 180) * mask.h);
    const i = (y * mask.w + x) * 4;
    return mask.d[i + 3] > 128; // land is opaque, ocean is transparent
  }

  function build() {
    points = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOTS; i++) {
      const y = 1 - (i / (DOTS - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * rad;
      const z = Math.sin(theta) * rad;
      const lat = (Math.asin(y) * 180) / Math.PI;
      const lon = (Math.atan2(z, x) * 180) / Math.PI;
      points.push({ x, y, z, land: isLand(lat, lon) });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const tilt = 0.35;
    const sinT = Math.sin(tilt);
    const cosT = Math.cos(tilt);
    const sinR = Math.sin(rot);
    const cosR = Math.cos(rot);

    for (const p of points) {
      const x = p.x * cosR - p.z * sinR;
      const z = p.x * sinR + p.z * cosR;
      const y = p.y * cosT - z * sinT;
      const z2 = p.y * sinT + z * cosT;
      if (z2 < -0.15) continue; // skip far side entirely for clean look

      const depth = (z2 + 1) / 2;
      const px = cx + x * r;
      const py = cy - y * r;

      let size, alpha;
      if (p.land) {
        size = 1.0 + depth * 1.3;
        alpha = 0.4 + depth * 0.6;
      } else {
        size = 0.5 + depth * 0.5;
        alpha = 0.03 + depth * 0.08;
      }

      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${COLOR},${alpha})`;
      ctx.fill();
    }
  }

  let lastFrame = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function frame(time) {
    requestAnimationFrame(frame);
    if (!running || document.hidden || prefersReducedMotion.matches || canvas.clientWidth === 0 || time - lastFrame < 33) return;
    lastFrame = time;
    rot += SPEED;
    draw();
  }

  const io = new IntersectionObserver((e) => {
    running = e[0].isIntersecting && !prefersReducedMotion.matches;
  });
  io.observe(canvas);
  window.addEventListener("resize", () => {
    resize();
    draw();
  });

  resize();
  loadMask(canvas.dataset.src || "../assets/img/earth-land.png");
  requestAnimationFrame(frame);
})();
