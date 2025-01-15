import React from 'react'
import './../assets/styles/HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Ihr Experte für Stuckateur- und Malerarbeiten – seit über 20 Jahren</h1>
        <p>Wir stehen für Qualität, Erfahrung und individuelle Lösungen, die genau 
            auf Ihre Wünsche abgestimmt sind. Ob Innen- oder Außenbereich, Neubau 
            oder Renovierung – wir sorgen dafür, dass Ihre Projekte mit Präzision und 
            Kreativität umgesetzt werden.</p>
        <button className='btn'>Jetzt Kontakt aufnehmen</button>
      </div>
    </div>
  )
}

export default Hero
