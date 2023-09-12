import React from "react";
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from "framer-motion";
function AboutSection() {
    const handleLearnMore = () => {
        const element  = document.querySelector(".display-section");
        window.scrollTo({
                top:element?.getBoundingClientRect().bottom,
                left:0,
                behavior: "smooth"

        })
    }
    return ( 
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                       
                        <p className="text">About Me</p>
                        <motion.span className="about-description "
                        initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                          }}
                        >I'm a Software Engineer with a specialization in React and a keen interest in Node.js and Three.js. I thrive on close client collaboration to build efficient, scalable, and user-centric solutions. I'm eager to team up with you to turn your concepts into reality!</motion.span>
                        <ul className="unordered">
                            <li>
                                <h4>
                                    Front-end 
                                </h4>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.9,
                          }}
                                className="tech-logo">
                                <BiLogoReact/>
                                </motion.div>
                                <p><small>Proficient in front-end technologies including React.js, HTML, CSS, and Bootstrap, complemented by strong skills in JavaScript.</small></p>
                                
                            </li>
                            <li>
                                <h4>
                                   Back-end
                                </h4>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 1.15,
                          }}
                                className="tech-logo">
                                <FaNodeJs/>
                                </motion.div>
                                <p><small>Well-versed in back-end development with experience in Node.js, PHP, and database optimization.</small></p>
                                
                            </li>
                            <li>
                                <h4>
                                  Version Control
                                </h4>
                                <motion.div 
                                initial={{
                            opacity: 0,
                            y: 25,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: 1,
                          }}
                                className="tech-logo">
                                <AiFillGithub/>
                                </motion.div>
                                <p><small>I have a strong background in using Git and GitHub for continuous integration and deployment of software.</small></p>

                                
                            </li>
                            
                        </ul>
                </div>
            </div>
        </div>
     );
}

export default AboutSection;