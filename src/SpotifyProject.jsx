
import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import imageDaniel from "./assets/images/AboutMePicture.png";
import plantProjectImage from "./assets/images/imagePlantProjectCover2.png";
import spotifyProjectImage from "./assets/images/imageSpotifyProjectCover2.png";
import imageComponentHomeSearch from "./assets/images/imageComponentHomeSearch.png";
import imageComponentLibraryPlaylist from "./assets/images/imageComponentLibraryPlaylist.png";
import imageComponentMusicMenu from "./assets/images/imageComponentMusicMenu.png";
import imageComponentMainPage from "./assets/images/imageComponentMainPage.png";
import imageComponentInteractionDiagram from "./assets/images/imageComponentInteractionDiagram.png";
import { Outlet, Link } from "react-router-dom"; 
import YouTubeEmbed from './YoutubeEmbed';
import YouTubeEmbedSmall from './YoutubeEmbedSmall';
import "./PlantProject.css";

function SpotifyProject(){

    const videoSpotifyProjectDemoID = "AtT4LLOH7uA";

    return(
    <div>
        <div className = "mainContainer">
            <div className = "navigationBar">
                <Link className = "navigationBarText" to ="/">Daniel Jong</Link>
                <div className = "navigationBarRightItems">
                    <Link className = "navigationBarText underlined" to ="/">Work</Link>
                    <Link className = "navigationBarAbout" to="/about">About</Link>
                    <a className="navigationBarText resume" href="https://docs.google.com/document/d/12nxaGq7QP7QM-EPaiysvYYUrQqJ_O-GYS3DdN2PZnwk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className ="navigationBarText" href = "mailto:danielj1415@gmail.com">Contact</a>
                </div>
            </div>

            <div className = "projectContentContainer">
                <div className = "projectContentContainerTitleInfo">
                    <div className = "projectContentTitleHeading">
                        <p className = "bold px44 marginBottom4px">Spotify Website Clone</p>
                        <p className = "px16 test">A mobile application used in conjunction with an electronic device that allows users to to track and set the pH value of water in a hydroponic system.</p>
                    </div>
                    <div>
                        <div className = "projectContentTimeline">
                            <p className = "bold marginBottom4px">Timeline</p>
                            <p className = "px16">June 2023 - July 2023</p>
                        </div>
                        <div className = "projectContentTools">
                            <p className = "bold marginBottom4px">Design & Development Tools</p>
                            <p className = "px16">ReactJS</p>
                            <p className = "px16">CSS</p>
                            <p className = "px16">Figma</p>
                        </div>
                    </div>
                </div>
                <img className = "imagePlantProject" src = {spotifyProjectImage}/>
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Overview</p>
                    <div className = "dividerOverview"></div>
                </div>
                <p className = "semibold px30">Project Background</p>
                <p className = "bigParagraph">This project recreates Spotify’s desktop interface using ReactJS and CSS. It is heavily inspired by the way Spotify works and aims to give users a similar experience. Users can explore playlists, play music, and navigate the page that looks and feels like Spotify.</p>
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Development Process</p>
                    <div className = "dividerDevelopment"></div>
                </div>
                <p className = "bigParagraph">When first examining the user interface, I noticed four standout components. The first component, located at the top left, includes the "Home" and "Search" options, allowing users to access the home and search pages. Below this is the second component, the "Library," which displays all the playlists the users have stored. These two components form the left menu. The third component is the main page on the right, which responds to the user's menu selections by displaying the home page, playlists, or songs. At the bottom of all the components is the fourth component, the music player, which allows users to play and pause songs, adjust the volume, and access other features that pertain to the song playling. An observation I noticed was that the Library and Main page components were scrollable. I started by creating simple rectangles for each component to serve as containers, allowing me to focus on developing each individual component. </p>
                <p className = "semibold px30 marginTop48px marginBottom8px">Home/Search Component</p>
                <div className = "horizontalTop">
                    <img src = {imageComponentHomeSearch}/>
                    <p className = "px16 width516 marginLeft24px">This component features two sub-components which are the "Home" text and icon and the "Search" text and icon. I created the main dark gray rectangle to contain everything and then added the text and icons. Additionally, I added a div rectangle the size of the main scrolling page, so pressing "Home" would display the home page. To get the correct sizing, I took a screenshot of Spotify, placed it into Figma, and used it as a reference for pixel dimensions.</p>
                </div>
                <p className = "semibold px30 marginTop48px marginBottom8px">Library/Playlist Component</p>
                <div className = "horizontalTop">
                    <img src = {imageComponentLibraryPlaylist}/>
                    <p className = "px16 width516 marginLeft24px">The library component was divided into two parts: the top part, which is not scrollable, and the bottom part, which is scrollable for the playlists. The top portion was easily built using the screenshot method in Figma. The bottom portion was created by making a PlaylistData.js file that housed all the playlist names and images. Each playlist has an index used to indicate which playlist to display on the main scrolling page on the right.</p>
                </div>
                <p className = "semibold px30 marginTop48px marginBottom8px">Music Menu Component</p>
                <img src = {imageComponentMusicMenu} className = "marginBottom8px"/>
                <p className = "bigParagraph">The music menu component followed a similar construction method. For music playback, I utilized the audio element in React. This feature allows users to click on specific parts of the track to listen to that section. A function detects the click, checks the position, and determines the time to resume playback. Currently, I have a folder storing MP3 files for this functionality.</p>
                <p className = "semibold px30 marginTop48px marginBottom8px">Main Page Component</p>
                <img src = {imageComponentMainPage} className = "marginBottom8px"/>    
                <p className = "bigParagraph">The main scrolling page dynamically changes based on user clicks. If the user clicks on the Home icon or text, this page displays the home content. If the user clicks on a playlist in the Library component, it shows that playlist. The challenge was implementing dynamic content changes based on user input, as React does not have built-in components for this. Additionally, the home page features more playlists and podcasts, which I added to the PlaylistData.js file. I broke this page into two sub-components: the first displaying six recently listened-to playlists, and the second showcasing playlist recommendations and podcasts. I created cards for each item, placed them into an array, and repeated the process for display.</p>
                <p className = "semibold px30 marginTop48px marginBottom8px">Component Interaction Diagram</p>
                <div className = "horizontalTop">
                    <img src = {imageComponentInteractionDiagram}/>
                    <p className = "px16 width516 marginLeft24px">The main interaction of this program is based on user input. The program automatically displays the Main Page Component using the Home.js file, which comprises TopPlaylists.js and PlaylistFeed.js. However, if the user clicks on a playlist in the LeftSideBar, the Main Page Component switches to utilize the Playlist.js file. The Playlist.js file is dynamic and displays content based on the selected playlist. The playlists in the LeftSideBar are stored in an array, each containing an index. When a playlist is clicked, the index is passed to Playlist.js, which then displays the corresponding playlist. For example, if the user clicks on the Spiderman playlist, the Main Page Component will display Playlist.js, which in turn displays PlaylistSpiderman.js.</p>
                </div>
                <p className = "semibold px30 marginTop48px marginBottom8px">Navigating Through the Application</p>
                <YouTubeEmbed videoId={videoSpotifyProjectDemoID} />
                <div className = "horizontalCenter marginTop72px">
                    <p className = "bold px40 marginBottom8px">Conclusion</p>
                    <div className = "dividerConclusion"></div>
                </div>
                <p className = "bigParagraph">This project aims to recreate Spotify’s interface, providing a similar user experience through the use of ReactJS and CSS. It was my first venture into applying my web development skills to build a functional and visually appealing application. I am excited about the future enhancements and potential integrations that will make this project even more comprehensive.</p>
                <p className = "semibold px30 marginTop48px">Future Plans</p>
                <p className = "bigParagraph">I plan to further enhance and expand this project by adding user account functionality to allow users to save playlists and customize their experience. Incorporating search and recommendation features to make the website more feature-rich. Integration with Spotify API: Potentially integrating the Spotify API to access real user data, playlists, and music content, if feasible and permitted. </p>
                <p className = "semibold px30 marginTop48px marginBottom8px ">Links:</p>
                <a href = "https://github.com/danielj1415/spotify-clone">Github</a>
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

export default SpotifyProject