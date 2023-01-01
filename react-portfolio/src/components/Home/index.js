import { Link } from 'react-router-dom'
import './index.scss'
import Headshot from '../../assets/images/headshot.JPG'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['A','l','o','n','s','o']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 0)
      }, [])


    return( 
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp;
            <AnimatedLetters letterClass={letterClass}
                strArray={ nameArray}
                idx={15}
            />
            <br /> 
                <AnimatedLetters
                letterClass={letterClass}
                strArray={ jobArray}
                idx={22}
                />
            </h1>
            <h2>Fullstack developer / Mobile developer / UTRGV Graduate 22'</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            
            </div>
            <img src={Headshot} alt='headshot' ></img>

        </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Home;