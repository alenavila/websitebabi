import React from 'react'
import './../assets/styles/HeaderStyles.css'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <header className='container'>
      <ul>
        <li>
        <i className="ri-phone-line" id='icon'></i>
        +49 151 67823398
        </li>
        <li>
        <i className="ri-mail-line" id='icon'></i>
        qanivila73@gmail.com
        </li>
      </ul>
    </header>

  )
}

export default Header
