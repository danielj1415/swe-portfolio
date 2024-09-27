import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import imageDaniel from "./assets/images/AboutMePicture.png";
import plantProjectImage from "./assets/images/imagePlantProjectCover2.png";
import plantProjectImageUserFlow from "./assets/images/imagePlantProjectUserFlow.png";
import imagePlantProjectMidFidScreens from "./assets/images/imagePlantProjectMidFidScreens.png";
import imagePlantProjectHighFidScreens from "./assets/images/imagePlantProjectHighFidScreens.png";
import imagePlantProjectHighFidScreens2 from "./assets/images/imagePlantProjectHighFidScreens2.png";
import imagePlantProjectPicture1 from "./assets/images/imagePlantProjectPicture1.png";
import imagePlantProjectPicture2 from "./assets/images/imagePlantProjectPicture2.png";
import YouTubeEmbed from './YoutubeEmbed';
import YouTubeEmbedSmall from './YoutubeEmbedSmall';
import "./PlantProject.css";
import { Outlet, Link } from "react-router-dom"; 

function PlantProject(){
    const videoPlantProjectAppDemoID = "1IFsPEgGmhY";
    const videoPlantProjectHardwareDemoID = "e9c-Xu39iF0";
    const resumeLink = "https://drive.google.com/file/d/14IRxglcZqY8M6Pa2-1-_tVNFMtTbrYKR/view?usp=sharing ";
    return(
        <div>
            <div className = "mainContainer">
                <div className = "navigationBar">
                    <Link className = "navigationBarText" to ="/">Daniel Jong</Link>
                    <div className = "navigationBarRightItems">
                        <Link className = "navigationBarText underlined" to ="/">Work</Link>
                        <Link className = "navigationBarAbout" to="/about">About</Link>
                        <a className="navigationBarText resume" href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
                        <a className ="navigationBarText" href = "mailto:danielj1415@gmail.com">Contact</a>
                    </div>
                </div>

                <div className = "projectContentContainer">
                    <div className = "projectContentContainerTitleInfo">
                        <div className = "projectContentTitleHeading">
                            <p className = "bold px44 marginBottom4px">Plant Hydroponics App</p>
                            <p className = "px16 test">A mobile application used in conjunction with an electronic device that allows users to to track and set the pH value of water in a hydroponic system.</p>
                        </div>
                        <div>
                            <div className = "projectContentTimeline">
                                <p className = "bold marginBottom4px">Timeline</p>
                                <p className = "px16">October 2023 - March 2024</p>
                            </div>
                            <div className = "projectContentTools">
                                <p className = "bold marginBottom4px">Design & Development Tools</p>
                                <p className = "px16">React Native</p>
                                <p className = "px16">Firebase</p>
                                <p className = "px16">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className = "imagePlantProject" src = {plantProjectImage}/>
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Overview</p>
                    <div className = "dividerOverview"></div>
                </div>
                <p className = "semibold px30">Project Background</p>
                <p className = "bigParagraph">This project was created in my senior year of university for my ‘Senior Capstone Project’ course where students in a team build a project that encapsulates everything learned from their courses. The project that my team and I built was a device that could monitor the pH and change the pH of water in a plant hydroponics system. This device was connected to pumps that can add basic and acidic solutions. While the two other team members focused on building the physical structure and integrating the electronic components onto a Raspberry Pi, my role involved designing and developing the user-interface as well as integrating Firebase into the application.</p>
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Design Process</p>
                    <div className = "dividerDesignProcess"></div>
                </div>
                <p className = "semibold px30">User Flow</p>
                <p className = "bigParagraph">The application is designed to utilize user authentication, enabling users to create an account or sign in. Once authenticated, they are directed to the main screen where they can navigate to other sections. Users can choose the 'Plants' screen to add plants or modify their plants' pH value. Additionally, users can sign out from the application using the 'Settings' screen. These functionalities are incorporated into a simple user-flow diagram to depict the navigation for users.</p>
                <img className = "marginTop16px" src = {plantProjectImageUserFlow}/>
                <p className = "semibold px30 marginTop48px marginBottom8px">Mid-Fidelity Wireframes</p>
                <p className = "bigParagraph">With the user-flow diagram designed, I was able to identify the key screens that needed to be created. Each screen began as an initial sketch and was then developed into a mid-fidelity wireframe. These wireframes were designed to showcase a simple interface while retaining all the necessary functionalities for the users.</p>
                <img className = "marginTop16px"src = {imagePlantProjectMidFidScreens}/>
                <p className = "semibold px30 marginTop48px">High-Fidelity Wireframes</p>
                <div className = "horizontalTop marginTop16px">
                    <img className = "marginRight48px" src = {imagePlantProjectHighFidScreens}/>
                    <div>
                        <p className = "semibold px24">Start Screen:</p>
                        <p className = "littleParagraph marginTop8px">The user is greeted with a beautiful start screen that gives them the option to create an account or sign in.</p>
                        <p className = "semibold px24 marginTop16px">Create Account Screen:</p>
                        <p className = "littleParagraph marginTop8px">Here the user can type in their email and password. Their information is stored in Firestore database and Firebase handles all of the user authentication.</p>
                    </div>
                </div>
                <div className = "horizontalBottom spaceBetween marginTop16px">
                    <div>
                        <p className = "semibold px24">Home Screen:</p>
                        <p className = "littleParagraph marginTop8px">The Home Screen shows graphs of the plant PH values. In addition, weather data such as temperature, humidity, clouds, and sunlight would be displayed for users. A graph showing sunlight is also displayed as well for more information about the environment.</p>
                        <p className = "semibold px24 marginTop16px">Plant pH Screen:</p>
                        <p className = "littleParagraph marginTop8px">This screen showcases the interface that users can interact with to modify the pH. Users can see the pH value of their plant over time. They also have several options: set the pH value, add base, add pH, or subtract pH. With these changes, the interface updates to display the temperature and pH.</p>
                    </div>
                    <img src = {imagePlantProjectHighFidScreens2}/>
                </div>
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Development Process</p>
                    <div className = "dividerDevelopment"></div>
                </div>
                <p className = "bigParagraph">The Firestore database served as our storage for users, their plants, pH levels, and an array of commands, all initially set to 0. This array of commands represents the user's actions from pressing buttons in the plant pH screen. When a command changes from 0 to 1 in the array, it triggers the corresponding action based on its index. For example, the first index triggers a decrease in pH, the second index triggers an increase in pH, and the third index triggers adding water. The program running on the Raspberry Pi continuously checks for these changes and adjusts the pH and water accordingly using its pumps. Something to note is for the buttons that add and decrease the PH and water solutions, they can be held to continuously dispense or be quickly tapped for smaller doses. Due to time constraints, we couldn't implement the feature of fetching weather data using an API, so static values were used instead. In addition, the graph of showing the pH of the plant had to be scrapped. </p>
                <p className = "semibold px30 marginTop48px marginBottom8px ">Navigating Through the Application</p>
                <YouTubeEmbed videoId={videoPlantProjectAppDemoID} />
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Conclusion</p>
                    <div className = "dividerConclusion"></div>
                </div>
                <p className = "bigParagraph">In conclusion, this project was a huge test for my front-end design development skills as well as working with Firebase. I also had to work as part of a team that were working on different parts. In the end, this project was presented to hundreds of students and faculty in my university’s annual senior design conference where we were able to give live demonstrations of the application working with the physical device.</p>
                <p className = "bigParagraph marginTop8px">For future plans for this project, my team and I are planning to actually use this to store our own plants and I am working on the API feature to show all the weather data. Another feature I am working on implementing are the graphs to showcase the PH and temperature over a set period of time. The Settings screen could be fleshed out by adding functionality to change the metric system as well as add the user’s location for accurate weather data.</p>
                <p className = "semibold px30 marginTop48px marginBottom8px ">Links:</p>
                <a href = "https://github.com/danielj1415/PlantHydroponics2024">Github</a>
                <p className = "marginBottom4px"></p>
                <a href = "https://docs.google.com/document/d/1ZGTXQLdsch2z4spO6EnwyWZu9NTcc0X-/edit?usp=sharing&ouid=104865549103208501675&rtpof=true&sd=true">Documentation</a>
                <p className = "semibold px30 marginTop48px">Pictures and Videos</p>
                <div className = "horizontal spaceBetween marginTop8px">
                    <div>
                        <div>
                            <img src = {imagePlantProjectPicture1}/>
                            <p className = "littleParagraph px12">The physical structure of the hydroponic system connected to the acidic and basic solutions. </p>
                        </div>
                    </div>
                    <div>
                        <img src = {imagePlantProjectPicture2} className = "height290px imagePlantProjectPicture2"/>
                        <p className = "littleParagraph px12">The team behind the project (I am on the left)</p>
                    </div>
                </div>
                <div className = "horizontal spaceBetween marginTop24px">
                    <div>
                        <YouTubeEmbedSmall videoId={videoPlantProjectHardwareDemoID}/>
                        <p className = "littleParagraph px12 marginTop4px">Device running with the pumps adding acid and the sensors tracking the pH level.</p>
                    </div>
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

export default PlantProject