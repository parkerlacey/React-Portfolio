import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
//import GithubIcon from '@material-ui/icons/Github'
import "../styles/Home.css"


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Parker</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>

         <h1>Skills</h1>
         <ol className='list'>
           <li className='item'>
             <h2>Front-End</h2>
             <span>
             ReactJs, Angular, HTML, CSS, Javascript, NPM, Bootstrap, MaterialUI, Yarn
             </span>
           </li>
           <li className='item'>
             <h2>Back-End</h2>
             <span>
               NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, NoSQL
             </span>
           </li>
           <li className='item'>
             <h2>Languages</h2>
             <span>
               Javascript, HTML, CSS, Python
             </span>
           </li>

         </ol>
      </div>
    </div>
  )
}

export default Home