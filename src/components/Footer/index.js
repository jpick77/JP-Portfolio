import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-link'>
            <a href="https://github.com/jpick77" target='blank'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
            <a href="https://www.linkedin.com/in/jacob-pickron-1576271a7/" target='blank'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            <a href="https://twitter.com/jacob_pickron" target='blank'>
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
            </div>
        </div>
    )
}


export default Footer