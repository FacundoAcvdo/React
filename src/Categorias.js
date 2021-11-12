import { Link } from 'react-router-dom'

const Categorias = () => {
    return (
        <>
            <div id="contenedorCategorias">
                <Link to="/categoria/1000" className="categorias">Precio: 1000</Link>
                <Link to="/categoria/1250" className="categorias">Precio: 1250</Link>
                <Link to="/categoria/1500" className="categorias">Precio: 1500</Link>
                <Link to="/categoria/1750" className="categorias">Precio: 1750</Link>
            </div>
        </>
    );
}
 
export default Categorias;