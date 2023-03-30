import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faRegistered, faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => (
    <div className='nav-bar'>
        <nav>
           <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faRegistered} color="#4d4d4e" />
           </NavLink>
        </nav>
    </div>
)

export default Header