//import Header from '../../Componentes/Header/Header';
import Menu from '../../Componentes/Menu/Menu';
import '../Ongs/ongs.styles.css';
import Footer  from '../../Componentes/Footer/Footer';
import animaisCarentes from '../../assets/animaisCarentes.jpg'
import patinhasAnjo from '../../assets/patinhasAnjo.jpg'
import patinhasCarentes from '../../assets/patinhasCarentes.jpg'
import santaClara from '../../assets/santaClara.jpg'
import sosPeludo from '../../assets/sosPeludo.jpg'


const Ongs = ()=> {
    return (
         <>
    <Menu/>
    <h1>Algumas instituições que cuidam dos Pets abandonados por que deveria cuidar!</h1>

    
    <section className="ong container" id="ong">
        <h3 className="ong__titulo"></h3>
        <div className="ong__box">
            

            <div className="ong__perfil">
                <a href="https://www.instagram.com/animaiscarenteses/" target="_blank">
                    <img src={animaisCarentes} alt= 'logo animais carentes'/>
                    <p>Animais Carentes</p>
                </a>
            </div>
  

            <div className="ong__perfil">
                <a href="https://www.instagram.com/patinhascarentes/?utm_medium=copy_link" target="blank">
                    <img src={patinhasCarentes} alt= 'logo patinhas carentes'/>
                    <p>Patinhas Carentes!</p>
                </a>
            </div>
        

            <div className="ong__perfil">
                <a href="https://www.instagram.com/abrigosantaclara/" target="blank">
                    <img src={santaClara} alt= 'logo patinhas carentes'/>
                    <p>Abrigo Santa Clara</p>
                </a>
            </div>
           

            <div className="ong__perfil">
                <a href="https://www.instagram.com/patinhasdeanjo.es/" target="blank">
                   <img src={patinhasAnjo} alt= 'logo patinhas carentes'/>
                    <p>Patinhas de Anjo</p>
                </a>
            </div>

            
            <div className="ong__perfil">
                <a href="https://www.instagram.com/sospeludinhos/?hl=pt-br" target="blank">
                    <img src={sosPeludo}alt= 'logo patinhas carentes'/>
                    <p>SOS PEludinhos</p>
                </a>
            </div>
           
            <div className="ong__perfil">
                <a href="" target="blank">
                    foto:""
                    <p>Ong Nay</p>
                </a>
            </div>
         </div>  
    </section>
    <Footer />
    </>
    )
    
    }
    export default Ongs