import ListMidia from "../../components/ListMidia";
import { useParams } from "react-router-dom";


function Movie(){

    const { id } = useParams();

    return(
        <>
        <ListMidia id = {id} redirect={'movie'}/>
        </>
    )
    
}

export default Movie;

