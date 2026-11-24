'use strict';

const q = (selector) => document.querySelector(selector);
const world = q('#world');
const panel = q('#panel');
const panelBody = q('#panel-body');
const sideNote = q('#side-note');
const badge = q('#badge');
const contactContent = q('#contact-content').content.firstElementChild;
const contactForm = contactContent.querySelector('form');
const directEmail = contactContent.querySelector('#direct-email').textContent;
contactForm.action = 'https://formsubmit.co/ajax/' + directEmail;
const sections = ['Portfolio', 'Services', 'Pricing', 'Email', 'Instagram', null, null, null, 'About me'];
const names = sections.map(name => name?.toLowerCase().replaceAll(' ', '-'));
const item = number => number === 9 ? 'assets/vetor-carlos.webp' : 'assets/item-' + number + (number === 5 ? '.svg' : '.webp');
const trades = [
  {name:'Short-form edit', price:'$60', image:1, description:'A vertical edit up to 1 minute for YouTube Shorts or Instagram Reels.'},
  {name:'Long-form edit', price:'$200', image:8, description:'A Minecraft video up to 20 minutes for your YouTube channel.'},
  {name:'Custom project', price:'Custom project', image:4, description:'Tell me about your series, launch, or idea and we’ll work out the scope together.'}
];
let current = 'home';
let returnFocus;
sections.forEach((label, index) => {
  const slot = document.createElement(label ? 'button' : 'span');
  slot.className = 'slot' + (label ? '' : ' empty');
  if (label) {
    slot.dataset.slot = index + 1;
    slot.dataset.open = names[index];
    slot.setAttribute('aria-label', label + ' (slot ' + (index + 1) + ')');
    slot.innerHTML = '<img alt="" src="' + item(index + 1) + '"><span class="num">' + (index + 1) + '</span><span class="tooltip">' + label + '</span>';
  } else slot.setAttribute('aria-hidden','true');
  q('#hotbar').append(slot);
});

async function revealArtwork(element, filename) {
  const art = new Image();
  art.src = 'assets/' + filename;
  element.inert = true;
  try { await art.decode(); } catch { /* Keep navigation available if an image fails. */ }
  if (!element.isConnected) return;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    element.classList.add('art-ready');
    element.inert = false;
  }));
}

// Keep the embedded controls in a supported viewport, scaled into the portrait slot.
function fitPlayer() {
  const screen = q('.screen.playing');
  if(!screen || !screen.clientWidth) return;
  screen.style.setProperty('--player-scale', Math.min(1, screen.clientWidth/240, screen.clientHeight/200));
}
new ResizeObserver(fitPlayer).observe(panel);

function inventory() {
  const videos = Array.from({length:36}, (_, i) => {
    const entry = window.portfolioVideos?.[i];
    return entry && /^[a-zA-Z0-9_-]{11}$/.test(entry.youtubeId) && typeof entry.title === 'string' && entry.title.trim() ? entry : null;
  });
  panelBody.innerHTML = '<div class="portfolio-art"><div class="screen"></div><div class="inventory" role="group" aria-label="Video inventory"></div><div class="video-caption" role="status" hidden></div></div>';
  revealArtwork(q('.portfolio-art'), 'inventory-hud.webp');
  const caption = q('.video-caption');
  videos.forEach((entry, i) => {
    const slot = document.createElement('button');
    slot.className = 'video-slot';
    slot.disabled = !entry;
    slot.style.setProperty('--delay', Math.min(i,12)*30 + 'ms');
    slot.setAttribute('aria-label', entry ? 'Play ' + entry.title : 'Empty slot ' + (i + 1));
    if (entry) {
      const thumb = document.createElement('img');
      thumb.src = entry.thumbnail || 'https://i.ytimg.com/vi/' + entry.youtubeId + '/hqdefault.jpg';
      thumb.alt = '';
      const showTitle = () => {
        caption.textContent = entry.format + ' | ' + entry.title;
        caption.hidden = false;
      };
      slot.append(thumb);
      slot.addEventListener('pointerenter', showTitle);
      slot.addEventListener('pointerleave', () => {caption.hidden = true;});
      slot.addEventListener('focus', showTitle);
      slot.addEventListener('blur', () => {caption.hidden = true;});
      slot.addEventListener('click', () => {
        showTitle();
        const frame = document.createElement('iframe');
        frame.src = 'https://www.youtube-nocookie.com/embed/' + entry.youtubeId + '?autoplay=1&playsinline=1';
        frame.title = entry.title;
        frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        q('.screen').classList.add('playing');
        q('.screen').replaceChildren(frame);
        fitPlayer();
      });
    }
    q('.inventory').append(slot);
  });
}

function services() {
  panelBody.innerHTML = `<div class="service-book" data-page="1">
    <article class="leaf"><small>Page 1 of 2</small><h3>Shorts &amp; Reels</h3><p>Up to 1 minute</p><p>A quick hook, tight cuts, and readable captions bring your best Minecraft moments into a vertical edit.</p><button class="turn-page" data-page="2">Next page</button></article>
    <article class="leaf"><small>Page 2 of 2</small><h3>YouTube videos</h3><p>Up to 20 minutes</p><p>I shape your gameplay into a story with pacing, sound design, and room for the payoff.</p><button class="book-pricing" data-open="pricing">View pricing</button><button class="turn-page" data-page="1">Previous page</button></article>
  </div>`;
  const book = q('.service-book');
  revealArtwork(book,'services-book.webp');
  book.querySelectorAll('.turn-page').forEach(button => button.onclick = () => {
    book.dataset.page = button.dataset.page;
    book.querySelector('.leaf:nth-child(' + book.dataset.page + ') .turn-page').focus();
  });

}

function pricing() {
  panelBody.innerHTML = '<div class="trades"><div class="trade-list" aria-label="Editing packages"></div><div class="trade-details"><div class="exchange"><span class="well"></span><span aria-hidden="true">➜</span><button class="trade-play" disabled aria-disabled="true" aria-haspopup="dialog" aria-label="Click Carlos to request a quote"><img src="assets/vetor-carlos.webp" alt=""><span>Click Carlos for a quote</span></button></div></div></div><div class="pricing-copy"><p></p><div class="trade-tip" aria-live="polite">Select a package to see your quote options.</div></div>';
  let selected = null;
  const describe = trade => {
    q('.pricing-copy p').textContent = trade?.description ?? 'All prices in USD.';
  };
  const icon = index => index === 8 ? 'assets/egg.webp' : index === 1 ? 'assets/Totem_of_Undying_JE2_BE2.webp' : item(index);
  trades.forEach((trade, i) => {
    const button = document.createElement('button');
    button.className = 'trade';
    button.setAttribute('aria-pressed','false');
    button.setAttribute('aria-label',trade.name + ', ' + trade.price);
    button.innerHTML = '<img alt="" src="' + item(i === 2 ? 4 : 3) + '"><span>' + trade.price + '</span><span class="arrow" aria-hidden="true">➜</span><img alt="" src="' + icon(trade.image) + '">';
    button.addEventListener('pointerenter', () => describe(trade));
    button.addEventListener('focus', () => describe(trade));
    button.addEventListener('pointerleave', () => describe(selected));
    button.addEventListener('blur', () => describe(selected));
    button.addEventListener('click', () => {
      selected = trade;
      describe(trade);
      document.querySelectorAll('.trade').forEach(el => {
        el.classList.toggle('selected',el === button);
        el.setAttribute('aria-pressed',String(el === button));
      });
      q('.exchange .well').innerHTML = '<img alt="" src="' + icon(trade.image) + '">';
      const play = q('.trade-play');
      q('#quote-email').onclick = () => {
        q('#quote').close();
        openSection('email', play, trade.name);
      };
      play.setAttribute('aria-disabled','false');
      play.disabled = false;
      play.onclick = () => {
        q('#quote-package').textContent = trade.name + (trade.image === 4 ? '' : ' | ' + trade.price + ' USD');
        q('#quote').showModal();
      };
      q('.trade-tip').textContent = 'Choose email or Instagram after clicking Carlos.';
    });
    q('.trade-list').append(button);
  });
  describe(null);
}

function contact(packageName) {
  const detail = contactContent.querySelector('#contact-package');
  if (!contactForm.querySelector('fieldset').disabled) {
    detail.textContent = packageName || '';
    detail.hidden = !packageName;
    contactForm.querySelector('.form-status').textContent = '';
  }
  panelBody.append(contactContent);
}

contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  const fields = contactForm.querySelector('fieldset');
  if (fields.disabled) return;
  for (const input of contactForm.querySelectorAll('[required]')) {
    input.value = input.value.trim();
  }
  if (!contactForm.reportValidity()) return;
  const data = Object.fromEntries(new FormData(contactForm));
  const packageName = contactForm.querySelector('#contact-package').textContent;
  if (packageName) data.package = packageName;
  data._subject = 'Portfolio inquiry' + (packageName ? ' — ' + packageName : '');
  const status = contactForm.querySelector('.form-status');
  fields.disabled = true;
  status.textContent = 'Sending…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || String(result.success) !== 'true') throw new Error('Submission declined');
    contactForm.reset();
    status.textContent = 'Thanks! Your inquiry has been submitted.';
  } catch {
    status.textContent = 'We couldn’t confirm the submission. Your message is still here. Try again or email me directly below.';
  } finally {
    clearTimeout(timeout);
    fields.disabled = false;
  }
});

contactContent.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const target = contactContent.querySelector('#' + button.dataset.copy);
    const status = contactForm.querySelector('.form-status');
    try {
      await navigator.clipboard.writeText(target.textContent);
      status.textContent = button.dataset.copy === 'discord-name' ? 'Discord username copied.' : 'Email address copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Text selected for copying.';
    }
  });
});

function instagramNote() {
  sideNote.innerHTML = '<section class="note"><button class="close" aria-label="Close panel">×</button><img alt="" src="' + item(5) + '"><h2 id="note-title">Instagram</h2><p>Have a clip or an idea to share? Send me a message on Instagram.</p><a href="https://www.instagram.com/carlosvideoedit/" target="_blank" rel="noopener noreferrer">@carlosvideoedit</a></section>';
  sideNote.hidden = false;
  world.classList.add('show-note');
  sideNote.classList.add('on-right');
  q('.note .close').focus({preventScroll:true});
}

function openSection(section, trigger, packageName) {
  if (section === 'home') {
    current = 'home';
    if (panel.open) panel.close();
    panelBody.replaceChildren();
    sideNote.hidden = true;
    world.classList.remove('show-note');
    q('.intro').inert = false;
    returnFocus?.focus({preventScroll:true});
    returnFocus = null;
  } else {
    if (current === 'home') returnFocus = trigger && trigger !== badge ? trigger : q('.intro button');
    current = section;
    const modal = section !== 'instagram';
    badge.hidden = true;
    sideNote.hidden = true;
    world.classList.remove('show-note');
    q('.intro').inert = !modal;
    panelBody.replaceChildren();
    if (modal) {
      q('#panel-title').textContent = section === 'email' ? 'Email Carlos' : sections[names.indexOf(section)];
      if (section === 'email') contact(packageName);
      else if (section === 'about-me') panelBody.append(q('#about-content').content.cloneNode(true));
      else ({portfolio:inventory, services, pricing})[section]();
      if (!panel.open) panel.showModal();
      q('#panel .close').focus();
    } else {
      if(panel.open) panel.close();
      instagramNote();
    }
  }
  q('#hotbar .active')?.classList.remove('active');
  const active = section === 'home' ? 'portfolio' : section;
  const slot = q('#hotbar [data-open="' + active + '"]');
  slot?.classList.add('active');
  if(section !== 'home' && !matchMedia('(prefers-reduced-motion: reduce)').matches) slot?.animate([{transform:'scale(.90)',filter:'brightness(1.5)'},{transform:'scale(1)',filter:'brightness(1)'}],{duration:230});
}
document.addEventListener('click', e => {
  if (e.target.closest('#quote')) {
    if (e.target.closest('.close') || e.target === q('#quote')) q('#quote').close();
    return;
  }
  if (!q('#loader').hidden && !q('#loader').classList.contains('done')) return;
  world.classList.remove('swing');
  void world.offsetWidth;
  world.classList.add('swing');
  const control = e.target.closest('[data-open]');
  if(control) openSection(control.dataset.open,control);
  else if(e.target.closest('.close')) openSection('home');
  else if(e.target === panel){
    const rect = panel.getBoundingClientRect();
    if(e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) openSection('home');
  }
});
panel.addEventListener('cancel', e => {e.preventDefault();openSection('home')});
document.addEventListener('keydown', e => {
  if(q('#quote').open) return;
  if(e.key !== 'Escape' && e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
  if(e.repeat || e.ctrlKey || e.metaKey || e.altKey || !q('#loader').hidden) return;
  let section;
  if(e.key.toLowerCase() === 'e') section = current === 'portfolio' ? 'home' : 'portfolio';
  if(e.key === 'Escape' && current !== 'home') section = 'home';
  if(/^[1-9]$/.test(e.key)) section = names[Number(e.key)-1];
  if(section){e.preventDefault();openSection(section,document.activeElement instanceof HTMLButtonElement ? document.activeElement : null);}
});
document.addEventListener('pointermove', e => {
  if(e.pointerType !== 'mouse' || panel.open || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  world.style.setProperty('--head-x', (x * 12) + 'deg');
  world.style.setProperty('--head-y', (y * 3 + x * 2) + 'deg');
});
q('#hotbar .slot').classList.add('active');


const chunks = q('#chunks').getContext('2d');
const start = performance.now();
q('#game').inert = true;
function loadWorld(now) {
  const progress = Math.min(1, (now - start)/2000);
  q('#percentage').textContent = Math.floor(progress*100) + '%';
  chunks.fillStyle = '#080808'; chunks.fillRect(0,0,64,64);
  for(let y=3;y<61;y++) for(let x=3;x<61;x++){
    const distance = Math.max(Math.abs(x-32),Math.abs(y-32));
    const edge = distance + ((x*13+y*7)%5)*.55 - 1;
    const delta = progress*35 - edge;
    chunks.fillStyle = delta > 6 ? '#fcfff7' : delta > 4 ? '#67ae3b' : delta > 2 ? '#293e78' : delta > 0 ? '#769347' : '#989898';
    chunks.fillRect(x,y,1,1);
  }
  if(progress < 1) return requestAnimationFrame(loadWorld);
  q('#loader').classList.add('done');
  q('#game').inert = false;
  setTimeout(() => {q('#loader').hidden=true},350);
  q('#badge-copy').textContent = matchMedia('(pointer:coarse)').matches ? 'Tap to open portfolio' : 'Press E to open portfolio';
  badge.hidden=false;
  setTimeout(() => badge.classList.add('depart'),14600);
  setTimeout(() => {badge.hidden=true},15000);
}
requestAnimationFrame(loadWorld);

