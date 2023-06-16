import React, { useState } from 'react'
import ProjectItem from './ProjectItem'
import cars from "../public/Imgs/Group 30.png";
import chatGPT from "../public/Imgs/Group 29.jpg";
import ai from "../public/Imgs/Group 28.jpg";


const Project = () => {

    const [projectSelected, setProjectSelected] = useState("CarHub");

  return (
    <div className='project'>
        <h2>PROJECTS</h2>
        <h3 onClick={() => setProjectSelected("CarHub")}>CarHub</h3>
        <h3 onClick={() => setProjectSelected("chatGPT")}>DALL.E Image Generator</h3>
        <h3 onClick={() => setProjectSelected("AI")}>AI Chat App</h3>

        <div className="productDetails">
            {
                projectSelected === "CarHub" && <ProjectItem projectName=" CarHub"
                purpose=": Find your perfect car! Search through a database, which includes autocomplete, to locate the car you desire. Futher, advanced filters increases the odds of finding the exact car you want. Next JS, Typescript, Headless UI, and Tailwind css, are used to create the front end, and drawing on several APIs to fetch the data to populate our car application." 
                techStack = {["Next js", "Typescript", "Headless UI", "APIs", "Tailwind CSS"]}
                sourceCode = "https://github.com/SanjeevMidda/car_web_app" image={cars}/>
            }
            {
                projectSelected === "chatGPT" && <ProjectItem projectName=" DALL.E Image Generator" purpose=": Leverage DALL.E to create a truly unique image. The user can enter exactly what they would like, or can get the system to generate a unique suggestion, and leave it to DALL.E to summon a unique image. React and Tailwind css are used for the frontend. The user can save any image DALL.E generates, for later viewing. This is implemented using node, express, and mongoDB for our backend. Cloudinary, in addition, is used for optimising media retrieval. " techStack = {["react", "mongoDB", "node & express", "cloudinary", "openAI", "tailwind css"]} sourceCode = "https://github.com/SanjeevMidda/chatGPT-image-generator" image={chatGPT}/>
            }
            {
                projectSelected === "AI" && <ProjectItem projectName=" AI Chat App" purpose=": Have all the answers in the world at your fingertips. Leveraging AI technology, the user can pose any question, and the system will generate a unique response. Multiple chats can be opened, and recovered later." techStack = {["react", "node & express", "openAI"]} sourceCode = "https://github.com/SanjeevMidda/chat" image={ai}/>
            }
        </div>
    </div>
  )
}

export default Project
