import React from "react";
import { AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillEye } from 'react-icons/ai'
import { GrLinkPrevious,GrLinkNext } from 'react-icons/gr'
import  { useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from "react-bootstrap";

function AllProjects() {

 const projects = [
  {
   index:1,
    title: "Who Wants To be A Millionaire",
    url: "https://whowantstobeamillionaireabass.netlify.app",
    image: "projects/wwtbam.png",
    description: "I designed and built a fully functional Who Wants to Be a Millionaire game clone using React, featuring authentic sound effects to enhance the user experience.",
  },
  {
    index:2,
    title: "PastQuest",
    url: "https://pastquestabass.netlify.app",
    image: "projects/pastquest.png",
    description: "I built a quiz app with randomized questions on each restart, providing a dynamic experience. After finishing the quiz, users receive a detailed score breakdown and corrections to review their performance and learn from their mistakes.",
  },
  {
    index:3,
    title: "A budget App",
    url: "https://mybudgetappabass.netlify.app",
    image: "projects/budget.png",
    description: "I developed a budget management application with an integrated pie chart, enabling users to calculate their budget and expenses easily. The intuitive visualization allows for a quick assessment of whether they are within or exceeding their budget.",
  },
  {
    index:4,
    title: "Portfolio",
    url: "https://lanreabassportfolio.netlify.app",
    image: "projects/preport.png",
    description: "I crafted a dynamic portfolio website using React, enhanced with captivating animations for an engaging user experience.",
  },
  {
    title: "My Portfolio",
    url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
    image: "projects/portfolio.png",
    description: "I designed my current portfolio website inspired by Wuwa Sensei, incorporating Three.js for 3D elements, animations, and Framer Motion to create an immersive and visually captivating experience.",
  },
  {
    index:5,
    title: "Hangman Game",
    url: "https://hangmanabass.netlify.app",
    image: "projects/hangman.png",
    description: "A Hangman game using React and TypeScript, combining dynamic React features with TypeScript's code robustness. ",
  },
  {
    index:6,
    title: "To-Do List",
    url: "https://todoabass.netlify.app",
    image: "projects/todo.png",
    description: "I created a user-friendly To-Do List app using React, enabling easy task management. It offers task creation, completion, and removal, enhancing productivity and organization.",
  },
  {
    index:7,
    title: "Higher Or Lower Game",
    url: "https://higherorlowerabass.netlify.app",
    image: "projects/guess.png",
    description: "I developed a number guessing game where users have 5 attempts to guess a randomly generated number between 1 and 100. Success occurs if they guess correctly within the allotted tries, while failure results from an incorrect guess.",
  },
  
  {
    index:8,
    title: "Text to Speech Converter",
    url: "https://text2speechabass.netlify.app",
    image: "projects/texttospeech.png",
    description: "I designed a text-to-speech converter using the React-Speech API, allowing users to input text, choose from available voices, and convert it into speech output.",
  },
];
const [currentProject, setCurrentProject] = useState(0);

const nextProject =() =>{
    setCurrentProject((currentProject + 1) % prject.length)
}
 
const previousProject =() =>{
    setCurrentProject((currentProject - 1) % prject.length)
}
const [index, setIndex] = useState(0);

// const handleSelect = (selectedIndex, e) => {
//   setIndex(selectedIndex);
// };


const onNextClick = () => {
  if (index === 8) {
    setIndex(0);
  } else if (index === 0 || index > 0) setIndex(index + 1);

  
};
const onPrevClick = () => {
  if (index === 0) {
    setIndex(8); // Reset index to the last item (assuming you have 10 items)
  } else {
    setIndex(index - 1);
  }
};
const [activeIndex, setActiveIndex] = useState(0);
const handleSelect = (selectedIndex) => {
  setActiveIndex(selectedIndex);
};



const [position, setPosition] = useState(0);

  const moveRight = () => {
    if (position < (projects.length - 1) * 400) {
      setPosition(position + 400);
    }
  };
   const moveLeft = () => {
    if (position > -1400) {
      setPosition(position - 400);
    }
  };
 
   
    return ( 
        <div className="works-section wrapper">
        <div className="title">Projects</div>
       
        <p className="text">My Projects </p>
        <span className="description">
          Below are a few of my projects
        </span>
        <ul className="cards" style={{
          
          transition: 'transform 0.3s ease',
          transform: `translateX(-${position}px)`,
        }}>
        <Container>
            {projects.map(project=>(
         <Row><Col>
          <div className="card-container" >
            <li key={project.index} className=" projectcards projectcard-1">
               <img src={project.image} />
                <h6 className="header">{project.title}</h6>
                <p className="project-description">{project.description}</p>
                <div className="git-view">
                    <a href="#" target="_blank"><AiFillGithub/></a>
                    <a href="#" target="_blank"><AiFillEye/></a>
                </div>
             </li> </div> 
             </Col></Row>
              ))}
             

          
            
             </Container>
        </ul>
      
           <div className="buttons">
                <button className="previous"  onClick={moveLeft}>
                    <GrLinkPrevious/>
                </button>
                <button className="next"  onClick={moveRight}>
                    <GrLinkNext/>

                </button>
             
             </div>
    </div>
     );

}

export default AllProjects;