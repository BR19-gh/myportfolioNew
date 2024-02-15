const projects = {
  "online-store-billing-system": {
    id: "1",
    title: "OSBS",
    githubURL: "https://github.com/BR19-gh/online-store-billing-system",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=online-store-billing-system&show_icons=true&theme=algolia",
    image: null,
  },
  rsd: {
    id: "2",
    title: "RSD",
    githubURL: "https://github.com/BR19-gh/rsd",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=rsd&show_icons=true&theme=algolia",
    image: null,
  },
  Runman: {
    id: "3",
    title: "Runman",
    githubURL: "https://github.com/BR19-gh/Runman",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=Runman&show_icons=true&theme=algolia",

    image: null,
  },
  "employeePolls-Udacity": {
    id: "4",
    title: "Employee Polls",
    githubURL: "https://github.com/BR19-gh/employeePolls-Udacity",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=employeePolls-Udacity&show_icons=true&theme=algolia",

    image: null,
  },
  myportfolioNew: {
    id: "5",
    title: "My Portfolio",
    githubURL: "https://github.com/BR19-gh/myportfolioNew",
    githubImg:
      "https://github-readme-stats.vercel.app/api/pin/?username=BR19-gh&repo=myportfolioNew&show_icons=true&theme=algolia",

    image: null,
  },
};

export function _getProjects() {
  return new Promise((resolve) => {
    resolve({ ...projects });
  });
}
