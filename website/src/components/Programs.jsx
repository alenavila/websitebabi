import React from 'react'
import './../assets/styles/ProgramsStyles.css'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <i className="ri-brush-line"></i> 
            <p>Stuckateurarbeiten</p>
        </div>
        <div className="program">
            <i className="ri-paint-fill"></i> 
            <p>Malerarbeiten</p>
            <div className="caption">
                <ul>
                    <li>
                    Innenmalerei (Wände, Decken)
                    </li>
                    <li>Fassadenanstriche</li>
                    <li>Lackierungen (Fenster, Türen, Möbel)</li>
                </ul>
            </div>
        </div>
        <div className="program">
            <i className="ri-home-3-line"></i> 
            <p>Renovierungen & Sanierungen</p>
            <div className="caption">
                <ul>
                    <li>Komplettsanierung von Innenräumen</li>
                    <li>Fassadensanierung</li>
                    <li>Trockenbauarbeiten</li>
                    <li>Altbausanierung</li>
                    <li>Dämmung von Wänden und Decken</li>
                </ul>
            </div>
        </div>
        <div className="program">
            <i className="ri-paint-brush-line"></i> 
            <p>Verputzarbeiten</p>
            <div className="caption">
                <ul>
                    <li>Innen- und Außenputz</li>
                    <li>Struktur- und Glattputz</li>
                    <li>Kalk- und Zementputze</li>
                </ul>
            </div>
        </div>
        <div className="program">
            <i className="ri-tools-line"></i> 
            <p>Bodenbelagsarbeiten</p>
            <div className="caption">
                <ul>
                    <li>Verlegung von Laminat und Parkett</li>
                    <li>Fußbodenbeschichtungen</li>
                    <li>Estricharbeiten</li>
                </ul>
            </div>
        </div>
        <div className="program">
            <i className="ri-sun-line"></i> 
            <p>Wärmedämmung</p>
            <div className="caption">
                <ul>
                    <li>Außendämmung (Fassadendämmung)</li>
                    <li>Innendämmung</li>
                </ul>
            </div>
        </div>                                          
    </div>
  )
}

export default Programs
