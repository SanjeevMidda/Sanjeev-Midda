import Head from 'next/head';
import linkedinLogo from "/public/Imgs/linkedin copy.png";
import githubLogo from "/public/Imgs/github.png";
import mailLogo from "/public/Imgs/mail copy.png";
import contactBackground from "/public/Imgs/Group 19.svg";

import Image from 'next/image';
import { useState } from 'react';

import Project from '@/components/Project';

export default function Home() {

  const [status, setStatus] = useState("home");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <div className="pageContainer">
          <header>
            <nav>
              <div className="title">
                <h1>SANJEEV</h1>
                <h1 id='title'>MIDDA</h1>
              </div>
            
              <div className="links">
                <h4 onClick={() => setStatus("home")}>HOME</h4>
                <h4 onClick={() => setStatus("projects")}>PROJECTS</h4>
                {/* <a href="#contact"><h4>CONTACT</h4></a> */}
                <a onClick={() => setStatus("contact")}><h4>CONTACT</h4></a>
              </div>
            </nav>
          </header>

          {
            status === "home" &&  <><section id='centerImage'></section>
            <h3 id='creation'>made with ❤️ from London</h3>
           </>
          }

          {
            status === "projects" && <Project />
          }
          
         {
          status === "contact" &&
          <div className='project contactDetails'>
          <Image src={contactBackground} id='contactImage' alt='background'/>
          <h2>Let's get to know each other <br/> <span id='getInTouch'>Get in touch.</span></h2>
            
<div className="contactLinks" id='contact' >
    <a href="https://www.linkedin.com/in/sanjeev-midda"> 
      <Image src={linkedinLogo} alt="linkedin icon"  />
    </a>

    <a href="https://github.com/SanjeevMidda"> 
      <Image src={githubLogo} alt="github icon"  />
    </a>

    <a href="mailto:s.midda1@gmail.com"> 
      <Image src={mailLogo} alt="email icon" />
    </a>
</div>

          </div>

          
         }
        </div>
      </div>
    </>
  )
}
