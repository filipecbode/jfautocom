// Todas as labels estão em pt-BR
const WA_NUMBER = '5561995383096'; // número no formato internacional sem +

function openWhatsApp(message){
  const defaultMsg = message || 'Olá! Vim pelo site da JF Autocom e quero saber mais.';
  const url = new URL(`https://wa.me/${WA_NUMBER}`);
  url.searchParams.set('text', defaultMsg);

  // UTM simples para referência (aparece só para você no texto)
  const ref = `

(Origem: site — ${location.hostname}${location.pathname})`;
  url.searchParams.set('text', defaultMsg + ref);

  window.open(url.toString(), '_blank', 'noopener');
  return false; // evita navegação do link
}

// Atualiza ano no footer
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
