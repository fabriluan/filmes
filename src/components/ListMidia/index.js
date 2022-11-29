import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import Load from "../Load";
import "./listmidia.css";
import { BsFillHeartFill } from "react-icons/bs";
import { toast } from 'react-toastify';

function ListMidia({id, redirect, serie, filme}){
    const [movie, setMovie] = useState([]);
    const [load, setLoad] = useState(true);
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
                setLoad(false);
            })
            .catch(()=>{
                navigate('/', {replace: true});
                return;
            })
        }

        LoadInfo();
    }, [id, navigate])

    const Favorite = ()=>{
        const minhaList = localStorage.getItem('@favorite');

        let favoriteSave = JSON.parse(minhaList) || [];

        const checkFavorite = favoriteSave.some( (favorite) => favorite.id === movie.id);

        if(checkFavorite){
            toast.error('Já está favoritado')
            return;
        }

        favoriteSave.push(movie);
        localStorage.setItem('@favorite', JSON.stringify(favoriteSave));
        toast.success('Favoritado com sucesso');
    }

    console.log(movie)

    const {backdrop_path, poster_path, overview, release_date, runtime, tagline, title, name, vote_count, popularity, first_air_date, number_of_seasons} = movie


    if(load){
        return(
            <Load/>
        )
    }
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
                        <h2>{name}</h2>
                        <p>{overview}</p>

                        <div className="sub_info">
                            {serie && (
                                <>
                                    <p><b>Data de lançamento:</b> {first_air_date}</p>
                                    <p><b>Temporadas:</b> {number_of_seasons}</p>
                                    <p><b>Popularidade:</b> {popularity}</p>
                                </>
                            )}

                            {filme && (
                                <>
                                    <p><b>Data de lançamento:</b> {release_date}</p>
                                    <p><b>Tempo de exibição:</b> {runtime} minutos</p>
                                    <p><b>Nota:</b> {vote_count}</p>
                                </>
                            )}
                        </div>
                        
                        <button onClick={Favorite}><BsFillHeartFill/> <p>Adicionar aos favoritos</p></button>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default ListMidia;