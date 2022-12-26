import { Link } from 'react-router-dom'
import './index.scss'
import Headshot from '../../assets/images/headshot.JPG'
const Home = () => {

    return( 
        <div className="container home-page">
            <div className="text-zone">
            <h1>Hi, <br/> I'm Alonso
            <br /> 
            Software Engineer
            </h1>
            <h2>Fullstack developer / Mobile developer / UTRGV Graduate 22'</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            
            </div>
            <img src={Headshot} alt='headshot' ></img>

        </div>
        
    )
}

export default Home;