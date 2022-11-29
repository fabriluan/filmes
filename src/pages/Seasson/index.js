import ListMidia from "../../components/ListMidia";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Seasson(){

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    })
    
    const { id } = useParams();

    return(
        <>
        <ListMidia id = {id} redirect={'tv'} serie={true}/>
        </>
    )
}

export default Seasson;