import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import './App.css'
import './Infos.jsx'

function App() {

  const [personagens, setPersonagens] = useState();

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await response.json();

      setPersonagens(data);
      console.log(data);

    }


    fetchData()

  }, [])

  return (
    <>

      {personagens && (
        <>
        <div className='container'>
                <div className='titulo'>
            <h1>Lista De Personagens</h1>
            </div>
            {personagens.results && personagens.results.map((busca) => (

                <div className='pessoas' >
                  <Link to={`/Infos/${busca.id}`} key={busca.id}></Link>
                   <img className='img' src={busca.image && busca.image} />
                <h2 className='nome'>{busca.name}</h2>
               
                </div>
            ))}
          </div>
        </>
      )}

    </>


  )
}

export default App