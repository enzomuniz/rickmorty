import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import './App.css'
import './Infos.jsx'

function App() {

  const [personagens, setPersonagens] = useState([]);
  const [procuranome, setProcuranome] = useState('');
  const [buscarestado, setBuscarestado] = useState('');



  
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
               
                <div>
                
          <h1>Lista de Personagens</h1>
          <input placeholder='Buscar' type="text" name="" id="" />
          

          <select name="" id="">
            <option value="">Todos</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        
            </div>
            {personagens.results && personagens.results.map((busca) => (

               
                  <Link to={`/Infos/${busca.id}`} key={busca.id}>
                  <div className='pessoas' >
                   <img className='img' src={busca.image && busca.image} />
                <h2 className='nome'>{busca.name}</h2>
               
                </div>
                </Link>
            ))}
          </div>
        </>
      )}

    </>


  )
}

export default App