import { Link } from 'react-router-dom';
import './style.css'


const Menu =() => {
return (
    
    <ul className="navbar">
        <li>
        <Link className="link" to='../../Pages/Home/'>Home</Link>
        </li>
        <li>
        <Link className="link" to='../../Pages/Ongs'>Ongs</Link>
        </li>
        <li>
        <Link className="link" to='../Pages/Doacao'>Doação</Link>
        </li>
        <li>
        <Link className="link" to='../../Pages/Jogos'>Jogos</Link>
     </li>
    </ul>
    
)
}
export default Menu