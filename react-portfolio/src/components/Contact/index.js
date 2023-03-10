import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
        useEffect(() => {
            setTimeout(() => {
              setLetterClass('text-animate-hover')
            }, 3000)
          }, [])
    return (      
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t', ' ', 'm','e']}
                        idx={15}
                    />
                    </h1>
                    <p>
                        I am looking for new grad full-time opportunities in software engineering 
                        to further improve my skills and gain experience.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li >
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea type='text' name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;