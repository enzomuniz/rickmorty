import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'


function Infos() {

    const [personagens, setPersonagens] = useState();
    const [episodios, setEpisodios] = useState([]);
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

    const forLimit = async () => {

        const allEpisodios = [];

        for (let i = 0; i < personagens.episode.length; i++) {

            const url = personagens.episode[i];
            const epResponse = await fetch(url);
            const epData = await epResponse.json();



            allEpisodios.push(epData)


        }

        setEpisodios(allEpisodios);
        console.log(allEpisodios);
    }



    useEffect(() => {
        if (personagens) {
            forLimit();
        }
    }, [personagens]);



    return (
        <>

            {personagens && (
                <>
                <div>
                        <h1>Detalhes do Personagem</h1>
                        <div className="container2">
                            <>
                                <div className='card2'>
                                    <img className='imginfo' src={personagens.image && personagens.image} />
                                    <div className='infos'>
                                    <h3>Nome: {personagens.name}</h3>
                                    <h3>Status: {personagens.status}</h3>
                                    <h3>Espécie: {personagens.species}</h3>
                                    </div>
                                    <h2>Episódios:</h2>
                                    <div>
                                            {episodios && (
                                             <>
                                             {Object.values(episodios).map((busca) => (
                                                 <>
                                                     <div className='episodios'>
                                                         <p className='texto'>Número: {busca.episode} Nome: {busca.name && busca.name}</p>
                                                     </div>
                                                 </>
                                             ))}
                                         </>
                                     )}
                                    </div>

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