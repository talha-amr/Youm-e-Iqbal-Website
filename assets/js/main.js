(function () {
  'use strict';
  const config = window.IQBAL_CONFIG || { formLinks: {}, deadline: '2026-11-18T23:59:00+05:00' };

  // Source: MODULES-DETAIL.pdf, pages 3-8. Prices are in Pakistani rupees.
  const modules = [
    {
      id: 'quiz', number: '01', icon: 'book', category: 'individual',
      name: 'Fikr o Firasat', title: 'Iqbal Quiz Competition',
      description: 'Questions cover Iqbal’s life, poetry, and philosophy.',
      fee: 'Rs. 250', participation: 'Individual', duration: '20 minutes', badge: '30 MCQs',
      intro: 'A written, individual test covering Iqbal’s life, literary works, philosophy of Khudi, and the Pakistan Movement.',
      format: ['30 multiple-choice questions to be answered in 20 minutes.', 'Questions may cover Bang-e-Dra, Bal-e-Jibril, Zarb-e-Kaleem, Khudi, and Iqbal’s life.', 'Answer sheets are checked during the event; results are announced at the closing.'],
      rules: ['1 mark per correct answer; no negative marking.', 'Ties are resolved by a tie-breaker question.', 'The answer key is prepared and verified by faculty.'],
      criteria: [['Correct MCQ', '1 mark'], ['Incorrect / unanswered', '0 marks'], ['Tie', 'Tie-breaker question']]
    },
    {
      id: 'singing', number: '02', icon: 'music', category: 'team',
      name: 'Sur o Sikhan', title: 'Kalam-e-Iqbal Singing',
      description: 'Perform Iqbal’s kalam live, solo or in a group.',
      fee: 'Solo Rs. 200 / Group Rs. 400', participation: 'Solo or group (up to 4)', duration: '4 minutes', badge: 'Live performance',
      intro: 'A live musical performance of Allama Iqbal’s kalam, judged on musicality, language, expression, and stage presence.',
      format: ['Perform solo or in a group of up to four members, with four minutes per entry.', 'Only the kalam of Allama Iqbal may be performed; live vocals are required.', 'Musical instruments are permitted, but performers must bring their own.', 'Select your kalam before the event to avoid repetition.'],
      rules: ['Only Iqbal’s kalam is permitted.', 'Live singing is compulsory.', 'Participants receive a short sound check before the event.'],
      criteria: [['Voice and tune', '30'], ['Urdu diction and pronunciation', '20'], ['Understanding and expression', '20'], ['Composition and instruments', '20'], ['Stage presence', '10']]
    },
    {
      id: 'baitbaazi', number: '03', icon: 'scroll', category: 'individual',
      name: 'Bazm-e-Qafia', title: 'Bait Baazi',
      description: 'Recite Urdu couplets across three rounds, including an Iqbal round.',
      fee: 'Rs. 300', participation: 'Register solo; assigned to a team', duration: '30 sec per turn', badge: '3 rounds',
      intro: 'Participants register individually, then compete on stage in Team A versus Team B across three poetry rounds.',
      format: ['Round 1 — Harf-e-Aakhir: begin a couplet with the previous couplet’s last letter (any Urdu poet).', 'Round 2 — Iqbal Special: only couplets by Allama Iqbal are allowed.', 'Round 3 — Sher ki Samajh: explain the meaning of an on-screen couplet to earn bonus points.'],
      rules: ['Each team has 30 seconds per turn; no couplet may be repeated.', 'Wrong or misattributed verses can be challenged and checked by judges.', 'Inappropriate verses may lead to disqualification.'],
      criteria: [['Each valid couplet', '10 marks'], ['Correct explanation', '+5 bonus'], ['Winner', 'Higher team score']]
    },
    {
      id: 'speech', number: '04', icon: 'mic', category: 'individual',
      name: 'Nida-e-Waqt', title: 'Urdu Speech Competition',
      description: 'Deliver a prepared Urdu speech on Iqbal’s life, poetry, or philosophy.',
      fee: 'Rs. 300', participation: 'Individual', duration: '3 minutes', badge: 'Strictly Urdu',
      intro: 'An individual, prepared Urdu speech connected to Iqbal’s life, poetry, and philosophy.',
      format: ['Deliver a prepared speech about an assigned topic related to Iqbal.', 'The medium is strictly Urdu; English is not permitted.', 'The finalized topic list will be shared after approval.'],
      rules: ['Stay relevant to the assigned topic.', 'Reading from a complete script or mobile phone is prohibited; brief notes are allowed.', 'A warning bell sounds at 1.5 minutes and the final bell at 3 minutes.', 'Judges’ decisions are final.'],
      criteria: [['Content and relevance', '30%'], ['Delivery and confidence', '25%'], ['Language and pronunciation', '20%'], ['Iqbal poetry and references', '15%'], ['Time management', '10%']]
    },
    {
      id: 'debate', number: '05', icon: 'people', category: 'team',
      name: 'Mubahisa-e-Fikr', title: 'Debate Competition',
      description: 'Debate both sides of a motion related to Iqbal in a two-person team.',
      fee: 'Rs. 400 / team', participation: 'Team of 2', duration: '4-min speeches + rebuttals', badge: 'Strictly Urdu',
      intro: 'A two-person team debate in Urdu on a motion inspired by Iqbal’s thinking, including a rebuttal round.',
      format: ['Register a team of two; the topic is selected before the event.', 'One member speaks in favour and the other against the motion.', 'Main speeches total four minutes per team (two minutes each).', 'A rebuttal session of two minutes per person follows the main speeches.'],
      rules: ['English is not permitted; speak strictly in Urdu.', 'Do not interrupt an opposing speaker.', 'Support arguments with logic and relevant references to Iqbal.', 'Judges’ decisions are final.'],
      criteria: [['Quality of arguments', '35%'], ['Rebuttal and counter-arguments', '25%'], ['Presentation and confidence', '20%'], ['Language proficiency', '20%']]
    },
    {
      id: 'documentary', number: '06', icon: 'film', category: 'individual',
      name: 'Nigah-e-Shaheen', title: 'Reel / Documentary',
      description: 'Submit an original reel or documentary about Iqbal.',
      fee: 'Rs. 300', participation: 'Individual', duration: '80-sec reel / 3-min film', badge: 'Video submission',
      intro: 'An original video exploring Allama Iqbal, his message, or its relevance to the world today.',
      format: ['Submit either a reel of up to 80 seconds or a documentary of up to three minutes.', 'Entries may be in Urdu or English; subtitles are encouraged.', 'Submit the completed video before the separately announced submission deadline.', 'Selected entries are screened during the event.'],
      rules: ['Work must be original; properly credit any third-party music, images or footage.', 'Late submissions are not accepted.', 'Entries are tested on the event system before event day.'],
      criteria: [['Concept and relevance', '30'], ['Storytelling and script', '25'], ['Visuals, editing and sound', '25'], ['Creativity and originality', '20']]
    }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const icon = (name, extra = '') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
  const esc = (str) => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const grid = $('#modulesGrid');
  const modal = $('#moduleModal');
  const modalContent = $('#modalContent');
  const toast = $('#toast');
  let lastModalTrigger = null;
  let toastTimeout;
  let activeFilter = 'all';

  function renderCards(filter = 'all') {
    const visible = modules.filter(m => filter === 'all' || m.category === filter || (filter === 'individual' && m.id === 'singing'));
    grid.innerHTML = visible.map((m, index) => `
      <article class="module-card" data-reveal data-module="${esc(m.id)}" style="--card-index:${index}">
        <div class="card-top"><span class="card-number">${m.number}<i> / 06</i></span><div class="card-emblem">${icon(m.icon)}</div></div>
        <div class="card-core"><div class="card-category">${esc(m.badge)}</div><h3>${esc(m.name)}</h3><p class="card-subtitle">${esc(m.title)}</p><p class="card-description">${esc(m.description)}</p></div>
        <div class="card-details"><div><small>PARTICIPATION</small><strong>${esc(m.participation)}</strong></div><div><small>REGISTRATION FEE</small><strong>${esc(m.fee)}</strong></div></div>
        <div class="card-actions"><button class="card-detail-button" type="button" data-open="${esc(m.id)}" aria-label="View ${esc(m.title)} details">DETAILS ${icon('arrow')}</button><button class="card-register-button" type="button" data-register="${esc(m.id)}" aria-label="Register for ${esc(m.title)}">REGISTER ${icon('arrow-up')}</button></div>
      </article>
    `).join('');
    observeReveals();
    bindCardTilt();
  }

  function renderModal(m) {
    const formatItems = m.format.map(s => `<li>${esc(s)}</li>`).join('');
    const ruleItems = m.rules.map(s => `<li>${esc(s)}</li>`).join('');
    const criterionItems = m.criteria.map(([key, val]) => `<div class="criterion-row"><span>${esc(key)}</span><strong>${esc(val)}</strong></div>`).join('');
    modalContent.innerHTML = `
      <div class="modal-head"><span class="modal-overline">THE COMPETITION ARCHIVES / MODULE ${m.number}</span><div class="modal-heading-row"><div><h2 id="modalHeading">${esc(m.name)}</h2><p>${esc(m.title)}</p></div><div class="modal-symbol">${icon(m.icon)}</div></div><p class="modal-intro">${esc(m.intro)}</p></div>
      <div class="modal-facts"><div><small>FEE</small><strong>${esc(m.fee)}</strong></div><div><small>PARTICIPATION</small><strong>${esc(m.participation)}</strong></div><div><small>FORMAT / TIME</small><strong>${esc(m.duration)}</strong></div></div>
      <div class="modal-body"><div class="modal-panel"><h3>Format & description</h3><ul>${formatItems}</ul></div><div class="modal-panel"><h3>Rules to remember</h3><ul>${ruleItems}</ul></div><div class="modal-panel modal-score"><h3>Judging / scoring criteria</h3><div class="criteria-list">${criterionItems}</div></div></div>
      <div class="modal-bottom"><p>Ready to make your mark?<br/><span>Registration confirmation requires payment.</span></p><button type="button" class="button button-burgundy button-large" data-register="${m.id}">REGISTER FOR THIS MODULE ${icon('arrow-up')}</button></div>
    `;
  }

  function openModal(id, trigger) {
    const module = modules.find(m => m.id === id);
    if (!module) return;
    lastModalTrigger = trigger || document.activeElement;
    renderModal(module);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close', modal).focus();
  }

  function closeModal() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') lastModalTrigger.focus();
  }

  function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 4300);
  }

  function handleRegistration(id) {
    const link = config.formLinks?.[id];
    if (typeof link === 'string' && /^https:\/\//i.test(link.trim())) {
      const opened = window.open(link.trim(), '_blank', 'noopener,noreferrer');
      if (!opened) window.location.href = link.trim();
    } else {
      showToast('Registration link coming soon. Please check back for the Google Form.');
    }
  }

  document.addEventListener('click', e => {
    const reg = e.target.closest('[data-register]');
    if (reg) { handleRegistration(reg.dataset.register); return; }
    const detail = e.target.closest('[data-open]');
    if (detail) { openModal(detail.dataset.open, detail); return; }
    if (e.target.closest('[data-close-modal]')) { closeModal(); return; }
    const filter = e.target.closest('[data-filter]');
    if (filter) {
      activeFilter = filter.dataset.filter;
      $$('.filter-pill').forEach(btn => {
        const selected = btn.dataset.filter === activeFilter;
        btn.classList.toggle('is-active', selected);
        btn.setAttribute('aria-pressed', String(selected));
      });
      renderCards(activeFilter);
    }
  });

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') {
      const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', $('.modal-dialog', modal)).filter(el => !el.disabled);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  });

  // Mobile navigation
  const menuToggle = $('#menuToggle');
  const navLinks = $('#navLinks');
  function closeNav() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    navLinks.classList.remove('is-open');
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navLinks.classList.toggle('is-open', open);
  });
  $$('a', navLinks).forEach(link => link.addEventListener('click', closeNav));
  window.addEventListener('resize', () => { if (window.innerWidth > 880) closeNav(); });

  // Deadline countdown. TENTATIVE until confirmed by organizers.
  const deadlineNode = $('#countdown');
  function updateCountdown() {
    const end = new Date(config.deadline).getTime();
    if (!Number.isFinite(end)) return;
    const remaining = end - Date.now();
    if (remaining <= 0) { deadlineNode.textContent = 'CHECK STATUS'; return; }
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    deadlineNode.textContent = `${String(days).padStart(2, '0')}D : ${String(hours).padStart(2, '0')}H`;
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // Scroll reveal + nav progress, both disabled or simplified for reduced motion.
  let revealObserver;
  function observeReveals() {
    const targets = $$('[data-reveal]:not(.is-revealed)');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(el => el.classList.add('is-revealed'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); revealObserver.unobserve(entry.target); }
      }, { threshold: 0.09, rootMargin: '0px 0px -30px 0px' });
    }
    targets.forEach(el => revealObserver.observe(el));
  }

  const progress = $('#scrollProgress');
  const backToTop = $('#backToTop');
  const header = $('#siteHeader');
  let scrollRaf = false;
  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      backToTop.classList.toggle('is-visible', window.scrollY > 600);
      header.classList.toggle('is-scrolled', window.scrollY > 40);
      scrollRaf = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
  onScroll();

  function bindCardTilt() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('.module-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const box = card.getBoundingClientRect();
        const x = (e.clientX - box.left) / box.width - .5;
        const y = (e.clientY - box.top) / box.height - .5;
        card.style.setProperty('--rx', `${(-y * 2.7).toFixed(2)}deg`);
        card.style.setProperty('--ry', `${(x * 2.7).toFixed(2)}deg`);
      });
      card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    });
  }

  renderCards();
  observeReveals();
})();
