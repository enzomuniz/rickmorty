import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'


function Infos() {

    const [personagens, setPersonagens] = useState();
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
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
                <div>
                        <h1>Detalhes do Personagem</h1>
                        <div className="container2">
                            <>
                                
                                    <img className='imginfo' src={personagens.image && personagens.image} />
                                    <div className='infos'>
                                    <h3>Nome: {personagens.name}</h3>
                                    <h3>Status: {personagens.status}</h3>
                                    <h3>Espécie: {personagens.species}</h3>

                                    <h1>Episódios</h1>
                                    <h3>{personagens.episode}</h3>
                                    </div>


                            </>
                        
                    </div>
                    </div>
                </>

            )}
        </>
    )

}

export default Infos;