import React from 'react'
import Image from 'next/image';

const ProjectItem = (props) => {
  return (
    <div id='projectItem'>
        <div className="basicInfo">
            <h4>PROJECT NAME<span>{props.projectName}</span></h4>
            <h4 id='purpose'>PURPOSE<span>{props.purpose}</span></h4>
            <h4>TECH STACK</h4>
            {
                props.techStack.map((tech) => <h5>{tech}</h5>)
            }
            <h4><a href={props.sourceCode}>SOURCE CODE</a></h4>
        </div>
            
            <Image src={props.image} alt="project"/>
    </div>
  )
}

export default ProjectItem