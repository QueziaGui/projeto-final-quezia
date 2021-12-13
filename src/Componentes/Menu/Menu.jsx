import { Link } from "react-router-dom";
import './menu.styles.css'


const Menu =() => {
return (
    
    <ul className="navbar">
        <li>
        <Link className="link" to='/'>Home</Link>
        </li>
        <li>
        <Link className="link" to='/Ongs'>Ongs</Link>
        </li>
        <li>
        <Link className="link" to='/Ajuda'>Ajuda</Link>
        </li>
        <li>
        <Link className="link" to='/Jogos'>Jogos</Link>
     </li>
    </ul>
    
)
}
export default Menu