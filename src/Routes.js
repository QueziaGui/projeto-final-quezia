import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Ongs from './Pages/Ongs/Ongs';
import Ajuda from './Pages/Ajuda/Ajuda';
import Jogos from './Pages/Jogos/Jogos';

function Rotas(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>                
            <Route path="/Ongs" component={Ongs}/> 
            <Route path="/Ajuda" component={Ajuda}/>
            <Route path="/Jogos" component={Jogos}/>
 
    </Switch>   
    </BrowserRouter>
  )
}
export default Rotas