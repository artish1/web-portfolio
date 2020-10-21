// Project artifact images
import imgTrash from "../img/project_trash.jpg";
import imgGrace from "../img/project_grace.jpg";
import imgYpp from "../img/project_ypp-sim.jpg";
import imgWord from "../img/project_word.jpg";
// Trash panda
import trash_1 from "../img/trash_panda/trash_1.jpg";
import trash_2 from "../img/trash_panda/trash_2.jpg";
import trash_3 from "../img/trash_panda/trash_3.jpg";
import trash_4 from "../img/trash_panda/trash_4.jpg";

//Word Definitions
import word_1 from "../img/word_definitions/word_1.jpg";
import word_2 from "../img/word_definitions/word_2.jpg";

//Grace website
import grace_1 from "../img/grace/grace_1.jpg";
import grace_2 from "../img/grace/grace_2.jpg";
import grace_3 from "../img/grace/grace_3.jpg";
import grace_4 from "../img/grace/grace_4.jpg";
import grace_5 from "../img/grace/grace_5.jpg";
import grace_6 from "../img/grace/grace_6.jpg";

// Kendra's portfolio
import kendra1 from "../img/kendra_portfolio/kendra1.jpg";
import kendra2 from "../img/kendra_portfolio/kendra2.jpg";
import kendra3 from "../img/kendra_portfolio/kendra3.jpg";
import kendra4 from "../img/kendra_portfolio/kendra4.jpg";

// Ypp-Sim
import yppsim2 from "../img/ypp-sim/ypp-sim2.jpg";
import yppsim3 from "../img/ypp-sim/ypp-sim3.jpg";
import yppsim4 from "../img/ypp-sim/ypp-sim4.jpg";
import yppsim5 from "../img/ypp-sim/ypp-sim5.jpg";

const projectData = [
  {
    title: "The Trash Panda",
    description:
      "A PWA (Progressive Web App) that helps users know how and where to recycle through either category selection or image recognition.",
    image: imgTrash,
    webUrl: "https://www.thetrashpanda.com",
    codeUrl: "https://github.com/Lambda-School-Labs/trashpanda-fe",
    pictures: [trash_1, trash_2, trash_3, trash_4, imgTrash],
    stack: [
      "React",
      "Styled-Components",
      "Node.js",
      "GraphQL",
      "Apollo",
      "SQL",
      "Jest",
    ],
  },
  {
    title: "YPP-SIM",
    description:
      "A Puzzle Pirates blockade simulator puzzle game that has multiplayer features.",
    image: imgYpp,
    webUrl: "https://www.yppsim.com/",
    codeUrl: "https://github.com/YPP-Sim",
    pictures: [imgYpp, yppsim2, yppsim3, yppsim4, yppsim5],
    stack: [
      "React",
      "Styled-components",
      "PIXI.js",
      "Socket.io/WebSockets",
      "Node.js",
      "Docker",
      "Jest",
      "Redis",
      "MongoDB",
      "Json Web Token (JWT)",
      "Express",
      "Nginx",
    ],
  },
  {
    title: "GTCAG",
    description:
      "An informative website that also handles donations, contact forms, event management, and more.",
    image: imgGrace,
    webUrl: "https://hardcore-beaver-0c3602.netlify.app/",
    codeUrl: "https://github.com/GTCAG",
    pictures: [grace_1, grace_2, grace_3, grace_4, grace_5, grace_6],
    stack: [
      "React",
      "Material-UI",
      "Styled-Components",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "Word Definitions",
    description:
      "A simple word look-up application that gives definitions, image references, and more.",
    image: imgWord,
    webUrl: "https://react-redux-app-elnq1bwcl.now.sh/",
    codeUrl: "https://github.com/artish1/React-Redux-App/tree/mark-artishuk",
    pictures: [imgWord, word_1, word_2],
    stack: ["React", "Material-UI", "Basic HTML/CSS/Javascript"],
  },
  {
    title: "Kendra Mckernan Portfolio",
    description:
      "A portfolio website for a UI/UX developer by the name of Kendra Mckernan",
    image: kendra1,
    webUrl: "https://www.kendramckernan.com/",
    codeUrl: "https://github.com/artish1/Kendra-portfolio",
    pictures: [kendra1, kendra2, kendra3, kendra4],
    stack: ["HTML", "CSS", "Javascript", "React", "Styled-components"],
  },
];

export default projectData;
