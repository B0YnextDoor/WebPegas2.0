export const TG: string[] = [
  "Готов откликнуться на данную вакансию?",
  "Напиши нам в ",
  "Telegram:",
];

export const TGLst: string[] = [
  "имя;",
  "вакансию, на которую хочешь пройти собеседование;",
  "время, которое готов уделять работе;",
];

export const Affrods: string[] = [
  "удаленная работа;",
  "возможность профессионального обучения и повышения квалификации;",
  "своевременная выплата заработной платы, бонусы за качественную работу;",
];

type VacType = {
  name: string;
  tasks: string[];
  exp: string[];
  price: string;
};

export const VacList: VacType[] = [
  // {
  //   name: "React Native разработка",
  //   tasks: [
  //     "участие в разработке клиентских приложений с использованием React Native;",
  //     "планирование архитектуры и разработка приложений;",
  //     "code review;",
  //     "написание тестов;",
  //   ],
  //   exp: [
  //     "опыт написания приложений с нуля;",
  //     "опыт коммерческой разработки на React Native",
  //     "знание стека redux/redux-saga, saga;",
  //     "хорошее понимание JavaScript (TypeScript);",
  //     "опыт работы с UI;",
  //     "желателен опыт нативной разработки Android/iOS;",
  //   ],
  //   price: "120 000 ₽",
  // },
  // {
  //   name: "Flutter разработка",
  //   tasks: [
  //     "разрабатывать приложения с 0 и дорабатывать существующие приложения на Флаттер(iOS/Android);",
  //     "делать код ревью;",
  //   ],
  //   exp: [
  //     "коммерческий опыт работы в качестве разработчика мобильных приложения от 2 лет, в том числе опыт работы на Flutter от 1 года;",
  //     "знание принципов ООП, SOLID и шаблонов проектирования;",
  //     "понимание HTTP, REST, JSON, WebSocket;",
  //     "понимание полного жизненного цикла мобильной разработки — включая автоматизированное тестирование и сборку;",
  //     "наличие готовых проектов, которые доступны в App Store/Google Play;",
  //     "умение самостоятельно решать задачи, оценивать и декомпозировать;",
  //     "умение работать с системой контроля версий Git;",
  //     "знание английского языка на уровне чтения технической документации;",
  //     "знание алгоритмов и структур данных;",
  //     "опыт работы с Figma;",
  //     "знание и понимание различных архитектурных паттернов (Provider/Bloc/etc.);",
  //   ],
  //   price: "120 000 ₽",
  // },
  // {
  //   name: "Python Backend разработка",
  //   tasks: [
  //     "реализация задач среднего уровня сложности по разработки;",
  //     "постоянный рост квалификации;",
  //     "cодействие команде;",
  //     "оптимизация кода;",
  //     "участие в обзорах кода.",
  //   ],
  //   exp: [
  //     "опыт работы над коммерческим или опен-сорс проектом;",
  //     "опыт работы с mongodb;",
  //     "опыт работы с rest api;",
  //     "опыт работы с bash, linux;",
  //     "опыт работы с Git;",
  //   ],
  //   price: "100 000 ₽",
  // },
  // {
  //   name: "Frontend-разработка на React",
  //   tasks: [
  //     "разработка нового функционала;",
  //     "поддержка существующих решений;",
  //     "оптимизация быстродействия, отзывчивости мобильного и веб приложений;",
  //   ],
  //   exp: [
  //     "опыт разработки на React;",
  //     "хорошие знания Javascript, Typescript, React и его экосистемы;",
  //     "отличное владение CSS, HTML, умение разрабатывать интерфейсы без использования CSS фреймворков;",
  //     "опыт работы с различными API, понимание устройства HTTP, WS, REST протоколов;",
  //     "готовность разрабатывать мобильные приложения на React Native;",
  //     "английский:A2+ (на уровне чтения технической документации);",
  //   ],
  //   price: "100 000 ₽",
  // },
  {
    name: "ML инженер(Python)",
    tasks: [
      "Image classification, object detection, semantic segmentation, в том числе подходы Zero-Shot, One-Shot и Few-Shot Learning Image similarity search;",
      "OCR (Распознавание текста с изображений);",
      "Pose estimation;",
      "классические алгоритмы компьютерного зрения;",
    ],
    exp: [
      "опыт работы или практических проектов в области машинного обучения или опыт участия в прикладных исследованиях с математическим моделированием;",
      "глубокое понимание математических оснований машинного обучения и анализа данных;",
      "знание метрик оценки качества моделей;",
      "знание базовых структур данных и алгоритмов, способность оценивать скорость работы алгоритмов;",
      "опыт работы с реляционными базами данными;",
      "Python, Numpy, Pandas, Scikit-learn, XGBoost/CatBoost, PyTorch, HuggingFace Transformers, SQL, Bash;",
      "понимание основ сетевых технологий;",
      "умение конвертировать модели в ONNX и TensorRT;",
      "опыт работы с Nvidia Triton;",
      "знание MLFlow и/или ClearML;",
      "знание CI/CD;",
      "наличие проектов на GitHub или соревнований на Kaggle, на которые можно посмотреть;",
      "опыт реализации подходов из научных статей;",
      "проактивность, готовность вникать в задачу;",
      "качественный чистый код;",
    ],
    price: "120 000 ₽",
  },
  // {
  //   name: "SEO-специалист",
  //   tasks: [
  //     "аудит сайта с целью поиска и решения текущих проблем;",
  //     "анализировать конкурентов, искать новые точки роста, предлагать идеи по развитию ресурса и бизнеса;",
  //     "участвовать в разработке стратегии продвижения и воплощении её в жизнь совместно с другими специалистами;",
  //     "собирать семантическое ядро, прорабатывать структуру сайта;",
  //     "анализировать и работать с контентом (коммерческие страницы + инфораздел);",
  //     "составлять заголовки и мета-описания;",
  //     "заниматься решением технических проблем;",
  //     "работать с аналитикой сайта (Яндекс Метрика, Google Analytics, E-commerce);",
  //     "работать с размещением информации на внешних площадках;",
  //     "работать с каталогом на сайте;",
  //   ],
  //   exp: [
  //     "понимание алгоритмов работы поисковых систем и последних тенденций (обновлений);",
  //     "умение работать с программами и сервисами по сбору СЯ, Яндекс Метрика, Яндекс Вебмастером и другими сервисами по сбору статистики (serpstat, ahrefs, topvisor и т.п);",
  //     "умение составлять ТЗ для программиста и копирайтера;",
  //     "грамотная устная и письменная речь;",
  //     "способность самостоятельно решать задачи и принимать решения;",
  //   ],
  //   price: "120 000 ₽",
  // },
];
