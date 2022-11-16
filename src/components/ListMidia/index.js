import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import "./listmidia.css";

function ListMidia({id, redirect, serie}){
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function LoadInfo(){
            await api.get(`${redirect}/${id}`, {
                params: {
                    api_key: 'd71237d08ef1ed2a882b49bf5d36150c',
                    language: 'pt-BR'
                }
            })
            .then((response)=>{
                setMovie(response.data);
            })
            .catch(()=>{
                navigate('/', {replace: true});
                return;
            })
        }

        LoadInfo();
    }, [id, navigate])

    console.log(movie);

    const {backdrop_path, poster_path, overview, release_date, runtime, tagline, title, vote_count, popularity, last_air_date, seasons} = movie

    return(
        <section className="section_info_midia">

            <div className="center">
                <div className="banner_midia" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}>
                    <h2>{tagline}</h2>
                </div>

                <article className="info_midia">

                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

                    <div className="text_midia">
                        <h2>{title}</h2>
                        <p>{overview}</p>

                        <div className="sub_info">
                            {serie && (
                                <>
                                    <p><b>Data de lançamento:</b> {release_date}</p>
                                    <p><b>Tempo de exibição:</b> {runtime} minutos</p>
                                    <p><b>Popularidade:</b> {popularity}</p>
                                </>
                            )}

                            {/* <p><b>Data de lançamento:</b> {release_date}</p>
                            <p><b>Tempo de exibição:</b> {runtime} minutos</p>
                            <p><b>Nota:</b> {vote_count}</p>
                            <p><b>Nota:</b> {popularity}</p> */}
                        </div>
                        
                        <button>Adicionar aos favoritos</button>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default ListMidia;