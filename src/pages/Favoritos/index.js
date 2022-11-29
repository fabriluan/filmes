import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos(){

    const [midias, setMidias] = useState([]);

    useEffect(()=>{

        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });

        const myList = localStorage.getItem('@favorite');

        setMidias(JSON.parse(myList) || []);
    }, []);

    function DeleteFavorite(id){
        let filterFavorite = midias.filter((midia) =>{
            return(midia.id !== id);
        })

        setMidias(filterFavorite);
        localStorage.setItem('@favorite', JSON.stringify(filterFavorite));
    }

    const msg = <h2 className='verefiq'>Não existe nenhum filme favoritado :( </h2>

    return(
        <section className="section_favorite">
            <h2>Lista de favoritos</h2>

            <section className="list_favorite">

                    {midias.length == 0 && msg}

                    {midias.map((midia)=>{

                        let direct = ''

                        {if(midia.title === undefined){
                            direct = 'series';
                        }else{
                            direct = 'filmes';
                        }}

                        return (
                            <div className="item_favorite" key={midia.id}>
                <div className="center">

                                <h2>{midia.title || midia.name}</h2>
                        
                                <div className='btn_group'>
                                    <Link to={`/${direct}/${midia.id}`}>Ver mais</Link>
                                    <button onClick={ ()=> DeleteFavorite(midia.id)}>Excluir</button>
                                </div>
                </div>
                            </div>
                        )
                    })}



                    
            </section>
        </section>
    )
}

export default Favoritos