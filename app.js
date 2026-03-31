const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => revealObserver.observe(el));

const counters = document.querySelectorAll('.counter');
const animateValue = (el, target) => {
  const duration = 1300;
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = Number.isInteger(target) ? Math.round(value) : value.toFixed(1);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = Number(entry.target.dataset.target);
        animateValue(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let width;
let height;
let stars = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  stars = Array.from({ length: Math.min(150, Math.floor((width * height) / 11000)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: 0.2 + Math.random() * 0.8,
  }));
}

function render() {
  ctx.clearRect(0, 0, width, height);
  for (const star of stars) {
    star.y += star.z * 0.24;
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.z * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 220, 150, ${0.4 + star.z * 0.4})`;
    ctx.fill();
  }

  requestAnimationFrame(render);
}

window.addEventListener('resize', resize);
resize();
render();
