import { Link } from 'react-router-dom'

const NavBar = (props) => {
    

    let color

    if(props.color === "oscuro"){
        color = "oscuro"
    }
    else if(props.color === "claro"){
        color = "claro"
    }

    return (
        <>
            <header>
                <Link to="/" className={color}><h1>PrismArt</h1></Link>
                <nav>
                    <Link to="/" className={color}>Inicio</Link>
                    <Link to="/productos" className={color}>Productos</Link>
                    <Link to="/preguntas" className={color}>Preguntas</Link>
                    <Link to="/contacto" className={color}>Contacto</Link>
                    <Link to="/carrito"><p className={color}>(0)<i className='bx bx-cart-alt'></i></p></Link>
                </nav>
            </header>
        </>
    );
}

export default NavBar;