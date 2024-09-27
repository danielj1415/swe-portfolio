import "./AboutMePage.css";
import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import imageDaniel from "./assets/images/AboutMePicture.png";
import { Outlet, Link } from "react-router-dom"; 

function AboutMePage() {
    const resumeLink = "https://drive.google.com/file/d/1fWFcXt1XahY002DG3eDPPp58Hlm_b4Fp/view?usp=sharing";
    return (
    <div>
        <div className = "mainContainer">
                <div className = "navigationBar">
                    <Link className = "navigationBarText" to ="/">Daniel Jong</Link>
                    <div className = "navigationBarRightItems">
                        <Link className = "navigationBarText" to ="/">Work</Link>
                        <Link className = "navigationBarAbout underlined" to="/about/">About</Link>
                        <a className="navigationBarText resume" href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
                        <a className ="navigationBarText" href = "mailto:danielj1415@gmail.com">Contact</a>
                    </div>
                </div>
                <div className = "aboutMeFirstSectionContainer">
                    <div className = "aboutMeFirstSectionText">
                        <p className = "aboutMeHeading">Hello, I'm Daniel!</p>
                        <div className = "aboutMeParagraphContainer">
                            <p className = "aboutMeParagraph space">I am a software engineer based in the Los Angeles area. My journey in coding began back in 2019 with a simple Hello World in C++ and has now evolved to more complex programs.</p>
                            <p className = "aboutMeParagraph">I am passionate about bringing interface designs to life in code and connecting the front-end part of applications to back-end databases and technologies. In addition, I am experienced in product design to create beautiful user-interfaces for websites and mobile applications.</p>
                        </div>
                        <div className = "containerSkillsEducation">
                            <div className = "skillsContainer">
                                <p className = "aboutMeHeading2">Skills</p>
                                <p className = "aboutMeParagraph">React Native</p>
                                <p className = "aboutMeParagraph">React</p>
                                <p className = "aboutMeParagraph">Firebase</p>
                                <p className = "aboutMeParagraph">C++/C</p>
                                <p className = "aboutMeParagraph">Python</p>
                                <p className = "aboutMeParagraph">Flutter</p>
                            </div>
                            <div className = "educationContainer">
                                <p className = "aboutMeHeading2">Education</p>
                                <p className = "aboutMeHeading2-5">Bachelor's Degree in Computer Engineering</p>
                                <p className = "aboutMeParagraph school">University of Califoria, Irvine</p>
                                <p className = "aboutMeParagraph">2021 - 2024</p>
                            </div>
                        </div>
                    </div>
                    <img className = "imageDaniel" src = {imageDaniel}/>
                </div>
                <div className = "aboutMeSecondSectionContainer">
                    <p className = "aboutMeHeading2">Hobbies I do outside of work:</p>
                    <p className = "aboutMeParagraph smallerText"><strong>Gym 💪🏻:</strong> Going to the gym is part of my daily routine and is a way to work on myself physically. I am able to bench 250 and squat 315 pounds. </p>
                    <p className = "aboutMeParagraph middle smallerText"><strong>Games 🎮:</strong> In my free time, I love to pick up my controller and play games with people. Currently, I am playing Super Smash Bros Ultimate and Pokemon Violet. </p>
                    <p className = "aboutMeParagraph smallerText"><strong>Piano 🎹:</strong> I love to play songs from my favorite movies and games. Also, I currently play piano for my church’s youth ministry. </p>
                </div>
                <div className = "footerSection">
                    <div className = "footerLargeContainer">
                        <div className = "footerTextContainer">
                            <p className = "footerText">Turning ideas into designs and designs into code.</p>
                        </div>
                        <p className = "footerEmail">email: danielj1415@gmail.com</p>
                        <p className = "footerPhone">phone: (626) 518-2422</p>
                        <div className = "iconContainer">
                            <a href="https://www.linkedin.com/in/daniel-jong-002891209/" target="_blank">
                                <img src={iconLinkedIn} class="imageIcon" alt="LinkedIn Profile"/>
                            </a>
                            <a href="https://github.com/danielj1415" target="_blank">
                                <img src={iconGithub} class="imageIcon" alt="GitHub Profile"/>
                            </a>
                        </div>
                    </div>
                    <p className = "footerText2">Made with 🧋☕️✨ </p>
                </div>
            </div>
    </div>
  )
}

export default AboutMePage