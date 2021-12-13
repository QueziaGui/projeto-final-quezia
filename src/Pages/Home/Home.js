import './home.styles.css';
import Menu from '../../Componentes/Menu/Menu';
//import Header from '../../Componentes/Header/Header';
import cao from '../../assets/cao.jpg'
import Footer  from '../../Componentes/Footer/Footer';



const Home = () => {
    return(
      <>
        <Menu />
        
        <h1 className='titulo'>Proteção Animal!</h1>
        
        <div>
          <img src={cao} className="imagelogo" alt="logo"/>
        </div>
        
        <div className="texto">
          <h2>Legislação</h2>
          <p>
            Há um árduo trabalho por parte da sociedade e autoridades em conscientizar as pessoas sobre 
            o tratamento adequado dos animais.
             A agência de investigação dos Estados Unidos FBI tem realizado estudos sobre o perfil de 
             pessoas que maltratam animais com potencial desenvolvimento de se tornar um psicopata. 
          </p>
          <p>De acordo com psiquiatras as pessoas que maltratam animais ignoram que estes seres vivos sentem dores,
             são apegadas as pessoas que lhe cercam e que necessitam de cuidados.</p>

          <p>Partindo deste pressuposto observamos que é necessário estar atento a comportamento das pessoas quando maltratam os animais.
             As autoridades devem ser acionadas imediatamente. Fonte pesquisa: " https://radiopeaobrasil.com.br/psiquiatra-forense-aponta-que-maltratar-animais-e-indicio-de-psicopatia/"
          </p>

          
          
          <ul className="declaracao"> Leia também sobre a Declaração Universal dos Direitos dos Animais – Unesco 1978
          Algumas ações consideradas maus-tratos:

          <li> 
          •	não dar água e comida diariamente;
          •	manter preso em corrente;
          •	manter em local sujo e pequeno demais para que o animal possa andar ou correr;
          •	deixar sem ventilação ou luz solar e desprotegido do vento, sol e chuva;
          •	negar assistência veterinária a animal doente ou ferido;
          •	obrigar a trabalho excessivo ou superior à sua força;
          •	abandonar;
          •	ferir;
          •	envenenar;
          •	utilizar para rinha, farra-do-boi, etc,;
          •	vivissecção;
          •	caça;
          </li>
          </ul>

        </div>
        <div className= "saibaMais">
          <button href= "https://radiopeaobrasil.com.br/psiquiatra-forense-aponta-que-maltratar-animais-e-indicio-de-psicopatia/">
            Saiba Mais
          </button>

        </div>
        <div>
          <h2>Cartão pet download</h2>
          <a href="http://www.rganimal.com.br/RG/editar-carteira-azul.php" download="newfilename">Download do pdf</a>
        </div>
      
        <Footer />
      </>
    )
  }
  
  export default Home