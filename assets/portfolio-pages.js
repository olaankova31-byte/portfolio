(() => {
  const langButtons = [...document.querySelectorAll('.page-lang button')];
  let lang = 'ru';
  try { lang = localStorage.getItem('lang') === 'en' ? 'en' : 'ru'; } catch (_) {}
  const copy = {
    common: {
      small: {ru:'Малый бизнес',en:'Small business'},
      realty: {ru:'Недвижимость',en:'Real estate'},
      work: {ru:'Работы',en:'Work'},
      team: {ru:'Команда',en:'Team'},
      directions: {ru:'Направления',en:'Focus'},
      about: {ru:'Обо мне',en:'About'},
      contact: {ru:'Контакты',en:'Contact'},
      home: {ru:'Ольга Янкова',en:'Olga Yankova'},
      discuss: {ru:'Обсудить проект',en:'Discuss a project'},
      send: {ru:'Написать Ольге',en:'Contact Olga'},
      seeWork: {ru:'Смотреть работы',en:'View work'},
      teamLink: {ru:'Познакомиться с командой',en:'Meet the team'},
      workLink: {ru:'Все проекты',en:'All work'},
      step1: {ru:'Задача',en:'The brief'}, step2: {ru:'Структура',en:'Structure'}, step3: {ru:'Дизайн',en:'Design'}, step4: {ru:'Запуск',en:'Launch'},
      step1d: {ru:'Уточняем аудиторию, предложение и цель проекта.',en:'We clarify the audience, offer and project goal.'},
      step2d: {ru:'Собираем страницы, материалы и путь клиента.',en:'We map pages, content and the customer journey.'},
      step3d: {ru:'Создаём визуальную систему и адаптивный макет.',en:'We create the visual system and responsive layouts.'},
      step4d: {ru:'Готовим сайт к публикации и проверяем обращения.',en:'We prepare the site for launch and track inquiries.'},
      contactTitle: {ru:'Есть проект?',en:'Have a project?'},
      contactText: {ru:'Расскажите, что нужно показать или запустить. Предложу состав работ и следующий шаг.',en:'Tell me what you need to show or launch. I will suggest a scope and next step.'},
      processHead: {ru:'Как идёт работа',en:'How we work'},
      samara: {ru:'Самара · работаю по всей России',en:'Samara · working across Russia'},
      byBrief: {ru:'Состав команды зависит от задачи проекта.',en:'The project team is built around the brief.'}
    },
    small: {
      eyebrow:{ru:'Сайты и цифровая подача',en:'Websites and digital design'},
      title:{ru:'Покажите, за что вас выбирают.',en:'Show customers why they choose you.'},
      lead:{ru:'Соберу сайт и визуальную подачу, которые просто объясняют ваши услуги. Контент, видео и автоматизацию подключим под задачу.',en:'I bring together a website and visual direction that make your services easy to understand. We can add content, video or automation when needed.'},
      painHead:{ru:'Когда клиенту сложно разобраться',en:'When customers struggle to understand'},
      painIntro:{ru:'Сайт и материалы должны отвечать на вопросы до первого звонка.',en:'Your site and content should answer questions before the first call.'},
      pain1:{ru:'Что именно вы предлагаете?',en:'What exactly do you offer?'},
      pain2:{ru:'Чем вы отличаетесь от похожих компаний?',en:'How are you different from similar businesses?'},
      pain3:{ru:'Как сделать следующий шаг и связаться?',en:'How can a customer take the next step?'},
      offerHead:{ru:'Чем могу помочь',en:'How I can help'},
      offerIntro:{ru:'Начинаем с сайта и подключаем только те материалы и услуги, которые нужны проекту.',en:'We start with the website and add only the content and services the project needs.'},
      offer1:{ru:'Сайт и структура',en:'Website and structure'},
      offer1d:{ru:'Структура страниц, дизайн и адаптивная сборка для понятной презентации услуг.',en:'Page structure, design and responsive build to present your services clearly.'},
      offer2:{ru:'Визуальная подача',en:'Visual identity'},
      offer2d:{ru:'Логотип, айдентика и материалы для сайта и социальных сетей.',en:'Logo, identity and visual materials for your website and social channels.'},
      offer3:{ru:'Контент и развитие',en:'Content and growth'},
      offer3d:{ru:'SMM, публикации и видеомонтаж можно подключить с партнёрами. Автоматизацию сначала разбираем и тестируем на отдельном процессе.',en:'SMM, publishing and video editing can be added with partners. Automation starts with reviewing and testing one process.'},
      processHead:{ru:'Как идёт работа',en:'How we work'},
      teamHead:{ru:'Дополнительные специалисты — по задаче',en:'Specialists join when the project needs them'},
      teamText:{ru:'Для видео и других задач подключаю коллег из команды. Вы обсуждаете проект со мной, а я координирую работу.',en:'I bring in colleagues for video and other specialist tasks. You discuss the project with me, and I coordinate the work.'}
    },
    realty: {
      eyebrow:{ru:'Недвижимость и строительство',en:'Real estate and construction'},
      title:{ru:'Покажите будущий дом до стройки.',en:'Show the future home before it is built.'},
      lead:{ru:'Сайт проекта, 3D-визуализация и видео помогают покупателю заранее понять планировку, среду и особенности предложения.',en:'A project website, 3D visualisation and video help buyers understand the layout, setting and offer before they visit.'},
      offerHead:{ru:'Собираем презентацию проекта',en:'Build a clear project presentation'},
      offerIntro:{ru:'Подбираем состав работ под объект: от сайта с планировками до 3D-визуализации и видео.',en:'We choose the right scope for the property, from a website with floor plans to 3D visualisation and video.'},
      offer1:{ru:'Сайт объекта или компании',en:'Property or company website'},
      offer1d:{ru:'Планировки, преимущества, расположение, этапы строительства и удобный способ оставить заявку.',en:'Floor plans, benefits, location, construction stages and a clear way to send an inquiry.'},
      offer2:{ru:'3D-визуализация',en:'3D visualisation'},
      offer2d:{ru:'Экстерьер, интерьер или территория помогают представить будущий результат до завершения строительства.',en:'Exterior, interior and site visuals help buyers picture the finished result before construction is complete.'},
      offer3:{ru:'Видео и материалы для продвижения',en:'Video and marketing materials'},
      offer3d:{ru:'Видео и контент для презентации проекта. SMM и обработку заявок подключаем по отдельному запросу.',en:'Video and content to present the project. SMM and inquiry handling can be added when needed.'},
      caseTag:{ru:'Избранный кейс · недвижимость',en:'Featured case · real estate'},
      caseHead:{ru:'Сайт агентства недвижимости в Самаре',en:'Real estate agency website in Samara'},
      caseText:{ru:'Invest Group: жилая и коммерческая недвижимость, ипотечный калькулятор, информация о компании и форма заявки.',en:'Invest Group: residential and commercial property, mortgage calculator, company information and an inquiry form.'},
      caseLink:{ru:'Посмотреть полный кейс',en:'View the full case'},
      teamHead:{ru:'Визуализацию и видео подключаем командой',en:'3D and video are handled by the team'},
      teamText:{ru:'Дизайн сайта веду я. Для 3D-визуализации и видеомонтажа можно подключить профильных специалистов.',en:'I lead the website design. Specialist partners can join for 3D visualisation and video editing.'}
    },
    team: {
      eyebrow:{ru:'Команда проекта',en:'Project team'},
      title:{ru:'Нужные специалисты — под задачу.',en:'The right specialists for the brief.'},
      lead:{ru:'Я веду сайт и дизайн. Для 3D-визуализации и видеомонтажа подключаю коллег из команды TRI-PIX.',en:'I lead the website and design. For 3D visualisation and video editing, I work with colleagues from TRI-PIX.'},
      teamHead:{ru:'Кто может подключиться',en:'Who can join'},
      olgaRole:{ru:'Веб-дизайн · проектная координация',en:'Web design · project coordination'},
      olgaText:{ru:'Структура сайта, UX/UI-дизайн и визуальная подача проекта.',en:'Website structure, UX/UI design and visual direction.'},
      dmitryRole:{ru:'3D-визуализация · сопровождение клиентов',en:'3D visualisation · client support'},
      dmitryText:{ru:'Архитектурная, интерьерная и предметная визуализация.',en:'Architectural, interior and product visualisation.'},
      valentinRole:{ru:'Видеомонтаж',en:'Video editing'},
      valentinText:{ru:'Монтаж видео для презентации проектов и контента.',en:'Video editing for project presentations and content.'},
      teamNote:{ru:'Состав команды зависит от задачи. На старте согласуем, кто участвует, за какую часть отвечает и что получает клиент.',en:'The team depends on the brief. At the start, we agree who is involved, what each person owns and what the client receives.'},
      teamWork:{ru:'Смотреть примеры TRI-PIX',en:'See TRI-PIX work'}
    },
    work: {
      eyebrow:{ru:'Избранные проекты',en:'Selected projects'},
      title:{ru:'Работы',en:'Work'},
      lead:{ru:'Сайты, digital-дизайн и визуальная подача для разных задач бизнеса.',en:'Websites, digital design and visual direction for different business needs.'},
      invest:{ru:'Недвижимость и строительство',en:'Real estate and construction'},
      digital:{ru:'Малый бизнес и digital',en:'Small business and digital'},
      identity:{ru:'Логотипы и айдентика',en:'Logos and identity'},
      investDesc:{ru:'Сайт агентства недвижимости в Самаре. В проекте — жилая и коммерческая недвижимость, ипотечный калькулятор, кейсы и форма заявки.',en:'A real estate agency website in Samara, with residential and commercial property, a mortgage calculator, case studies and an inquiry form.'},
      investRole:{ru:'В портфолио: структура и дизайн сайта, страницы и мобильные макеты.',en:'Portfolio contribution: site structure and design, page layouts and mobile screens.'},
      digital:{ru:'Малый бизнес и digital',en:'Small business and digital'},
      caseLink:{ru:'Посмотреть полный кейс',en:'View the full case'},
      concept:{ru:'Дизайн-концепт в Figma',en:'Figma design concept'},
      live:{ru:'Действующий сайт',en:'Live website'},
      webProject:{ru:'Веб-дизайн / digital-проект',en:'Web design / digital project'},
      botProject:{ru:'Чат-бот / автоматизация',en:'Chatbot / automation'},
      logosHead:{ru:'Логотипы и айдентика',en:'Logos and identity'},
      logosText:{ru:'Подборка знаков и логотипов в Figma.',en:'A selection of marks and logos in Figma.'},
      logosLink:{ru:'Открыть Figma',en:'Open Figma'},
      fitness:{ru:'Фитнес-проект',en:'Fitness project'}
    }
  };

  function setLanguage(value) {
    const active = value === 'en' ? 'en' : 'ru';
    try { localStorage.setItem('lang', active); } catch (_) {}
    document.documentElement.lang = active;
    document.querySelectorAll('[data-copy]').forEach(el => {
      const group = copy[document.body.dataset.page] || {};
      const item = group[el.dataset.copy] || copy.common[el.dataset.copy];
      if (item && item[active]) el.textContent = item[active];
    });
    langButtons.forEach(button => button.setAttribute('aria-pressed', button.dataset.l === active ? 'true' : 'false'));
    const title = document.body.getAttribute(`data-title-${active}`);
    if (title) document.title = title;
    document.dispatchEvent(new CustomEvent('site:language', {detail: active}));
  }

  langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.l)));
  const menu = document.querySelector('.page-menu');
  const nav = document.querySelector('.page-nav');
  if (menu && nav) menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Закрыть' : 'Меню';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  setLanguage(lang);
})();
