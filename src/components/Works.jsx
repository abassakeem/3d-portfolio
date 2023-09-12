import React from "react";
import { AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillEye } from 'react-icons/ai'
import { GrLinkPrevious,GrLinkNext } from 'react-icons/gr'
import { FcNext,FcPrevious } from 'react-icons/fc'
import  { useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';

function Works() {

 const projects = [
   {
    index:1,
    title: "PastQuest",
    url: "https://pastquestabass.netlify.app",
    image: "projects/pastquest.png",
    git: "https://github.com/abassakeem/PastQuest",
    description: "I built a quiz app with randomized questions on each restart, providing a dynamic experience. After finishing the quiz, users receive a detailed score breakdown and corrections to review their performance and learn from their mistakes.",
  },
   {
    index:9,
    title: "PastQuest",
    url: "https://appleabass.netlify.app",
    image: "projects/pastquest.png",
    git: "https://github.com/apple-landing-page/PastQuest",
    description: "I built a 3d apple website clone.",
  },
  {
   index:2,
    title: "Who Wants To be A Millionaire",
    url: "https://whowantstobeamillionaireabass.netlify.app",
    image: "projects/wwtbam.png",
    git: "https://github.com/abassakeem/who-wants-to-be-a-millionaire",
    description: "I designed and built a fully functional Who Wants to Be a Millionaire game clone using React, featuring authentic sound effects to enhance the user experience.",
  },
 
  {
    index:3,
    title: "A budget App",
    url: "https://mybudgetappabass.netlify.app",
    image: "projects/budget.png",
    git: "https://github.com/abassakeem/budget-tracker",
    description: "I developed a budget management application with an integrated pie chart, enabling users to calculate their budget and expenses easily. The intuitive visualization allows for a quick assessment of whether they are within or exceeding their budget.",
  },
  
  {
    index:4,
    title: "My Portfolio",
    url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
    image: "projects/portfolio.png",
    git: "https://github.com/abassakeem/wuwaabassportfolio",
    description: "I designed a portfolio website inspired by Wuwa Sensei, incorporating Three.js for 3D elements, animations, and Framer Motion to create an immersive and visually captivating experience.",
  },
  {
    index:5,
    title: "Hangman Game",
    url: "https://hangmanabass.netlify.app",
    image: "projects/hangman.png",
    git: "https://github.com/abassakeem/hangman",
    description: "A Hangman game using React and TypeScript, combining dynamic React features with TypeScript's code robustness. ",
  },
  {
    index:6,
    title: "To-Do List",
    url: "https://todoabass.netlify.app",
    image: "projects/todo.png",
    git: "https://github.com/abassakeem/todo-app",
    description: "I created a user-friendly To-Do List app using React, enabling easy task management. It offers task creation, completion, and removal, enhancing productivity and organization.",
  },
  {
    index:7,
    title: "Higher Or Lower Game",
    url: "https://higherorlowerabass.netlify.app",
    image: "projects/guess.png",
    git: "https://github.com/abassakeem/GuessTheNumber",
    description: "I developed a number guessing game where users have 5 attempts to guess a randomly generated number between 1 and 100. Success occurs if they guess correctly within the allotted tries, while failure results from an incorrect guess.",
  },
  
  {
    index:8,
    title: "Text to Speech Converter",
    url: "https://text2speechabass.netlify.app",
    image: "projects/texttospeech.png",
    git: "https://github.com/abassakeem/text-to-speech",
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
  setIndex((index + 1) % projects.length);
};

const onPrevClick = () => {
  setIndex((index - 1 + projects.length) % projects.length);
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
        <div className="works-section wrapper ">
        <div className="title">Projects</div>
       
        <p className="text">My Projects </p>
        <span className="description">
          Below are a few of my projects
        </span>
        <ul className="cards" style={{
          
          transition: 'transform 0.3s ease',
          transform: `translateX(-${position}px)`,
        }}>
        <Carousel  fade controls={false}   activeIndex={index}  key={index} >
            {projects.map(project=>(
          <Carousel.Item>
            
          <div className="card-container" >
            <li key={project.index} className=" projectcards projectcard-1 justify-content-center align-items-center">
              <a href="#"> <img src={project.image} /> </a>
                <h6 className="header">{project.title}</h6>
                <p className="project-description">{project.description}</p>
               
             </li> <div className="git-view">
                    <a href="#" target="_blank"><AiFillGithub/></a>
                    <a href="#" target="_blank"><AiFillEye/></a>
                </div> </div> 
               
               </Carousel.Item>
              ))}
             

          
            
             </Carousel>
        </ul>
      
           <div className="buttons">
                <button className="previous"  onClick={onPrevClick}>
                    <FcPrevious fill={"white"}/>
                </button>
                <button className="next"  onClick={onNextClick}>
                    < FcNext/>

                </button>
             
             </div>
    </div>
     );

}

export default Works;