const PROJECTS = {
  myTools: {
    id: "1",
    title: "myTools",
    shortDescription:
      "App that gathers simple tools for your daily calcuations, you can create your own tools.",
    shortDescriptionAr:
      "تطبيق يجمع أدوات بسيطة لحساباتك اليومية، ويمكنك إنشاء ادواتك الخاصة",
    githubURL: "https://github.com/BR19-gh/myTools",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=myTools&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "React Native",
      "Expo",
      "Redux",
      "iOS Development",
      "Tailwind",
      "Javascript",
      "NPM Packages",
    ],
    image: null,
  },
  "online-store-billing-system": {
    id: "2",
    title: "OSBS",
    shortDescription: "Online Store Billing System",
    shortDescriptionAr: "نظام فوترة ومتجر الكتروني",
    githubURL: "https://github.com/BR19-gh/online-store-billing-system",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=online-store-billing-system&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "Bootsrap",
      "Flask",
      "Python",
      "Javascript",
      "HTML",
      "CSS",
      "SQL",
      "Heroku",
      "PostgresSQL",
    ],
    image: null,
  },
  rsd: {
    id: "3",
    title: "RSD",
    shortDescription: "Record students degrees management system.",
    shortDescriptionAr: "نظام لإدارة درجات الطلاب",
    githubURL: "https://github.com/BR19-gh/rsd",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=rsd&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "Bootsrap",
      "Flask",
      "Python",
      "Javascript",
      "HTML",
      "CSS",
      "SQL",
      "Heroku",
      "PostgresSQL",
    ],
    image: null,
  },
  Runman: {
    id: "4",
    title: "Runman",
    shortDescription: "Side-scrolling pixel game.",
    shortDescriptionAr: "لعبة منصات برسوم بكسلية",
    githubURL: "https://github.com/BR19-gh/Runman",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=Runman&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "Bootsrap",
      "Javascript",
      "HTML",
      "CSS",
      "SQL",
      "Heroku",
      "PostgresSQL",
      "Python",
      "Flask",
    ],
    image: null,
  },
  "employeePolls-Udacity": {
    id: "5",
    title: "Employee Polls",
    shortDescription: "Participate and create polls.",
    shortDescriptionAr: "مشاركة وإنشاء استطلاعات",
    githubURL: "https://github.com/BR19-gh/employeePolls-Udacity",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=employeePolls-Udacity&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "Bootsrap-React",
      "React",
      "Redux",
      "Javascript",
      "CSS",
      "react-router",
      "npm",
    ],
    image: null,
  },
  myportfolioNew: {
    id: "6",
    title: "My Portfolio",
    shortDescription: "This portfolio website.",
    shortDescriptionAr: "هذا الموقع الشخصي",
    githubURL: "https://github.com/BR19-gh/myportfolioNew",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=myportfolioNew&show_icons=true&theme=catppuccin_mocha",
    skills: [
      "Bootsrap-React",
      "React",
      "Redux",
      "Javascript",
      "CSS",
      "react-router",
      "npm",
      "netlify",
    ],
    image: null,
  },
  moreInGithub: {
    id: "7",
    title: "Github",
    shortDescription: "More in Github.",
    shortDescriptionAr: "المزيد على Github.",
    githubURL: "https://github.com/BR19-gh",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=BR19-gh&show_icons=true&theme=catppuccin_mocha",
    skills: [],
    image: null,
  },
};

const ACCOUNTS = {
  github: {
    name: "github",
    icon: "fab fa-github",
    link: "https://github.com/BR19-gh",
  },
  linkedin: {
    name: "linkedin",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/ibrahim-alkhowaiter-430b24203/",
  },
  email: {
    name: "email",
    icon: "fas fa-envelope",
    link: "mailto: Ibrahim-abdalaziz@hotmail.com",
  },
  whatsapp: {
    name: "whatsapp",
    icon: "fab fa-whatsapp",
    link: "https://wa.me/966500885115",
  },
};

export function _getProjects() {
  return new Promise((resolve) => {
    resolve({ ...PROJECTS });
  });
}

export function _getAccounts() {
  return new Promise((resolve) => {
    resolve({ ...ACCOUNTS });
  });
}
