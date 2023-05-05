import { useState } from 'react';
import useMain from '../hooks/useMain'
import '../styles/resumenShorten.css'

export default function ResumenShorten() {

    const { data } = useMain();

    /*Con el operador Optional Chaining ("?"), puedes acceder a propiedades anidadas de un 
    objeto de manera segura, ya que el operador verifica si la propiedad existe antes 
    de intentar acceder a ella. Si la propiedad no existe, el operador devuelve undefined 
    en lugar de arrojar un error.*/

    // const shortLink = data?.full_short_link;
    // const originalLink = data?.original_link;

    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClickCopy = (index, text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setSelected(index); 
            setTimeout(() => {
                setSelected(null); 
            }, 3000);
        })
        .catch((err) => {
          console.error('Error al copiar texto: ', err);
        });
    }


  return (
    <>
        {data.filter(link => link !== undefined).map((link, index) =>(
            <div key={index} className='resumen contenedor'>
                <div className='resumen__content'>
                    {/* <p className='resumen__link'>{originalLink}</p> */}
                    <p className='resumen__link'>{link?.original_link}</p>
                    <p className='resumen__link resumen__link--cyan'>{link?.full_short_link}</p>
                </div>
                <div className='resumen__copy'>
                    <button 
                        className={`btn-primary btn-primary--border5 ${selected === index ? 'copied' : ''} `} 
                        onClick={() => { handleClickCopy(index, link?.full_short_link) }}
                    >
                        {selected === index ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        ))}
    </>
  )
}
