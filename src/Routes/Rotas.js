import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Componentes/Home/Home'
import Ongs from '../Pages/Ongs/Ongs';
import Doacao from '../Pages/Doacao/Doacao';
import Jogos from '../Pages/Jogos/Jogos';

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="../Pages" exact component={Home}/>                
            <Route path="../Pages" component={Ongs}/> 
            <Route path="../Pages" component={Doacao}/>
            <Route path="../Pages" component={Jogos}/>
 
 </Switch>   
    </BrowserRouter>
  )
}
export default Routes