// scroll progress bar
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
});

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// reveal-on-scroll for chapter blocks + draw-in for diagrams
const revealEls = document.querySelectorAll('.reveal');
const drawEls = document.querySelectorAll('.draw-path, .draw-fade');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

const drawObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // stagger children slightly for a orchestrated draw-in
      const siblings = entry.target.parentElement.querySelectorAll('.draw-path, .draw-fade');
      siblings.forEach((el, i) => {
        setTimeout(() => el.classList.add('active'), i * 90);
      });
      drawObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.chapter-diagram svg, .hero-diagram svg').forEach(svg => drawObserver.observe(svg));

// wallet connect (MetaMask)
const connectBtn = document.getElementById('connectBtn');
const walletStatus = document.getElementById('walletStatus');

async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    walletStatus.textContent = 'No wallet found. Install MetaMask to connect.';
    walletStatus.classList.remove('connected');
    return;
  }
  try {
    connectBtn.textContent = 'Connecting...';
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const addr = accounts[0];
    walletStatus.textContent = 'Connected: ' + addr.slice(0, 6) + '...' + addr.slice(-4);
    walletStatus.classList.add('connected');
    connectBtn.textContent = 'Connected ✓';
  } catch (err) {
    walletStatus.textContent = 'Connection rejected or failed.';
    walletStatus.classList.remove('connected');
    connectBtn.textContent = 'Connect Wallet';
  }
}

if (connectBtn) connectBtn.addEventListener('click', connectWallet);