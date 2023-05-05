import Header from './components/Header'
import Hero from './components/Hero'
import Boost from './components/Boost'
import './App.css'
import Footer from './components/Footer'
import Shorten from './components/Shorten'
import ResumenShorten from './components/ResumenShorten'
import Spinner from './components/Spinner'
import useMain from './hooks/useMain'

function App() {

  const { mostrarResumen, cargando } = useMain();

  return (
    <>
      <Header />
      <Hero />
      <main className='main'>
        <Shorten />
        {/* {mostrarResumen ? <ResumenShorten /> : null } */}
        {cargando ? <Spinner /> : mostrarResumen ? <ResumenShorten /> : null }
        <div>
          <h1 className='main__title'>Advanced Stadistics</h1>
          <p className='main__text'>
            Track how your links are performing across the web with 
            <span className='main__text--span'>
              our advanced statistics dashboard.
            </span> 
          </p>
        </div>
        <div className='main__grid contenedor'>
          <div className='card'>
            <div className='card__circle'>
              <img className='card__icon' src="/images/icon-brand-recognition.svg" alt="icon recognition" />
            </div>
            <h3 className='card__title'>Brand Recognition</h3>
            <p className='card__text'>
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>
          <div className='card'>
            <div className='card__circle'>
              <img className='card__icon' src="/images/icon-detailed-records.svg" alt="icon detail" />
            </div>
            <h3 className='card__title'>Detailed Records</h3>
            <p className='card__text'>
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </p>
          </div>
          <div className='card'>
            <div className='card__circle'>
              <img className='card__icon' src="/images/icon-fully-customizable.svg" alt="icon fully" />
            </div>
            <h3 className='card__title'>Fully Customizable</h3>
            <p className='card__text'>
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </p>
          </div>
          <div className='card'></div>
        </div>
      </main>
      <Boost />
      <Footer />
    </>
  )
}

export default App
