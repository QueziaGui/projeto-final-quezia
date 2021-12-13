import './ajuda.styles.css';
//import Header from '../../Componentes/Header/Header';
import Menu from '../../Componentes/Menu/Menu';
import Footer  from '../../Componentes/Footer/Footer';


const Ajuda = ()=> {
     
    return (
         <>
           <Menu/>
           <h1>Veja como pode ajudar!</h1>
            <div className= "ong">
            <p>As ongs necessitam da sua ajuda. Para que o trabalho de amparo aos animais seja realizado de forma eficiente.
              As doações podem acontecer em dinheiro ou produtos. Mas também há itens que você tem em casa como água, ração, comida, remédios. Esses produtos são muito importantes. 
             E qualquer ajuda é bem-vinda. O pouco para você será o muito para nossos pets. 
             Divulgue essa ideia.
             </p>
             </div>

            <Footer />
         </>
     
    )
    
    
    }
    export default Ajuda