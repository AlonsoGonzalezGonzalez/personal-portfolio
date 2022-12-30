import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect } from 'react'

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
        </div>
    )
}

export default About;