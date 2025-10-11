// Contatos WhatsApp
const WA = {
  filipe: '5561995383096',
  paulo: '556194410768',
};

function openWhats(who, message){
  const number = WA[who] || WA['filipe'];
  const defaultMsg = message || 'Olá! Vim pelo site da JF Autocom e quero saber mais.';
  const url = new URL(`https://wa.me/${number}`);
  const ref = `

(Origem: site — ${location.hostname}${location.pathname})`;
  url.searchParams.set('text', defaultMsg + ref);
  window.open(url.toString(), '_blank', 'noopener');
  return false;
}

// Atualiza ano e gerencia header em scroll
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  const onScroll = () => {
    if (window.scrollY > 4) document.body.classList.add('is-scrolled');
    else document.body.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // FAB menu toggle
  const toggle = document.getElementById('fabToggle');
  const menu = document.getElementById('fabMenu');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
})();
