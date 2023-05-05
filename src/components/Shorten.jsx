import '../styles/shorten.css';
import { useState } from 'react';
import useMain from '../hooks/useMain'

export default function Shorten() {

  const { handleSubmit, error} = useMain();
  const [url, setUrl] = useState('');

  const className = error ? 'shorten__input--error' : '';

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  }

  const limpiarState = () => {
    setUrl("");
    document.querySelector('.shorten__input').value = "";
  }

  return (
    <div className='shorten contenedor'>
      <form className='shorten__form'>
        <input onChange={ handleInputChange } className={`${className} shorten__input`} type="text" placeholder='Shorten a link here...' />
        {error && (
          <p className='shorten__alert' >Please add a valid link</p>
        )}
        <button onClick={() => {handleSubmit(url), limpiarState()}} className='btn-primary btn-primary--border5' type="button">Shorten it!</button>
      </form>
    </div>
  )
}
