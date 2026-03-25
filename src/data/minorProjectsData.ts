export interface MinorProject {
  title: string;
  video?: string;
  image?: string;
  gitLink: string;
  category: string;
}

export const minorProjectsData: MinorProject[] = [
  {
    title: "Alumni Hub",
    video: "/images/Project images/Alumni-Hub .mp4",
    gitLink: "https://github.com/dhruvKuchekar123/Alumni-Hub",
    category: "Full-stack Web App"
  },
  {
    title: "Calculator",
    image: "/images/Project images/calculator.png",
    gitLink: "https://github.com/dhruvKuchekar123/CODSOFT/tree/main/Calculator",
    category: "Utility Web App"
  },
  {
    title: "Tribute Page",
    image: "/images/Project images/Tribute page.png",
    gitLink: "https://github.com/dhruvKuchekar123/CODSOFT/tree/main/Tribute%20Page",
    category: "Static Web Page"
  },
  {
    title: "Responsive Landing Page",
    image: "/images/Project images/Responsive landing page.png",
    gitLink: "https://github.com/dhruvKuchekar123/Prodigy-Infotech/tree/main/Responsive%20landing%20page",
    category: "Front-end Design"
  },
  {
    title: "Stopwatch Web Application",
    image: "/images/Project images/stopwatch.png",
    gitLink: "https://github.com/dhruvKuchekar123/Prodigy-Infotech/tree/main/Stopwatch%20web%20Application",
    category: "Utility Web App"
  },
  {
    title: "Tic-Tac-Toe Game",
    image: "/images/Project images/Tic-Tac-Toe.png",
    gitLink: "https://github.com/dhruvKuchekar123/Prodigy-Infotech/tree/main/Tic-Tac-Toe",
    category: "Game Development"
  }
];
