import ListMidia from "../../components/ListMidia";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function Movie(){

    const { id } = useParams();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [])

    return(
        <>
        <ListMidia id = {id} redirect={'movie'} filme={true}/>
        </>
    )
    
}

export default Movie;