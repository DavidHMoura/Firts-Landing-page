// ── Hamburger menu ──
const hamburger = document.getElementById('navHamburger');
const drawer = document.getElementById('mobileDrawer');
function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
}
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
});

// ── Cursor ──
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a,button,.arch-node,.vcard,.proj-card,.atk-item,.tool-card').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('on'));
  el.addEventListener('mouseleave', () => cur.classList.remove('on'));
});

// ── Language ──
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('btn-pt').classList.toggle('active', lang==='pt');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    const v = el.getAttribute('data-'+lang);
    if (!v) return;
    const tag = el.tagName;
    if (tag==='INPUT'||tag==='TEXTAREA') el.placeholder = v;
    else el.textContent = v;
  });
}

// ── Reveal ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.rev').forEach(el => ro.observe(el));

// ── Skill bars ──
const so = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      e.target.querySelectorAll('.skill-fill').forEach(f => f.classList.add('go'));
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-col').forEach(el => so.observe(el));

// ── Terminal typewriter ──
(function() {
  const lines = document.querySelectorAll('#termBody > *');
  lines.forEach((l,i) => { l.style.opacity='0'; });
  lines.forEach((l,i) => {
    setTimeout(() => { l.style.opacity='1'; l.style.transition='opacity 0.08s'; }, i*100+400);
  });
})();

// ── Form submission (formsubmit.co) ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const label = document.getElementById('submitLabel');
    const feedback = document.getElementById('formFeedback');

    label.textContent = '▸ enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.6';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok || res.status === 200 || res.redirected) {
        form.reset();
        label.innerHTML = '&#10003; Enviado';
        feedback.style.display = 'block';
        btn.style.background = 'var(--green-dark)';
        btn.style.color = 'var(--green)';
        btn.style.border = '1px solid var(--green)';
      } else {
        throw new Error('err');
      }
    } catch(err) {
      // fallback: submit normally
      label.innerHTML = '&#10148; Enviar';
      btn.disabled = false;
      btn.style.opacity = '1';
      form.submit();
    }
  });
}


// ── Matrix Canvas ──
(function(){
  const canvas = document.getElementById('matrixCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 11;
  let cols = Math.floor(canvas.width / fontSize);
  let drops = Array(cols).fill(1);
  function draw(){
    ctx.fillStyle = 'rgba(6,6,6,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#00FF41';
    ctx.font = fontSize+'px JetBrains Mono, monospace';
    cols = Math.floor(canvas.width / fontSize);
    if(drops.length !== cols) drops = Array(cols).fill(1);
    drops.forEach((y,i)=>{
      const char = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(char, i*fontSize, y*fontSize);
      if(y*fontSize > canvas.height && Math.random()>0.975) drops[i]=0;
      drops[i]++;
    });
  }
  let lastTime = 0; function animate(time) { if (time - lastTime > 60) { draw(); lastTime = time; } if (Date.now() - startTime < 30000) requestAnimationFrame(animate); } const startTime = Date.now(); requestAnimationFrame(animate);
  // Stop after a while to save CPU if not visible
  
})();

const secs = document.querySelectorAll('section[id]');
const nas = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  nas.forEach(a => {
    a.style.color = (a.getAttribute('href') === '#'+cur) ? 'var(--green)' : '';
  });
}, {passive:true});