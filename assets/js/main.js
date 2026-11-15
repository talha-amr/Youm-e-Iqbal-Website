(function () {
  'use strict';
  const config = window.IQBAL_CONFIG || { formLinks: {}, deadline: '2026-11-18T16:00:00+05:00' };

  // Source: MODULES-DETAIL.pdf, pages 3-8. Prices are in Pakistani rupees.
  const modules = [
    {
      id: 'quiz', number: '01', icon: 'book', category: 'individual',
      name: 'Fikr o Firasat', urduName: 'فکر و فراست', title: 'Iqbal Quiz Competition (Written)',
      description: 'Questions cover Iqbal’s life, poetry, and philosophy.',
      fee: 'Rs. 250', participation: 'Individual', duration: '20 minutes', scoreTitle: 'Scoring (30 Marks)', badge: '30 MCQs',
      intro: 'A written, individual test covering Iqbal’s life, literary works, philosophy of Khudi, and the Pakistan Movement.',
      format: ['Individual written test held in the Senate Hall: 30 MCQs to be solved within 20 minutes.', 'Questions cover Iqbal’s life, his works (e.g. Bang-e-Dra, Bal-e-Jibril, Zarb-e-Kaleem), his philosophy of Khudi, and the Pakistan Movement.', 'Answer sheets are checked during the event and the result is announced at the closing.'],
      rules: ['1 mark per correct answer; no negative marking.', 'Ties are resolved by a tie-breaker question.', 'The answer key is prepared and verified by faculty.'],
      criteria: [['Each correct MCQ', '1 mark'], ['Incorrect / unanswered', '0 marks (no negative marking)'], ['Tie', 'Tie-breaker question']]
    },
    {
      id: 'singing', number: '02', icon: 'music', category: 'team',
      name: 'Sur o Sikhan', urduName: 'سر و سخن', title: 'Kalam-e-Iqbal Singing Competition',
      description: 'Perform Iqbal’s kalam live, solo or in a group.',
      fee: 'Solo Rs. 200 / Group Rs. 400', participation: 'Solo or group (maximum 4 members)', duration: '4 minutes per entry', scoreTitle: 'Judging Criteria (100 Marks)', badge: 'Live performance',
      intro: 'A live musical performance of Allama Iqbal’s kalam, judged on musicality, language, expression, and stage presence.',
      format: ['Solo or group performance (maximum 4 members), 4 minutes per entry.', 'Only the kalam of Allama Iqbal may be performed; live vocals are compulsory.', 'Musical instruments are allowed (e.g. harmonium, tabla, guitar, keyboard); participants bring their own instruments.', 'Kalam is selected before the event to avoid repetition.'],
      rules: ['Only Iqbal’s kalam is permitted.', 'Live vocals are compulsory.', 'Each participant gets a short sound check before the event.'],
      criteria: [['Voice and tune', '30'], ['Urdu diction and pronunciation', '20'], ['Understanding and expression of the kalam', '20'], ['Composition and use of instruments', '20'], ['Stage presence', '10']]
    },
    {
      id: 'baitbaazi', number: '03', icon: 'scroll', category: 'individual',
      name: 'Bazm-e-Qafia', urduName: 'بزمِ قافیہ', title: 'Bait Baazi (Urdu Poetry Contest)',
      description: 'Recite Urdu couplets across three rounds, including an Iqbal round.',
      fee: 'Rs. 300', participation: 'Solo registration, split into Team A and B',       duration: '30 seconds per turn', scoreTitle: 'Scoring', badge: '3 rounds',
      intro: 'Participants register individually, then compete on stage in Team A versus Team B across three poetry rounds.',
      format: ['Participants register individually; all are then divided into only two teams, Team A and Team B, which compete on stage.', 'Round 1 — Harf-e-Aakhir: each team recites a couplet beginning with the last letter of the previous couplet (any Urdu poet).', 'Round 2 — Iqbal Special: only couplets of Allama Iqbal are allowed.', 'Round 3 — Sher ki Samajh: a couplet is shown on screen and the team explains its meaning for bonus points.'],
      rules: ['30 seconds per turn; a couplet cannot be repeated.', 'A wrong or misattributed couplet may be challenged by the opposing team and checked by the judges.', 'Inappropriate verses lead to disqualification.'],
      criteria: [['Each valid couplet', '10 marks'], ['Correct explanation of meaning (bonus)', '5 marks'], ['Winner', 'Team with the higher total']]
    },
    {
      id: 'speech', number: '04', icon: 'mic', category: 'individual',
      name: 'Nida-e-Waqt', urduName: 'ندائے وقت', title: 'Speech Competition',
      description: 'Deliver a prepared Urdu speech on Iqbal’s life, poetry, or philosophy.',
      fee: 'Rs. 300', participation: 'Individual', duration: '3 minutes per participant', scoreTitle: 'Judging Criteria', badge: 'Strictly Urdu',
      intro: 'An individual, prepared Urdu speech connected to Iqbal’s life, poetry, and philosophy.',
      format: ['Participants deliver a prepared speech on a topic related to Allama Iqbal.', 'Strictly Urdu; use of English is not permitted. Participation is individual.', 'Topics are drawn from Iqbal’s life, poetry, and philosophy; the list will be shared after approval.'],
      rules: ['The speech must remain relevant to the assigned topic.', 'Reading from a complete script or mobile phone is not permitted; brief notes may be used.', 'A warning bell sounds at 1.5 minutes and the final bell at 3 minutes; the time limit is strictly observed.', 'The decision of the judges is final and binding.'],
      criteria: [['Content and relevance', '30%'], ['Delivery and confidence', '25%'], ['Language and pronunciation', '20%'], ['Use of Iqbal’s poetry and references', '15%'], ['Time management', '10%']]
    },
    {
      id: 'debate', number: '05', icon: 'people', category: 'team',
      name: 'Mubahisa-e-Fikr', urduName: 'مباحثۂ فکر', title: 'Debate Competition',
      description: 'Debate both sides of a motion related to Iqbal in a two-person team.',
      fee: 'Rs. 400 / team', participation: 'Team of 2 members', duration: '4 minutes per team (2 minutes per person)', scoreTitle: 'Judging Criteria', badge: 'Strictly Urdu',
      intro: 'A two-person team debate in Urdu on a motion inspired by Iqbal’s thinking, including a rebuttal round.',
      format: ['Medium is strictly Urdu; use of English is not permitted.', 'Students register as a team of two members; the topic is selected before the event.', 'One team member speaks in favour of the topic and the other speaks against it.', 'Each speaker presents arguments in favour of or against the motion.', 'A rebuttal session of two minutes per person follows the main speeches.'],
      rules: ['Interruption of the opposing speaker is not permitted.', 'Arguments must be supported by logical reasoning and relevant references to Iqbal’s work.', 'The decision of the judges is final and binding.'],
      criteria: [['Quality of arguments', '35%'], ['Rebuttal and counter-arguments', '25%'], ['Presentation and confidence', '20%'], ['Language proficiency', '20%']]
    },
    {
      id: 'documentary', number: '06', icon: 'film', category: 'individual',
      name: 'Nigah-e-Shaheen', urduName: 'نگاہِ شاہین', title: 'Reel / Documentary Competition',
      description: 'Submit an original reel or documentary about Iqbal.',
      fee: 'Rs. 300', participation: 'Individual (solo entry)', duration: 'Reel up to 80 seconds; documentary up to 3 minutes', scoreTitle: 'Judging Criteria (100 Marks)', badge: 'Video submission',
      intro: 'An original video exploring Allama Iqbal, his message, or its relevance to the world today.',
      format: ['Solo entry: a reel of up to 80 seconds or a short documentary of up to three minutes on Allama Iqbal, his message, or its relevance today.', 'Entries may be in Urdu or English; subtitles are encouraged.', 'The final video is submitted before the announced deadline and screened during the event.'],
      rules: ['Content must be original; any music, footage, or images from other sources must be credited and used appropriately.', 'Late entries are not accepted.', 'Entries are tested on the event system before the event day.'],
      criteria: [['Concept and relevance to Iqbal’s message', '30'], ['Storytelling and script', '25'], ['Visuals, editing and sound', '25'], ['Creativity and originality', '20']]
    }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const icon = (name, extra = '') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
  const esc = (str) => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const registrationLink = (id, label, ariaLabel, className = 'card-register-button') => {
    const link = config.formLinks?.[id];
    if (typeof link === 'string' && /^https:\/\/docs\.google\.com\/forms\//i.test(link.trim())) {
      return `<a class="${esc(className)}" href="${esc(link.trim())}" target="_blank" rel="noopener noreferrer" aria-label="${esc(ariaLabel)}">${esc(label)} ${icon('arrow-up')}</a>`;
    }
    return `<button class="${esc(className)}" type="button" disabled title="Registration link is not configured">${esc(label)} unavailable</button>`;
  };
  const grid = $('#modulesGrid');
  const modal = $('#moduleModal');
  const modalContent = $('#modalContent');
  let lastModalTrigger = null;
  let activeFilter = 'all';

  function renderCards(filter = 'all') {
    const visible = modules.filter(m => filter === 'all' || m.category === filter || (filter === 'individual' && m.id === 'singing'));
    grid.innerHTML = visible.map((m, index) => {
      const registerActions = m.id === 'singing'
        ? `<button class="card-detail-button" type="button" data-open="${esc(m.id)}" aria-label="View ${esc(m.title)} details">DETAILS ${icon('arrow')}</button>${registrationLink('singingSolo', 'SOLO', `Register for the solo ${m.title}`)}${registrationLink('singingGroup', 'GROUP', `Register for the group ${m.title}`)}`
        : `<button class="card-detail-button" type="button" data-open="${esc(m.id)}" aria-label="View ${esc(m.title)} details">DETAILS ${icon('arrow')}</button>${registrationLink(m.id, 'REGISTER', `Register for ${m.title}`)}`;
      return `
        <article class="module-card" data-reveal data-module="${esc(m.id)}" style="--card-index:${index}">
          <div class="card-top"><span class="card-number">${m.number}<i> / 06</i></span><div class="card-emblem">${icon(m.icon)}</div></div>
          <div class="card-core"><div class="card-category">${esc(m.badge)}</div><h3>${esc(m.name)}</h3><p class="card-urdu-name" lang="ur" dir="rtl">${esc(m.urduName)}</p><p class="card-subtitle">${esc(m.title)}</p><p class="card-description">${esc(m.description)}</p></div>
          <div class="card-details"><div><small>PARTICIPATION</small><strong>${esc(m.participation)}</strong></div><div><small>REGISTRATION FEE</small><strong>${esc(m.fee)}</strong></div></div>
          <div class="card-actions${m.id === 'singing' ? ' card-actions-singing' : ''}">${registerActions}</div>
        </article>
      `;
    }).join('');
    observeReveals();
    bindCardTilt();
  }

  function renderModal(m) {
    const formatItems = m.format.map(s => `<li>${esc(s)}</li>`).join('');
    const ruleItems = m.rules.map(s => `<li>${esc(s)}</li>`).join('');
    const criterionItems = m.criteria.map(([key, val]) => `<div class="criterion-row"><span>${esc(key)}</span><strong>${esc(val)}</strong></div>`).join('');
    const registrationActions = m.id === 'singing'
      ? `<div class="modal-registration-options">${registrationLink('singingSolo', 'REGISTER SOLO', 'Register for solo Kalam-e-Iqbal singing', 'button button-burgundy button-large')}${registrationLink('singingGroup', 'REGISTER GROUP', 'Register for group Kalam-e-Iqbal singing', 'button button-burgundy button-large')}</div>`
      : registrationLink(m.id, 'REGISTER FOR THIS MODULE', `Register for ${m.title}`, 'button button-burgundy button-large');
    modalContent.innerHTML = `
      <div class="modal-head"><span class="modal-overline">THE COMPETITION ARCHIVES / MODULE ${m.number}</span><div class="modal-heading-row"><div><h2 id="modalHeading">${esc(m.name)}</h2><p class="modal-urdu-name" lang="ur" dir="rtl">${esc(m.urduName)}</p><p>${esc(m.title)}</p></div><div class="modal-symbol">${icon(m.icon)}</div></div><p class="modal-intro">${esc(m.intro)}</p></div>
      <div class="modal-facts"><div><small>FEE</small><strong>${esc(m.fee)}</strong></div><div><small>PARTICIPATION</small><strong>${esc(m.participation)}</strong></div><div><small>FORMAT / TIME</small><strong>${esc(m.duration)}</strong></div></div>
      <div class="modal-body"><div class="modal-panel"><h3>Format & description</h3><ul>${formatItems}</ul></div><div class="modal-panel"><h3>Rules to remember</h3><ul>${ruleItems}</ul></div><div class="modal-panel modal-score"><h3>${esc(m.scoreTitle)}</h3><div class="criteria-list">${criterionItems}</div></div></div>
      <div class="modal-bottom"><p>Ready to make your mark?<br/><span>Registration confirmation requires payment.</span></p>${registrationActions}</div>
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

  document.addEventListener('click', e => {
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

  // Deadline countdown uses the configured local offset.
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
