import api from "../../service/api";
import { useEffect, useState } from "react";
import "./listmovie.css"

function List(){

    const [movie, setMovie] = useState([])

    useEffect(()=>{
        async function LoadMovies(){
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: 'd71237d08ef1ed2a882b49bf5d36150c',
                    language: 'pt-BR'
                }
            })

            setMovie(response.data.results);
        }

        LoadMovies();
        // console.log(movie)
    })

    return(
        <section className="section_carroseul">

            <div><h2>Filmes em pré estreia</h2></div>

            <div>
            {movie.map((movi) =>{
                return(
                    <div className="list_movies">
                        <img src={`https://image.tmdb.org/t/p/original${movi.poster_path}`} alt={movi.title} />

                        <button>Ver Mais</button>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default List;