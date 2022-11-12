import { Link } from 'react-router-dom';
import './header.css'

function Header(){
    return(
        <header>
            <div className='center'>
                <Link to={'/'}><h2>Filmes</h2></Link>

                <ul>
                    <li><Link>Filmes</Link></li>
                    <li><Link>Series</Link></li>
                    <li><Link to={'/favoritos'} >Meus Favoritos</Link></li>          
                </ul>
            </div>
        </header>
    )
}

export default Header