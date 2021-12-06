import './header.style.css'

const Header = (props) => {

    return(

        <div className="header">
            <h1>{props.children}</h1>
            <image src={props.image} alt='react-icons'/>

        </div>
    )
}
export default Header