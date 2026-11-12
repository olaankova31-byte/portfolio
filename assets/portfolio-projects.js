(() => {
  const projects = [
    {
      slug:'invest-group', name:'Invest Group',
      category:{ru:'Недвижимость · Самара',en:'Real estate · Samara'},
      format:{ru:'Сайт агентства',en:'Agency website'},
      description:{ru:'Сайт агентства недвижимости с направлениями жилой и коммерческой недвижимости, ипотечным калькулятором, кейсами и формой заявки. В проекте — структура и дизайн сайта, страницы и мобильные макеты.',en:'A real estate agency website with residential and commercial property, a mortgage calculator, case studies and an inquiry form. Portfolio contribution: site structure and design, page layouts and mobile screens.'},
      url:'https://www.igsamara.ru/', cover:'21.jpg', gallery:['21.jpg','22.jpg','23.jpg','24.jpg'], color:'#dfe7e4', ink:'#163b36'
    },
    {
      slug:'it-nika', name:'IT-NIKA',
      category:{ru:'IT · внедрение CRM',en:'IT · CRM implementation'},
      format:{ru:'Дизайн-концепт в Figma',en:'Figma design concept'},
      description:{ru:'Концепция нового сайта для компании, которая внедряет CRM-системы. Проект представлен как интерактивный макет в Figma.',en:'A new website concept for a company that implements CRM systems. The project is presented as an interactive Figma prototype.'},
      url:'https://www.figma.com/proto/Bn4W970UG87IRvq9u23JtT/IT-NIKA?node-id=38-15&t=jIFUimkatNyMWlwp-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1', visitLabel:{ru:'Открыть концепт',en:'Open concept'}, color:'#dce4fb', ink:'#263c79'
    },
    {
      slug:'deloart', name:'DeloArt',
      category:{ru:'Digital · брендинг · разработка',en:'Digital · branding · development'},
      format:{ru:'Действующий сайт',en:'Live website'},
      description:{ru:'Digital-проект DeloArt. Визуальные материалы кейса добавим отдельно.',en:'A DeloArt digital project. Project visuals will be added to this case later.'},
      url:'https://brand.deloart.ru/', color:'#e7d6cf', ink:'#56392f'
    },
    {
      slug:'x-party', name:'Delo Art / X-Party',
      category:{ru:'Чат-боты · автоматизация',en:'Chatbots · automation'},
      format:{ru:'Страница чат-бота',en:'Chatbot landing page'},
      description:{ru:'Страница чат-бота X-Party. Подробности о задаче и визуальные материалы кейса добавим отдельно.',en:'A landing page for the X-Party chatbot. Project details and visuals will be added to this case later.'},
      url:'https://bot.x-party.ru/', color:'#ded9eb', ink:'#433274'
    },
    {
      slug:'hogo-smart', name:'HOGO Smart',
      category:{ru:'Умные устройства · IoT',en:'Smart devices · IoT'},
      format:{ru:'Действующий сайт',en:'Live website'},
      description:{ru:'Сайт проекта в сфере умных устройств, систем доступа и IoT. Визуальные материалы кейса добавим отдельно.',en:'A website for a smart devices, access systems and IoT project. Project visuals will be added to this case later.'},
      url:'https://hogo-smart.ru/', color:'#d9e6e3', ink:'#244742'
    },
    {
      slug:'a-store', name:'A-Store',
      category:{ru:'E-commerce · электроника',en:'E-commerce · electronics'},
      format:{ru:'Действующий сайт',en:'Live website'},
      description:{ru:'Онлайн-магазин электроники и гаджетов. Визуальные материалы кейса добавим отдельно.',en:'An online store for electronics and gadgets. Project visuals will be added to this case later.'},
      url:'https://a-store63.ru/', color:'#e7e0cf', ink:'#5b4c27'
    },
    {
      slug:'biorav', name:'Biorav',
      category:{ru:'Медицина · центр восточной медицины',en:'Medicine · oriental medicine center'},
      format:{ru:'Действующий сайт',en:'Live website'},
      description:{ru:'Сайт центра восточной медицины. Визуальные материалы кейса добавим отдельно.',en:'A website for an oriental medicine center. Project visuals will be added to this case later.'},
      url:'https://biorav.ru/', color:'#e6dce0', ink:'#4a3139'
    },
    {
      slug:'fitness', name:{ru:'Фитнес-проект',en:'Fitness project'},
      category:{ru:'Фитнес · спорт',en:'Fitness · sports'},
      format:{ru:'Действующий сайт',en:'Live website'},
      description:{ru:'Сайт фитнес-проекта. Визуальные материалы кейса добавим отдельно.',en:'A website for a fitness project. Project visuals will be added to this case later.'},
      url:'https://xn----jtbictd3abeep5frb.xn--p1ai/', color:'#dce5ec', ink:'#29465b'
    }
  ];

  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'ru';
  const tr = value => typeof value === 'string' ? value : value[lang()];
  const label = (ru, en) => lang() === 'ru' ? ru : en;
  const projectHref = project => `project.html?slug=${encodeURIComponent(project.slug)}`;

  function placeholder(project, text) {
    return `<div class="work-placeholder" style="--project-color:${project.color};--project-ink:${project.ink}"><span>${text}</span></div>`;
  }

  function renderGrid() {
    const grid = document.getElementById('work-grid');
    if (!grid) return;
    grid.innerHTML = projects.map((project, index) => {
      const title = tr(project.name);
      const media = project.cover
        ? `<img src="../assets/${project.cover}" alt="${title} — ${tr(project.category)}" loading="lazy">`
        : placeholder(project, title);
      return `<a class="work-card" href="${projectHref(project)}"><div class="work-card-media">${media}</div><span class="work-card-title"><small>${String(index + 1).padStart(2,'0')}</small><strong>${title}</strong><span class="work-card-arrow" aria-hidden="true">↗</span></span></a>`;
    }).join('');
  }

  function renderFeatured() {
    const grid = document.getElementById('home-work-grid');
    if (!grid) return;
    const featured = ['invest-group','deloart'].map(slug => projects.find(project => project.slug === slug)).filter(Boolean);
    grid.innerHTML = featured.map((project, index) => {
      const title = tr(project.name);
      const media = project.cover
        ? `<img src="assets/${project.cover}" alt="${title} — ${tr(project.category)}" loading="lazy">`
        : placeholder(project, title);
      return `<a class="work-card" href="work/project.html?slug=${encodeURIComponent(project.slug)}"><div class="work-card-media">${media}</div><span class="work-card-title"><small>${String(index + 1).padStart(2,'0')}</small><strong>${title}</strong><span class="work-card-arrow" aria-hidden="true">↗</span></span></a>`;
    }).join('');
  }

  function renderDetail() {
    const info = document.getElementById('project-info');
    const gallery = document.getElementById('project-gallery');
    if (!info || !gallery) return;
    const slug = new URLSearchParams(location.search).get('slug');
    let index = projects.findIndex(project => project.slug === slug);
    if (index < 0) index = 0;
    const project = projects[index];
    const name = tr(project.name);
    const next = projects[(index + 1) % projects.length];
    document.title = `${name} — ${label('проект','project')} · Ольга Янкова`;
    info.innerHTML = `<div class="project-index"><span>${String(index + 1).padStart(2,'0')}</span><span>${String(projects.length).padStart(2,'0')}</span></div><h1>${name}</h1><div class="project-meta"><div><small>${label('Направление','Focus')}</small>${tr(project.category)}</div><div><small>${label('Формат','Format')}</small>${tr(project.format)}</div></div><p class="project-description">${tr(project.description)}</p>${project.url ? `<a class="project-visit" href="${project.url}" target="_blank" rel="noopener">${project.visitLabel ? tr(project.visitLabel) : label('Посетить сайт','Visit website')} ↗</a>` : ''}<a class="next-project" href="${projectHref(next)}"><span>${label('Следующий проект','Next project')}</span><strong>${tr(next.name)} →</strong></a>`;

    const slides = project.gallery
      ? project.gallery.map((file, slideIndex) => `<figure class="project-slide"><img src="../assets/${file}" alt="${name} — ${label('экран','screen')} ${slideIndex + 1}" loading="${slideIndex === 0 ? 'eager' : 'lazy'}"></figure>`)
      : [0,1,2].map((_, slideIndex) => `<figure class="project-slide">${placeholder(project, `${label('Материалы проекта','Project visuals')} · 0${slideIndex + 1}`)}</figure>`);
    gallery.innerHTML = slides.join('') + (!project.gallery ? `<p class="project-gallery-note">${label('Визуальные материалы заменим на скриншоты проекта.','These placeholders can be replaced with project screenshots.')}</p>` : '');
  }

  function render() {
    renderGrid();
    renderFeatured();
    renderDetail();
  }

  render();
  document.addEventListener('site:language', render);
})();
