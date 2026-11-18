(function () {
  'use strict';
  const config = window.IQBAL_CONFIG || { formLinks: {}, deadline: '2026-11-18T17:00:00+05:00' };

  // Source: MODULES-DETAIL.pdf, updated per latest event schedule. Prices are in Pakistani rupees.
  const modules = [
    {
      id: 'quiz', number: '01', icon: 'book', category: 'individual',
      name: 'Fikr o Firasat', urduName: 'فکر و فراست', title: 'Iqbal Quiz Competition (Oral)',
      description: 'Oral quiz on Iqbal’s life, poetry, and philosophy. Answer within the timer.',
      fee: 'Rs. 300', participation: 'Individual (Solo only)', duration: 'Oral timer round', scoreTitle: 'Scoring', badge: 'Oral Quiz & Timer',
      intro: 'A live oral quiz competition where solo participants answer questions on Allama Iqbal’s life, literary works, and philosophy within a strict timer.',
      format: [
        'Participation is strictly individual (solo); no group entries.',
        'Oral quiz format: questions are delivered orally on stage (not written, no answer sheets).',
        'Participants must give their answer within the allotted countdown timer.',
        'Questions cover Iqbal’s life, major works (Bang-e-Dra, Bal-e-Jibril, Zarb-e-Kaleem), the philosophy of Khudi, and the Pakistan Movement.',
        'Scoring is updated live on stage during each participant’s turn.'
      ],
      rules: [
        'Strictly solo participation; no answer sheets or written assistance.',
        'Answers must be spoken clearly before the countdown timer expires.',
        'Late answers or expired timers receive zero marks.',
        'Ties are resolved through a rapid-fire tie-breaker question.',
        'The decision of the quizmaster and judges is final.'
      ],
      criteria: [['Correct answer within timer', '10 marks'], ['Answer after timer / incorrect', '0 marks'], ['Tie', 'Rapid-fire tie-breaker']]
    },
    {
      id: 'singing', number: '02', icon: 'music', category: ['individual', 'team'],
      name: 'Sur o Sakhan', urduName: 'سر و سخن', title: 'Kalam-e-Iqbal Singing Competition',
      description: 'Perform Iqbal’s kalam live as a soloist or in a group.',
      fee: 'Solo: Rs. 200 · Group: Rs. 400', participation: 'Solo or group', duration: '4 minutes per entry', scoreTitle: 'Judging Criteria (100 Marks)', badge: 'Solo & group performance',
      intro: 'A live performance of Allama Iqbal’s kalam, entered as either a soloist or a group and judged on musicality, language, expression, and stage presence.',
      format: ['Solo entries are Rs. 200; group entries are Rs. 400.', 'Each entry has up to 4 minutes to perform.', 'Only the kalam of Allama Iqbal may be performed; live vocals are compulsory.', 'Musical instruments are allowed (e.g. harmonium, tabla, guitar, keyboard); participants bring their own instruments.', 'Kalam is selected before the event to avoid repetition.'],
      rules: ['Only Iqbal’s kalam is permitted.', 'Live vocals are compulsory.', 'Each entry gets a short sound check before the event.'],
      registrationOptions: [
        { id: 'singingSolo', cardLabel: 'REGISTER SOLO', modalLabel: 'REGISTER SOLO · RS. 200' },
        { id: 'singingGroup', cardLabel: 'REGISTER GROUP', modalLabel: 'REGISTER GROUP · RS. 400' }
      ],
      criteria: [['Voice and tune', '30'], ['Urdu diction and pronunciation', '20'], ['Understanding and expression of the kalam', '20'], ['Composition and use of instruments', '20'], ['Stage presence', '10']]
    },
    {
      id: 'baitbaazi', number: '03', icon: 'scroll', category: 'team',
      name: 'Bazm-e-Qafia', urduName: 'بزمِ قافیہ', title: 'Bait Baazi (Urdu Poetry Contest)',
      description: 'Recite Urdu couplets in teams of two across three rounds, including an Iqbal round.',
      fee: 'Rs. 500 / team', participation: 'Team of 2 members', duration: '30 seconds per turn', scoreTitle: 'Scoring', badge: '3 rounds',
      intro: 'Teams of two compete on stage across three poetry rounds, reciting Urdu verses and demonstrating their command of classical poetry.',
      format: ['Participants register as a team of two members.', 'Teams compete on stage across three poetry rounds.', 'Round 1 — Harf-e-Aakhir: each team recites a couplet beginning with the last letter of the previous couplet (any Urdu poet).', 'Round 2 — Iqbal Special: only couplets of Allama Iqbal are allowed.', 'Round 3 — Sher ki Samajh: a couplet is shown on screen and the team explains its meaning for bonus points.'],
      rules: ['30 seconds per turn; a couplet cannot be repeated.', 'A wrong or misattributed couplet may be challenged by the opposing team and checked by the judges.', 'Inappropriate verses lead to disqualification.'],
      criteria: [['Each valid couplet', '10 marks'], ['Correct explanation of meaning (bonus)', '5 marks'], ['Winner', 'Team with the higher total']]
    },
    {
      id: 'speech', number: '04', icon: 'mic', category: 'individual',
      name: 'Nida-e-Waqt', urduName: 'ندائے وقت', title: 'Speech Competition',
      description: 'Prepared 3-minute speech on Iqbal’s philosophy. Both English and Urdu permitted.',
      fee: 'Rs. 400', participation: 'Individual (Solo)', duration: '3 minutes per participant', scoreTitle: 'Judging Criteria', badge: 'English & Urdu',
      intro: 'An individual speech competition delivering eloquent oratory on Iqbal’s celebrated poetry and timeless message of Shaheen. Speeches can be in either Urdu or English.',
      format: [
        'Participation is strictly individual (solo).',
        'Speech duration: exactly 3 minutes per speaker.',
        'Medium: Speeches can be delivered in both English and Urdu.',
        'Assigned Poetry Topic / Motion:\n"شاہیں کبھی پرواز سے تھک کر نہیں گِرتا\nپُردَم ہے اگر تُو، تو نہیں خطرۂ افتاد"\n(A Shaheen never falls weary from flight; if you possess soaring spirit and resolve, there is no fear of falling).',
        'Speeches must be delivered extemporaneously; complete script reading is not permitted.'
      ],
      rules: [
        'Speech duration is strictly 3 minutes; time limits are strictly observed.',
        'Reading full scripts or from mobile phones is not permitted; brief cue notes are allowed.',
        'Both Urdu and English languages are welcomed.',
        'Content must remain relevant to the assigned Iqbalian verse and theme.',
        'The decision of the judges is final and binding.'
      ],
      criteria: [['Content, depth & relevance to the shair', '35%'], ['Delivery, eloquence & voice modulation', '25%'], ['Language proficiency & pronunciation', '20%'], ['Stage presence & time management (3 mins)', '20%']]
    },
    {
      id: 'documentary', number: '05', icon: 'film', category: 'individual',
      name: 'Nigah-e-Shaheen', urduName: 'نگاہِ شاہین', title: 'Reel / Documentary Competition',
      description: 'Submit an original reel or documentary about Iqbal.',
      fee: 'Rs. 350', participation: 'Individual (Solo entry)', duration: 'Reel up to 80 seconds; documentary up to 3 minutes', scoreTitle: 'Judging Criteria (100 Marks)', badge: 'Video submission',
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
    const visible = modules.filter(m => filter === 'all' || (Array.isArray(m.category) ? m.category.includes(filter) : m.category === filter));
    grid.innerHTML = visible.map((m, index) => {
      const registrations = m.registrationOptions
        ? m.registrationOptions.map(option => registrationLink(option.id, option.cardLabel, `${option.cardLabel.toLowerCase()} for ${m.title}`)).join('')
        : registrationLink(m.id, 'REGISTER', `Register for ${m.title}`);
      const registerActions = `<button class="card-detail-button" type="button" data-open="${esc(m.id)}" aria-label="View ${esc(m.title)} details">DETAILS ${icon('arrow')}</button>${registrations}`;
      return `
        <article class="module-card" data-reveal data-module="${esc(m.id)}" style="--card-index:${index}">
          <div class="card-top"><span class="card-number">${m.number}<i> / 05</i></span><div class="card-emblem">${icon(m.icon)}</div></div>
          <div class="card-core"><div class="card-category">${esc(m.badge)}</div><h3>${esc(m.name)}</h3><p class="card-urdu-name" lang="ur" dir="rtl">${esc(m.urduName)}</p><p class="card-subtitle">${esc(m.title)}</p><p class="card-description">${esc(m.description)}</p></div>
          <div class="card-details"><div><small>PARTICIPATION</small><strong>${esc(m.participation)}</strong></div><div><small>REGISTRATION FEE</small><strong>${esc(m.fee)}</strong></div></div>
          <div class="card-actions${m.registrationOptions ? ' card-actions-singing' : ''}">${registerActions}</div>
        </article>
      `;
    }).join('');
    observeReveals();
    bindCardTilt();
  }

  function renderModal(m) {
    const formatItems = m.format.map(s => `<li>${esc(s).replace(/\n/g, '<br>')}</li>`).join('');
    const ruleItems = m.rules.map(s => `<li>${esc(s)}</li>`).join('');
    const criterionItems = m.criteria.map(([key, val]) => `<div class="criterion-row"><span>${esc(key)}</span><strong>${esc(val)}</strong></div>`).join('');
    const registrationActions = m.registrationOptions
      ? `<div class="modal-registration-options">${m.registrationOptions.map(option => registrationLink(option.id, option.modalLabel, `${option.cardLabel.toLowerCase()} for ${m.title}`, 'button button-burgundy button-large')).join('')}</div>`
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
