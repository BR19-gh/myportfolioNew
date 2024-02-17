const PROJECTS = {
  "online-store-billing-system": {
    id: "1",
    title: "OSBS",
    shortDescription: "Online Store Billing System",
    githubURL: "https://github.com/BR19-gh/online-store-billing-system",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=online-store-billing-system&show_icons=true&theme=catppuccin_mocha",
    image: null,
  },
  rsd: {
    id: "2",
    title: "RSD",
    shortDescription: "Record students degrees management system.",
    githubURL: "https://github.com/BR19-gh/rsd",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=rsd&show_icons=true&theme=catppuccin_mocha",
    image: null,
  },
  Runman: {
    id: "3",
    title: "Runman",
    shortDescription: "Side-scrolling pixel game.",
    githubURL: "https://github.com/BR19-gh/Runman",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=Runman&show_icons=true&theme=catppuccin_mocha",

    image: null,
  },
  "employeePolls-Udacity": {
    id: "4",
    title: "Employee Polls",
    shortDescription: "Participate and create polls.",
    githubURL: "https://github.com/BR19-gh/employeePolls-Udacity",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=employeePolls-Udacity&show_icons=true&theme=catppuccin_mocha",

    image: null,
  },
  myportfolioNew: {
    id: "5",
    title: "My Portfolio",
    shortDescription: "This portfolio website.",
    githubURL: "https://github.com/BR19-gh/myportfolioNew",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=myportfolioNew&show_icons=true&theme=catppuccin_mocha",

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
