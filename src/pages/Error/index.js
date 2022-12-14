import { Link } from "react-router-dom";
import './error.css';

function Error(){
    return(
        <section className="error">
            <h2>Página não encontrada :( </h2>

            <Link to={'/'}>Voltar para a página original</Link>
        </section>
    )
}

export default Error;