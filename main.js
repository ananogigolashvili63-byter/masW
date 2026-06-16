/**
 * masW — Learning Resources Sharing Platform
 * Main application logic
 */

// =============================================
// Data
// =============================================

const SUBJECTS = [
  { id: 'math', name: 'Mathematics', icon: '📐', color: '#4f46e5' },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: '#0891b2' },
  { id: 'geography', name: 'Geography', icon: '🌍', color: '#059669' },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#16a34a' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: '#7c3aed' },
  { id: 'history', name: 'History', icon: '📜', color: '#b45309' },
  { id: 'citizenship', name: 'Citizenship', icon: '🏛️', color: '#6366f1' },
  { id: 'literature', name: 'Literature', icon: '📚', color: '#db2777' },
  { id: 'english', name: 'English', icon: '✍️', color: '#2563eb' },
  { id: 'art', name: 'Art', icon: '🎨', color: '#e11d48' },
  { id: 'music', name: 'Music', icon: '🎵', color: '#9333ea' },
  { id: 'pe', name: 'Physical Ed.', icon: '🏃', color: '#ea580c' },
  { id: 'cs', name: 'Computer Science', icon: '💻', color: '#0d9488' },
];

const RESOURCES = [
  {
    id: 1, title: 'Quadratic Equations — Complete Guide',
    desc: 'Step-by-step notes covering factoring, completing the square, and the quadratic formula with practice problems.',
    subject: 'math', type: 'notes', author: 'Ana K.', downloads: 234, date: '2 days ago',
  },
  {
    id: 2, title: 'Periodic Table Reference Sheet',
    desc: 'Color-coded periodic table with electron configurations, group properties, and trend summaries.',
    subject: 'chemistry', type: 'pdf', author: 'Giorgi M.', downloads: 189, date: '3 days ago',
  },
  {
    id: 3, title: 'World Climate Zones Presentation',
    desc: 'Detailed slides on tropical, temperate, and polar climates with maps and case studies.',
    subject: 'geography', type: 'presentation', author: 'Nino T.', downloads: 156, date: '4 days ago',
  },
  {
    id: 4, title: 'Cell Structure & Function Notes',
    desc: 'Comprehensive notes on organelles, cell membrane transport, and microscopy techniques.',
    subject: 'biology', type: 'notes', author: 'Luka B.', downloads: 201, date: '5 days ago',
  },
  {
    id: 5, title: 'Newton\'s Laws Explained',
    desc: 'Video-style notes with diagrams explaining all three laws of motion and real-world examples.',
    subject: 'physics', type: 'video', author: 'Mariam S.', downloads: 178, date: '1 week ago',
  },
  {
    id: 6, title: 'Organic Chemistry Reactions Chart',
    desc: 'Visual summary of substitution, elimination, and addition reactions with mechanisms.',
    subject: 'chemistry', type: 'pdf', author: 'David R.', downloads: 312, date: '1 week ago',
  },
  {
    id: 7, title: 'WWII Timeline & Key Events',
    desc: 'Chronological timeline from 1939–1945 with causes, battles, and consequences for exam prep.',
    subject: 'history', type: 'notes', author: 'Salome G.', downloads: 145, date: '1 week ago',
  },
  {
    id: 8, title: 'Shakespeare — Macbeth Analysis',
    desc: 'Character analysis, themes, and key quotes with essay structure tips for literature exams.',
    subject: 'literature', type: 'notes', author: 'Irakli P.', downloads: 167, date: '2 weeks ago',
  },
  {
    id: 9, title: 'Trigonometry Cheat Sheet',
    desc: 'All essential formulas, unit circle values, and identity proofs in one handy PDF.',
    subject: 'math', type: 'pdf', author: 'Tamuna L.', downloads: 289, date: '2 weeks ago',
  },
  {
    id: 10, title: 'Essay Writing Guide — English',
    desc: 'Structure templates for argumentative, descriptive, and comparative essays with examples.',
    subject: 'english', type: 'pdf', author: 'Ketevan A.', downloads: 198, date: '2 weeks ago',
  },
  {
    id: 11, title: 'Python Basics for Beginners',
    desc: 'Introductory programming notes covering variables, loops, functions, and simple projects.',
    subject: 'cs', type: 'notes', author: 'Giorgi M.', downloads: 223, date: '3 weeks ago',
  },
  {
    id: 12, title: 'Plate Tectonics & Earthquakes',
    desc: 'Presentation on continental drift, plate boundaries, and seismic activity with diagrams.',
    subject: 'geography', type: 'presentation', author: 'Nino T.', downloads: 134, date: '3 weeks ago',
  },
];

const TEXTBOOKS = [
  {
    id: 1, title: 'Advanced Mathematics', grade: 'Grade 10–11',
    author: 'National Curriculum Press', subject: 'math',
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)', pages: 384,
  },
  {
    id: 2, title: 'General Chemistry', grade: 'Grade 9–10',
    author: 'Science Education Board', subject: 'chemistry',
    gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)', pages: 412,
  },
  {
    id: 3, title: 'World Geography Today', grade: 'Grade 8–9',
    author: 'GeoLearn Publishers', subject: 'geography',
    gradient: 'linear-gradient(135deg, #059669, #34d399)', pages: 356,
    pdfUrl: 'https://drive.google.com/file/d/1KMFAwsZvFt3dLA6hNkRc4KnVvcZN99Hj/view?usp=sharing',
  },
  {
    id: 4, title: 'Biology: Life Sciences', grade: 'Grade 10',
    author: 'BioText Academy', subject: 'biology',
    gradient: 'linear-gradient(135deg, #16a34a, #4ade80)', pages: 448,
    pdfUrl: 'https://drive.google.com/file/d/1KMFAwsZvFt3dLA6hNkRc4KnVvcZN99Hj/view?usp=sharing',
  },
  {
    id: 5, title: 'Physics Fundamentals', grade: 'Grade 11',
    author: 'Physics World Press', subject: 'physics',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', pages: 392,
    pdfUrl: 'https://drive.google.com/file/d/1KMFAwsZvFt3dLA6hNkRc4KnVvcZN99Hj/view?usp=sharing',
  },
  {
    id: 6, title: 'Modern World History', grade: 'Grade 9–10',
    author: 'History Hub Editions', subject: 'history',
    gradient: 'linear-gradient(135deg, #b45309, #f59e0b)', pages: 368,
    pdfUrl: 'https://drive.google.com/file/d/1fOYYgYwuv8GLuw4u5Cw4fLefEEamL8S6/view?usp=sharing',
  },
  {
    id: 7, title: 'English Grammar & Composition', grade: 'Grade 8–11',
    author: 'Language Arts Co.', subject: 'english',
    gradient: 'linear-gradient(135deg, #2563eb, #60a5fa)', pages: 320,
  },
  {
    id: 8, title: 'Introduction to Programming', grade: 'Grade 10–12',
    author: 'CodeStart Publishing', subject: 'cs',
    gradient: 'linear-gradient(135deg, #0d9488, #2dd4bf)', pages: 296,
  },
  {
    id: 9, title: 'Citizenship & Society', grade: 'Grade 9–10',
    author: 'Civic Education Press', subject: 'citizenship',
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)', pages: 280,
    pdfUrl: 'https://drive.google.com/file/d/1x59uydG2nru6YhqsS8RfYBWPc_wwRufO/view?usp=sharing',
  },
];

const DISCUSSIONS = [
  {
    id: 1, space: 'math', title: 'Help with integration by parts?',
    body: 'I\'m stuck on problem 14 from chapter 7. Can someone explain the u-substitution approach for ∫x·e^x dx?',
    author: 'Ana K.', time: '2 hours ago', replies: 8, likes: 12,
    avatarColor: '#4f46e5',
  },
  {
    id: 2, space: 'chemistry', title: 'Balancing redox equations — tips?',
    body: 'Our teacher wants us to use the half-reaction method but I keep getting wrong coefficients. Any tricks?',
    author: 'Giorgi M.', time: '5 hours ago', replies: 5, likes: 7,
    avatarColor: '#0891b2',
  },
  {
    id: 3, space: 'geography', title: 'Climate change essay resources',
    body: 'Looking for good sources and data for my geography essay on rising sea levels. What did you use?',
    author: 'Nino T.', time: '1 day ago', replies: 11, likes: 15,
    avatarColor: '#059669',
  },
  {
    id: 4, space: 'biology', title: 'Photosynthesis vs Cellular Respiration',
    body: 'Can someone create a comparison table? I always mix up the inputs and outputs of each process.',
    author: 'Luka B.', time: '1 day ago', replies: 6, likes: 9,
    avatarColor: '#16a34a',
  },
  {
    id: 5, space: 'physics', title: 'Projectile motion practice problems',
    body: 'Sharing 10 practice problems with solutions for our upcoming test. Feel free to ask questions!',
    author: 'Mariam S.', time: '2 days ago', replies: 14, likes: 22,
    avatarColor: '#7c3aed',
  },
  {
    id: 6, space: 'history', title: 'Cold War — key dates to memorize?',
    body: 'What are the most important dates for the Cold War unit? Our exam covers 1945–1991.',
    author: 'Salome G.', time: '2 days ago', replies: 9, likes: 11,
    avatarColor: '#b45309',
  },
  {
    id: 7, space: 'english', title: 'How to improve essay introductions?',
    body: 'My teacher says my intros are too vague. Any examples of strong opening paragraphs?',
    author: 'Ketevan A.', time: '3 days ago', replies: 7, likes: 8,
    avatarColor: '#2563eb',
  },
  {
    id: 8, space: 'cs', title: 'Python list comprehension help',
    body: 'What\'s the difference between [x*2 for x in range(10)] and using a for loop? When should I use each?',
    author: 'Irakli P.', time: '3 days ago', replies: 4, likes: 6,
    avatarColor: '#0d9488',
  },
];

// =============================================
// State
// =============================================

let state = {
  activeSubject: null,
  resourceFilter: 'all',
  subjectFilter: 'all',
  activeSpace: 'all',
};

// =============================================
// Helpers
// =============================================

function getDriveDownloadUrl(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  if (match) return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  return url;
}

function getSubject(id) {
  return SUBJECTS.find(s => s.id === id) || { name: id, color: '#4f46e5', icon: '📖' };
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function getTypeLabel(type) {
  const labels = { notes: 'Notes', pdf: 'PDF', presentation: 'Slides', video: 'Video' };
  return labels[type] || type;
}

function getTypeIcon(type) {
  const icons = { notes: '📝', pdf: '📄', presentation: '📊', video: '🎬' };
  return icons[type] || '📁';
}

function countBySubject(subjectId) {
  return RESOURCES.filter(r => r.subject === subjectId).length;
}

// =============================================
// Toast
// =============================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// =============================================
// Render: Subjects
// =============================================

function renderSubjects() {
  const grid = document.getElementById('subjectsGrid');
  grid.innerHTML = SUBJECTS.map((subject, i) => {
    const count = countBySubject(subject.id);
    const isActive = state.activeSubject === subject.id;
    return `
      <div class="subject-card ${isActive ? 'active' : ''} slide-up"
           style="--subject-color: ${subject.color}; animation-delay: ${i * 0.05}s"
           data-subject="${subject.id}">
        <div class="subject-icon">${subject.icon}</div>
        <span class="subject-name">${subject.name}</span>
        <span class="subject-count">${count} resources</span>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.subject;
      state.activeSubject = state.activeSubject === id ? null : id;
      state.subjectFilter = state.activeSubject || 'all';
      document.getElementById('subjectFilter').value = state.subjectFilter;
      renderSubjects();
      renderResources();
      document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =============================================
// Render: Resources
// =============================================

function renderResources() {
  const grid = document.getElementById('resourcesGrid');
  const empty = document.getElementById('resourcesEmpty');

  let filtered = [...RESOURCES];

  if (state.resourceFilter !== 'all') {
    filtered = filtered.filter(r => r.type === state.resourceFilter);
  }

  if (state.subjectFilter !== 'all') {
    filtered = filtered.filter(r => r.subject === state.subjectFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');

  grid.innerHTML = filtered.map((resource, i) => {
    const subject = getSubject(resource.subject);
    return `
      <article class="resource-card slide-up" style="animation-delay: ${i * 0.06}s">
        <div class="resource-card-header">
          <span class="resource-type-badge type-${resource.type}">
            ${getTypeIcon(resource.type)} ${getTypeLabel(resource.type)}
          </span>
          <span class="resource-subject-tag" style="--tag-color: ${subject.color}">
            ${subject.name}
          </span>
        </div>
        <h3 class="resource-title">${resource.title}</h3>
        <p class="resource-desc">${resource.desc}</p>
        <div class="resource-footer">
          <div class="resource-author">
            <span class="author-avatar">${getInitials(resource.author)}</span>
            <span class="author-name">${resource.author}</span>
          </div>
          <div class="resource-meta">
            <span>${resource.downloads} downloads</span>
            <button class="resource-download" data-id="${resource.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.resource-download').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const resource = RESOURCES.find(r => r.id === parseInt(btn.dataset.id));
      showToast(`Downloading "${resource.title}"...`, 'info');
    });
  });
}

// =============================================
// Render: Textbooks
// =============================================

function renderTextbooks() {
  const grid = document.getElementById('textbooksGrid');

  grid.innerHTML = TEXTBOOKS.map((book, i) => {
    const subject = getSubject(book.subject);
    return `
      <div class="textbook-card slide-up" style="animation-delay: ${i * 0.07}s" data-id="${book.id}">
        <div class="textbook-cover">
          <div class="textbook-cover-bg" style="background: ${book.gradient}"></div>
          <span class="textbook-pdf-badge">PDF</span>
          <div class="textbook-cover-content">
            <h3>${book.title}</h3>
            <p>${book.grade}</p>
          </div>
        </div>
        <div class="textbook-info">
          <span class="textbook-subject">${subject.name}</span>
          <h4 class="textbook-title">${book.title}</h4>
          <p class="textbook-author-name">${book.author} · ${book.pages} pages</p>
          <div class="textbook-actions">
            ${book.pdfUrl ? `
              <a class="textbook-btn textbook-btn--primary" href="${book.pdfUrl}" target="_blank" rel="noopener noreferrer">Read Online</a>
              <a class="textbook-btn textbook-btn--secondary" href="${getDriveDownloadUrl(book.pdfUrl)}" target="_blank" rel="noopener noreferrer">Download</a>
            ` : `
              <button class="textbook-btn textbook-btn--primary" data-action="read" data-id="${book.id}" disabled>Read Online</button>
              <button class="textbook-btn textbook-btn--secondary" data-action="download" data-id="${book.id}" disabled>Download</button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.textbook-btn[disabled]').forEach(btn => {
    btn.addEventListener('click', () => {
      const book = TEXTBOOKS.find(b => b.id === parseInt(btn.dataset.id));
      showToast(`No PDF available for "${book.title}" yet.`, 'info');
    });
  });
}

// =============================================
// Render: Discussions
// =============================================

function renderDiscussions() {
  const spaceList = document.getElementById('spaceList');
  const threads = document.getElementById('discussionThreads');

  const spaceCounts = {};
  DISCUSSIONS.forEach(d => {
    spaceCounts[d.space] = (spaceCounts[d.space] || 0) + 1;
  });

  const allCount = DISCUSSIONS.length;

  spaceList.innerHTML = `
    <li class="space-item ${state.activeSpace === 'all' ? 'active' : ''}" data-space="all">
      <span class="space-icon">💬</span>
      <span>All Topics</span>
      <span class="space-count">${allCount}</span>
    </li>
    ${SUBJECTS.filter(s => spaceCounts[s.id]).map(s => `
      <li class="space-item ${state.activeSpace === s.id ? 'active' : ''}" data-space="${s.id}">
        <span class="space-icon">${s.icon}</span>
        <span>${s.name}</span>
        <span class="space-count">${spaceCounts[s.id] || 0}</span>
      </li>
    `).join('')}
  `;

  spaceList.querySelectorAll('.space-item').forEach(item => {
    item.addEventListener('click', () => {
      state.activeSpace = item.dataset.space;
      renderDiscussions();
    });
  });

  let filtered = state.activeSpace === 'all'
    ? DISCUSSIONS
    : DISCUSSIONS.filter(d => d.space === state.activeSpace);

  threads.innerHTML = filtered.map((thread, i) => {
    const subject = getSubject(thread.space);
    return `
      <div class="thread-card slide-up" style="animation-delay: ${i * 0.05}s" data-id="${thread.id}">
        <div class="thread-header">
          <span class="thread-avatar" style="background: ${thread.avatarColor}">${getInitials(thread.author)}</span>
          <div class="thread-meta">
            <div class="thread-author">${thread.author}</div>
            <div class="thread-time">${thread.time}</div>
          </div>
          <span class="thread-space-badge">${subject.icon} ${subject.name}</span>
        </div>
        <h4 class="thread-title">${thread.title}</h4>
        <p class="thread-preview">${thread.body}</p>
        <div class="thread-stats">
          <span class="thread-stat">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            ${thread.replies} replies
          </span>
          <span class="thread-stat">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            ${thread.likes} likes
          </span>
        </div>
      </div>
    `;
  }).join('');

  threads.querySelectorAll('.thread-card').forEach(card => {
    card.addEventListener('click', () => {
      const thread = DISCUSSIONS.find(t => t.id === parseInt(card.dataset.id));
      showToast(`Opening "${thread.title}"...`, 'info');
    });
  });
}

// =============================================
// Populate Selects
// =============================================

function populateSelects() {
  const subjectFilter = document.getElementById('subjectFilter');
  const resourceSubject = document.getElementById('resourceSubject');
  const discussionSpace = document.getElementById('discussionSpace');

  SUBJECTS.forEach(s => {
    subjectFilter.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    resourceSubject.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    discussionSpace.innerHTML += `<option value="${s.id}">${s.name}</option>`;
  });
}

// =============================================
// Search
// =============================================

function performSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) {
    results.innerHTML = '';
    return;
  }

  const q = query.toLowerCase();
  const matches = [];

  RESOURCES.forEach(r => {
    if (r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)) {
      matches.push({ type: 'resource', item: r });
    }
  });

  TEXTBOOKS.forEach(b => {
    if (b.title.toLowerCase().includes(q)) {
      matches.push({ type: 'textbook', item: b });
    }
  });

  DISCUSSIONS.forEach(d => {
    if (d.title.toLowerCase().includes(q) || d.body.toLowerCase().includes(q)) {
      matches.push({ type: 'discussion', item: d });
    }
  });

  SUBJECTS.forEach(s => {
    if (s.name.toLowerCase().includes(q)) {
      matches.push({ type: 'subject', item: s });
    }
  });

  if (matches.length === 0) {
    results.innerHTML = '<p style="padding: 20px; color: var(--color-text-muted); text-align: center;">No results found.</p>';
    return;
  }

  results.innerHTML = matches.slice(0, 8).map(match => {
    const subject = match.type === 'subject' ? match.item : getSubject(match.item.subject || match.item.id);
    let title, subtitle, icon;

    switch (match.type) {
      case 'resource':
        title = match.item.title;
        subtitle = `${getTypeLabel(match.item.type)} · ${subject.name}`;
        icon = getTypeIcon(match.item.type);
        break;
      case 'textbook':
        title = match.item.title;
        subtitle = `Textbook · ${subject.name}`;
        icon = '📕';
        break;
      case 'discussion':
        title = match.item.title;
        subtitle = `Discussion · ${subject.name}`;
        icon = '💬';
        break;
      case 'subject':
        title = match.item.name;
        subtitle = 'Subject';
        icon = match.item.icon;
        break;
    }

    return `
      <div class="search-result-item" data-type="${match.type}" data-id="${match.item.id}">
        <span class="search-result-icon" style="background: color-mix(in srgb, ${subject.color || '#4f46e5'} 12%, white)">${icon}</span>
        <div class="search-result-info">
          <h4>${title}</h4>
          <p>${subtitle}</p>
        </div>
      </div>
    `;
  }).join('');

  results.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      closeSearch();
      const type = item.dataset.type;
      const sectionMap = { resource: '#resources', textbook: '#textbooks', discussion: '#discussions', subject: '#subjects' };
      document.querySelector(sectionMap[type]).scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function openSearch() {
  document.getElementById('searchOverlay').classList.add('active');
  document.getElementById('globalSearch').focus();
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

// =============================================
// Modals
// =============================================

function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay.active').forEach(m => {
    m.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// =============================================
// Event Listeners
// =============================================

function initEvents() {
  // Header scroll
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Search
  document.getElementById('searchToggle').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  document.getElementById('globalSearch').addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeAllModals();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // Filter tabs
  document.getElementById('filterTabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.resourceFilter = tab.dataset.filter;
    renderResources();
  });

  // Subject filter dropdown
  document.getElementById('subjectFilter').addEventListener('change', (e) => {
    state.subjectFilter = e.target.value;
    state.activeSubject = e.target.value === 'all' ? null : e.target.value;
    renderSubjects();
    renderResources();
  });

  // Upload modal
  document.getElementById('uploadBtn').addEventListener('click', () => openModal('uploadModal'));
  document.getElementById('newDiscussionBtn').addEventListener('click', () => openModal('discussionModal'));

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  // File drop
  const fileDrop = document.getElementById('fileDrop');
  const fileInput = document.getElementById('resourceFile');

  fileDrop.addEventListener('click', () => fileInput.click());

  fileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDrop.classList.add('dragover');
  });

  fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('dragover'));

  fileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDrop.classList.remove('dragover');
    if (e.dataTransfer.files.length) {
      fileInput.files = e.dataTransfer.files;
      updateFileDrop(e.dataTransfer.files[0].name);
    }
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) updateFileDrop(fileInput.files[0].name);
  });

  function updateFileDrop(name) {
    fileDrop.classList.add('has-file');
    fileDrop.querySelector('p').innerHTML = `<strong>${name}</strong> ready to upload`;
  }

  // Upload form
  document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('resourceTitle').value;
    const subject = document.getElementById('resourceSubject').value;
    const type = document.getElementById('resourceType').value;
    const desc = document.getElementById('resourceDesc').value;

    RESOURCES.unshift({
      id: Date.now(),
      title,
      desc: desc || 'Shared by a community member.',
      subject,
      type,
      author: 'You',
      downloads: 0,
      date: 'Just now',
    });

    renderResources();
    renderSubjects();
    closeAllModals();
    e.target.reset();
    fileDrop.classList.remove('has-file');
    fileDrop.querySelector('p').innerHTML = 'Drag & drop your file here, or <span>browse</span>';
    showToast(`"${title}" uploaded successfully!`);
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  });

  // Discussion form
  document.getElementById('discussionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('discussionTitle').value;
    const space = document.getElementById('discussionSpace').value;
    const body = document.getElementById('discussionBody').value;
    const subject = getSubject(space);

    DISCUSSIONS.unshift({
      id: Date.now(),
      space,
      title,
      body,
      author: 'You',
      time: 'Just now',
      replies: 0,
      likes: 0,
      avatarColor: subject.color,
    });

    renderDiscussions();
    closeAllModals();
    e.target.reset();
    showToast('Discussion posted!');
    document.getElementById('discussions').scrollIntoView({ behavior: 'smooth' });
  });
}

// =============================================
// Init
// =============================================

function init() {
  populateSelects();
  renderSubjects();
  renderResources();
  renderTextbooks();
  renderDiscussions();
  initEvents();
}

document.addEventListener('DOMContentLoaded', init);
