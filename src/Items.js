import { Link } from 'react-router-dom'

const Items = (props) => {

    return (
        <>
            <div className="tarjeta"> 
                <Link to={`/producto/${props.id}`}><img src={props.img} alt="product" className="productoImgMin"/></Link>
                <p className="titulo">{props.title}</p>
                <p className="descripcion">{props.descripcion}</p>
                <p className="precio">ARS {props.precio}$</p> 
            </div>
        </>
    );
}
 
export default Items;