import api from "../../service/api";
import { useEffect, useState } from "react";
import "./home.css";
import List from "../../components/List";

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
            
            setBanner(response.data.results[1].backdrop_path);
        }

        LoadBanner()
    })

    return(
        <section className="section_home">
            <div className="center">
                <section className="banner_movies" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${banner})`}}>
                    <h2>Filmes em cartaz</h2>
                </section>

                <List />
            </div>
        </section>
    )
}

export default Home;