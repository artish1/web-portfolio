import imgPortfolio from "../img/project_portfolio.jpg";
import imgTrash from "../img/project_trash.jpg";
import imgGrace from "../img/project_grace.jpg";
import imgWord from "../img/project_word.jpg";
import img2 from "../img/image2.jpg";

const examplePics = [imgTrash, imgPortfolio, imgGrace, imgWord];

const projectData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website (This website).",
    image: imgPortfolio,
    webUrl: "https://www.markartishuk.com",
    codeUrl: "https://www.github.com",
    pictures: examplePics,
    stack: ["React", "Styled-Components", "Basic HTML/Javascript/CSS"],
  },
  {
    title: "The Trash Panda",
    description:
      "A PWA (Progressive Web App) that helps users know how and where to recycle through either category selection or image recognition.",
    image: imgTrash,
    webUrl: "https://www.thetrashpanda.com",
    codeUrl: "https://www.github.com",
    pictures: examplePics,
    stack: [
      "React",
      "Styled-Components",
      "Nodejs",
      "GraphQL",
      "Apollo",
      "SQL",
      "Jest",
    ],
  },
  {
    title: "GTCAG",
    description:
      "An informative church website that also handles donations, contact forms, event management, and more.",
    image: imgGrace,
    webUrl: "https://www.google.com",
    codeUrl: "https://www.github.com",
    pictures: examplePics,
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
    pictures: examplePics,
    stack: ["React", "Material-UI", "Basic HTML/CSS/Javascript"],
  },
];

export default projectData;
