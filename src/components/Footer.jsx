import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__grid contenedor'>
            <img className='footer__logo' src="images/logo.svg" alt="logo icon" />
            <div className='footer__info'>
                <ul className='footer__ul'>
                    <li className='footer__li footer__li--white' href="">features</li>
                    <li className='footer__li' href="">Link Shortening</li>
                    <li className='footer__li' href="">Branded Links</li>
                    <li className='footer__li' href="">Analytics</li>
                </ul>
                <ul className='footer__ul'>
                    <li className='footer__li footer__li--white' href="">resources</li>
                    <li className='footer__li' href="">Blog</li>
                    <li className='footer__li' href="">Developers</li>
                    <li className='footer__li' href="">Support</li>
                </ul>
                <ul className='footer__ul'>
                    <li className='footer__li footer__li--white' href="">company</li>
                    <li className='footer__li' href="">About</li>
                    <li className='footer__li' href="">Our Team</li>
                    <li className='footer__li' href="">Careers</li>
                    <li className='footer__li' href="">Contact</li>
                </ul>
            </div>
            <div className='footer__redes'>
                <img src="images/icon-facebook.svg" alt="icon facebook" />
                <img src="images/icon-twitter.svg" alt="icon facebook" />
                <img src="images/icon-pinterest.svg" alt="icon facebook" />
                <img src="images/icon-instagram.svg" alt="icon facebook" />
            </div>
        </div>
    </footer>
  )
}
