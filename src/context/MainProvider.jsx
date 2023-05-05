import { createContext } from "react";
import { useState, useEffect } from 'react'
const MainContext = createContext();

const MainProvider = ({children}) => {

    const [link, setLink] = useState('');
    const [data, setData] = useState([]);
    const [mostrarResumen, setMostrarResumen] = useState(false);
    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        consultarAPI();
    },[link])
    
    const consultarAPI = async () => {
        try {
            setCargando(true);
            const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setData([...data, resultado.result,]);
            setCargando(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = datos => {
        if(datos === '' || datos === undefined){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        setLink(datos);
        setMostrarResumen(true);
    }

    return (
        <MainContext.Provider
            value={{
                handleSubmit,
                link,
                data,
                mostrarResumen,
                error,
                cargando
            }}
        >{children}
        </MainContext.Provider>
      )
}

export{
    MainProvider
}

export default MainContext;