import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css'


function Infos() {

    const [infos, setInfos] = useState();
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();

            setInfos(data);
            console.log(data);

        }

        fetchData()

    }, [])




    return (
        <>

            {infos && (
                <>
                    <div className="container">


                        <h1>Detalhes do Personagem</h1>
                        
                        {infos.results && infos.results.map((busca) => (
                            <>
                                <div className='times_e_Infos'>
                                    <img src={busca.image && busca.image} />
                                    <h3>{busca.name}</h3>
                                </div>


                            </>
                        ))}
                    </div>
                </>

            )}
        </>
    )

}

export default Infos;