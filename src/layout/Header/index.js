import { Link as Links, animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from 'react-router-dom';
import { useMemo, useRef, useState } from "react";
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import './header.css'

function Header(){

    const [home, setHome] = useState(true);
    const [out, setOut] = useState(true);
    const location = useLocation();

    useMemo(()=>{
        if(location.pathname != '/'){
            setHome(false);
            setOut(true);
        }else{
            setHome(true);
            setOut(false);
        }
    }, [location.pathname])

    function WindowTop(){
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    const app = useRef(null);
    const [icon, setIcon] = useState(true);

    function Menu(){
        // icon ? setIcon(false) : setIcon(true);

        if(icon){
            setIcon(false);
            app.current.style.display = 'flex';
        }else{
            app.current.style.display = 'none';
            setIcon(true);
        }
    }

    function Li(){
        setIcon(true);
        app.current.style.display = 'none';
    }

    return(
        <header>
            <div className='center'>

                {home &&(
                    <Link onClick={WindowTop}><h2>Filmes</h2></Link>
                )}

                {out &&(
                    <Link to={'/'}><h2>Filmes</h2></Link>
                )}

                <ul className="desktop">    

                {home &&(
                    <>
                        <li><Links to='filmes' offset={-76}>Filmes</Links></li>
                        <li><Links to='series' offset={-76}>Series</Links></li>
                        <li><Link to={'/favoritos'} >Meus Favoritos</Link></li>
                    </>
                )}

                {out &&(
                    <>
                        <li><Link to={'/'}>Filmes</Link></li>
                        <li><Link to={'/'} >Series</Link></li>
                        <li><Link to={'/favoritos'} >Meus Favoritos</Link></li>
                    </>
                )}

                </ul>

                <div className="icons" onClick={ Menu }>

                    {icon ? <AiOutlineMenu/> : <AiFillCloseCircle/>}
                    
                </div>

                <ul className="app" ref={app}>                

                {home &&(
                    <>
                        <li><Links onClick={Li} to='filmes' offset={-76}>Filmes</Links></li>
                        <li><Links onClick={Li} to='series' offset={-76}>Series</Links></li>
                        <li><Link onClick={Li} to={'/favoritos'} >Meus Favoritos</Link></li>
                    </>
                )}

                {out &&(
                    <>
                        <li><Link onClick={Li} to={'/'}>Filmes</Link></li>
                        <li><Link onClick={Li} to={'/'} >Series</Link></li>
                        <li><Link onClick={Li} to={'/favoritos'} >Meus Favoritos</Link></li>
                    </>
                )}

                </ul>

            </div>
        </header>
    )
}

export default Header