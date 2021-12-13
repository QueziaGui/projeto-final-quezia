//import Header from '../../Componentes/Header/Header';
import Menu from '../../Componentes/Menu/Menu';
import '../Jogos/jogos.styles.css';
import Footer  from '../../Componentes/Footer/Footer';
import jogoBigFarm from '../../assets/jogoBigFarm.JPG'
import jogoCute from '../../assets/jogoCute.JPG'
import jogoPetSalon from '../../assets/jogoPetSalon.JPG'
import jogopetConnet from '../../assets/jogoPetConnet.JPG'


const Jogos = ()=> {
     return (
          <>
     <Menu/>
     <h1>Um pouco de diversão. Nos links abaixo você terá acesso à jogos!</h1>
     <section className="jogo container" id="jogo">
    <h3 className="jogo__titulo"></h3>
    <div className="jogo__box">
        
        <div className="jogo__perfil">
            <a href="https://www.jogosjogos.com/jogar-jogo/goodgame-big-farm.html/" target="_blank">
                <img src={jogoBigFarm} alt= 'jogo fazenda'/>
                <p>Big Farm</p>
            </a>
        </div>
        <div className="jogo__perfil">
            <a href="https://www.jogosjogos.com/jogar-jogo/cute-puppy-care.html" target="blank">
                <img src={jogoCute} alt= 'jogo cute'/>
                <p>Jogo Cute!</p>
            </a>
        </div>
    
        <div className="jogo__perfil">
            <a href="https://www.jogos360.com.br/pet_salon_2.html/" target="blank">
                <img src={jogoPetSalon} alt= 'jogo pet shop'/>
                <p>Pet Salon</p>
            </a>
        </div>
       
        <div className="jogo__perfil">
            <a href="https://www.1001jogos.com.br/animais/pet-connect-kids" target="blank">
               <img src={jogopetConnet} alt= 'jogo cuidar de pet'/>
                <p>Pet Connect</p>
            </a>
        </div>
     </div>  
</section>
     <Footer />
     </>
     )
     
     }
     export default Jogos
 