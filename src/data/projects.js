// Project artifact images
import imgTrash from "../img/project_trash.jpg";
import imgGrace from "../img/project_grace.jpg";
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
import grace_7 from "../img/grace/grace_7.jpg";

const projectData = [
  {
    title: "The Trash Panda",
    description:
      "A PWA (Progressive Web App) that helps users know how and where to recycle through either category selection or image recognition.",
    image: imgTrash,
    webUrl: "https://www.thetrashpanda.com",
    codeUrl: "https://www.github.com",
    pictures: [trash_1, trash_2, trash_3, trash_4, imgTrash],
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
    pictures: [grace_1, grace_2, grace_3, grace_4, grace_5, grace_6, grace_7],
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
];

export default projectData;
