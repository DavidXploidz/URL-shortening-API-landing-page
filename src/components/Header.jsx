import React, { useState } from 'react'
import '../styles/header.css'


export default function Header() {

  const [menuMobile, setMenuMobile] = useState(false);

  const handleClickMenu = () => {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className='header contenedor'>
      <nav className='header__nav'>
        <img src="/images/logo.svg" alt="Image logo" />
        <a className='header__a' href="#">features</a>
        <a className='header__a' href="#">pricing</a>
        <a className='header__a' href="#">resources</a>
      </nav>
      <nav className='header__nav'>
        <a className='header__a' href="#">login</a>
        <a className='btn-primary' href="#">sign up</a>
      </nav>
      <nav className='header__mobile'>
        <img src="/images/logo.svg" alt="Image logo" />
        {menuMobile ? (
          <div onClick={() => { handleClickMenu() }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='gray' width="34" height="34" viewBox="0 0 24 24">
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
        ): (
          <div onClick={() => { handleClickMenu() }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='gray' width="34" height="34" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
        )}
      </nav>
      {menuMobile && (
        <div className='header__menuMobile'>
          <a className='header__a header__a--white' href="#">features</a>
          <a className='header__a header__a--white' href="#">pricing</a>
          <a className='header__a header__a--white' href="#">resources</a>
          <hr className='header__hr' />
          <a className='header__a header__a--white' href="#">login</a>
          <a className='btn-primary' href="#">sign up</a>
        </div>
      )}
    </header>
  )
}
