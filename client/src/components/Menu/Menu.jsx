import React from 'react'
import './menu.css'
import { FcAbout, FcBusinessContact, FcBusinessman, FcHome, FcReading, FcViewDetails } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import {Link} from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import ProfilePic from '../../assets/Images/ProfilePic.JPG'


const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? ( 
        <>
        <Zoom>
        <div className="navbar-profile-pic">
            <img src={ProfilePic}
            alt='profile Pic' />
        </div>
        </Zoom>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <Link to='home' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcHome />
                    Home
                    </Link>  
                </div>
                <div className="nav-link">
                    <Link to='about' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcAbout/>
                    About
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='education' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcReading />
                    Education
                    </Link>
                </div>
                
                <div className="nav-link">
                    <Link to='techstack' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcViewDetails />
                    Tech Stack
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='project' smooth={true} spy={true} offset={-100} duration={100}>
                    <GiSkills color='white'/>
                    Project
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='work' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcBusinessman />
                    Work Experience
                    </Link>
                </div>
                
                <div className="nav-link">
                    <Link to='contact' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcBusinessContact />
                    Contact
                    </Link>
                </div>
            </div>
        </div>
        </>
    ):(
        <>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <Link to='home' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcHome />
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='about' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcAbout/>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='education' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcReading />
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='techstack' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcViewDetails />
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='project' smooth={true} spy={true} offset={-100} duration={100}>
                    <GiSkills color='white'/>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='work' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcBusinessman />
                    </Link>
                </div>
                <div className="nav-link">
                    <Link to='contact' smooth={true} spy={true} offset={-100} duration={100}>
                    <FcBusinessContact />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )}
    </>
  )
}

export default Menu