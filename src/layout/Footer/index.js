import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl'
import './footer.css';

function Footer(){
    return(
        <footer>
            <div className="center">
                <section className="info_about">

                    <h2>Minhas redes socias</h2>

                    <div className="about_rd">
                        <a href='https://www.instagram.com/fabri_luan/' target='blank'><SlSocialInstagram /></a>
                        <a href='https://www.linkedin.com/in/fabricio-cipriano-a72672248/' target='blank'><SlSocialLinkedin /></a>
                        <a href='https://github.com/fabriluan' target='blank'><SlSocialGithub /></a>
                    </div>
                </section>

                <section className="info_api">
                    <h2>API utilizada</h2>
                    <a href='https://www.themoviedb.org/' target={'blank'}><img src="./assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" /></a>
                </section>
            </div>

            <span>Todos os direitos reservados para Fabricio Luan Zambão Cipriano &copy;</span>
        </footer>
    );
}

export default Footer;