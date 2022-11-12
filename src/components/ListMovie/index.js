import api from "../../service/api";
import { useEffect, useState, useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./listmovie.css"

function ListMovie({title, direct}){

    const [movie, setMovie] = useState([])
    const center = useRef(null);
    const movieTam = useRef(null);

    useEffect(()=>{
        async function LoadMovies(){
            const response = await api.get(direct, {
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

    const HandleRight = (e) =>{
        e.preventDefault();
        let tam = center.current.offsetWidth - movieTam.current.offsetWidth;
        center.current.scrollLeft += tam;
    }

    const HandleLeft = (e) =>{
        e.preventDefault();
        let tam = center.current.offsetWidth - movieTam.current.offsetWidth;
        center.current.scrollLeft -=  tam;
    }

    return(
        <section className="section_carroseul">
        
            <h2>{title}</h2>

            <div className="center" ref={center}>
                {movie.map((movi) =>{
                    return(
                        <div className="list_movie" key={movi.id} ref={movieTam}>
                            <img src={`https://image.tmdb.org/t/p/original${movi.poster_path}`} alt={movi.title} />

                            <button>Ver Mais</button>
                        </div>
                    )
                })}

            <div className="group_btn">
                    <button onClick={ HandleLeft }><AiOutlineArrowLeft /></button>
                    <button onClick={ HandleRight }><AiOutlineArrowRight /></button>
            </div>
            </div>
        </section>
    )
}

export default ListMovie;