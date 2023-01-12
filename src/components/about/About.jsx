import React from 'react'

// Import CSS
import './about.css'

// Import image 
import ME from '../../assets/me-about.jpg'

// Import icons
import { FaUserGraduate } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Pourquoi me choisir ?</h5>
      <h2>À propos de moi</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Tristan Greffe' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Formations</h5>
              <small>Bootcamp THP</small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>10+ hard skills</small>
            </article>
          </div>
          <p>Trouver des solutions aux problèmes posés a toujours fait partie de ma vie, que ce soit en tant que responsable en restauration ou en tant que dévelopeur. C'est le moteur de mon épanouissement. Quelle sensation géniale que de ressentir la montée d'adrénaline, de joie et de fierté à l'aboutissement d'un projet.</p>
          <p>Si mon profil attire votre curiosité, n'hésitez pas à me contacter.</p>
          <a href='#contact' className='btn btn-primary'>Contactez-moi</a>
        </div>
      </div>
    </section>
  )
}

export default About