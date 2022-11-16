import api from "../../service/api";
import { useEffect, useState } from "react";
import "./home.css";
import ListMovie from "../../components/ListMovie";

function Home(){

    const [banner, setBanner] = useState([]);

    useEffect(()=>{
        async function LoadBanner(){
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: 'd71237d08ef1ed2a882b49bf5d36150c',
                    language: 'pt-BR'
                }
            })
            
            setBanner(response.data.results[0].backdrop_path);
            // setBanner(response.data.results);

        }

        LoadBanner()
    })

    return(
        <section className="section_home">
            <div className="center">
                <section className="banner_movies" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${banner})`}}>
                    <h2>Os melhores filmes você só encontra aqui</h2>
                </section>
            </div>

            <ListMovie title={'Filmes em cartaz'} direct={"/movie/now_playing"} link={'filmes'}/>
            <ListMovie title={'Filmes em alta'} direct={"/movie/popular"} link={'filmes'}/>
            <ListMovie title={'Filmes melhores avaliados'} direct={"/movie/top_rated"} link={'filmes'}/>

            <ListMovie title={'Séries em lançamento'} direct={"/tv/on_the_air"} link={'series'}/>
            <ListMovie title={'Séries em alta'} direct={"/tv/popular"} link={'series'}/>
            <ListMovie title={'Séries melhores avaliadas'} direct={"/tv/top_rated"} link={'series'}/>

        </section>
    )
}

export default Home;