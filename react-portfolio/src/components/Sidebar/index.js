import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoRayados from '../../assets/images/logo-rayados.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'> 
            <img src={LogoRayados} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="alonso" />
        
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color= "#022c43" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about"> 
                <FontAwesomeIcon icon={faUser} color= "#022c43" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color= "#022c43" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alonsogzz/'>
                    <FontAwesomeIcon icon={faLinkedin} color= "#022c43" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/AlonsoGonzalezGonzalez'>
                    <FontAwesomeIcon icon={faGithub} color= "#022c43" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;