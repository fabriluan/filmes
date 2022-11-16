import ListMidia from "../../components/ListMidia";
import { useParams } from "react-router-dom";

function Seasson(){
    
    const { id } = useParams();

    return(
        <>
        <ListMidia id = {id} redirect={'tv'} serie={true}/>
        </>
    )
}

export default Seasson;