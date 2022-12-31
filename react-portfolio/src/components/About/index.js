import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { faCcAmex, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 0)
      }, [])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'm','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious and responsible software engineer with interests in 
                    front-end and full-stack development looking for a software engineer role in the
                    tech industry to work on challenging and diverse projects.
                </p>
                <p>
                    I graduated from the University of Texas Rio Grande Valley (UTRGV) in December 2022 with
                    a Bachelor of Science in Computer Engineering, summa cum laude. I'm a hard-working individual who
                    enjoys learning and wants to grow as a software engineer.
                </p>
                <p>
                    I am a family person and a soccer fanatic. VAMOS MONTERREY!!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>   
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCcAmex} color='Blue'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;