import './home.styles.css';
import Menu from '../../Componentes/Menu/Menu';
//import Header from '../../Componentes/Header/Header';
import cao from '../../assets/cao.jpg'
import Footer  from '../../Componentes/Footer/Footer';



const Home = () => {
   return(
      <>
        <Menu />
        <div className='principal'> 
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
                  são apegadas as pessoas que lhe cercam e que necessitam de cuidados.
                </p>

                <p>Partindo deste pressuposto observamos que é necessário estar atento a comportamento das pessoas quando maltratam os animais.
                    As autoridades devem ser acionadas imediatamente. Fonte pesquisa: " https://radiopeaobrasil.com.br/psiquiatra-forense-aponta-que-maltratar-animais-e-indicio-de-psicopatia/"
                </p>
              </div>

          
          
            <ul className="declaracao">
                <p> Leia também sobre a Declaração Universal dos Direitos dos Animais – Unesco 1978
                    Algumas ações consideradas maus-tratos:
                </p>

            
                <li>•	não dar água e comida diariamente;</li>
            
                <li>•	manter preso em corrente;</li>
            
                <li>•	manter em local sujo e pequeno demais para que o animal possa andar ou correr;</li> 
                <li>•	deixar sem ventilação ou luz solar e desprotegido do vento, sol e chuva;</li>
                <li>•negar assistência veterinária a animal doente ou ferido;</li>
                <li>•obrigar a trabalho excessivo ou superior à sua força;</li>
                <li>•abandonar;</li>
                <li>•ferir;</li>
                <li>•envenenar;</li>
                <li>•utilizar para rinha, farra-do-boi, etc,;</li>
                <li>•vivissecção</li>
                <li>•caça</li>

            </ul>

          
                <div className="button">
                    <a href= "https://radiopeaobrasil.com.br/psiquiatra-forense-aponta-que-maltratar-animais-e-indicio-de-psicopatia/">
                      <button>Saiba Mais</button>
                    </a>
                </div>
            <div className='cartao'>
                <h2>Cartão pet download</h2>
                <a href="http://www.rganimal.com.br/RG/editar-carteira-azul.php" download="newfilename">Download do pdf</a>
            </div>
              
            <Footer />
        </div>
        
      </> 
    )

}
  export default Home