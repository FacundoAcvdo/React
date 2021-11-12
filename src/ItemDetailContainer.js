import {useState,useEffect, useContext} from 'react'
import { CartContext } from './CartContext';
import { firestore } from "./firebase"
import ItemCount from './ItemCount';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';

const ItemDetailContainer = (props) => {

    const id = props.match.params.id;

    const [items, setItems] = useState({});

    useEffect(()=>{
        firestore.collection("productos").doc(id)
        .get()
            .then((resultado) => {
                let datosFinales = {}
                const id = resultado.id
                const datos = resultado.data()
                datosFinales = {id,...datos}

                setItems(datosFinales)
            })
    },[id])

    const [Cart,setCart] = useContext(CartContext)

    let cantidad = 0

    function SumarCarrito(){

        const ProductoCarrito= {
            id:items.id,
            img:items.img,
            titulo:items.title,
            descripcion:items.descripcion,
            precio:items.precio,
            cantidad:cantidad
        }
        const Temp = Cart
        Temp.push(ProductoCarrito)
        setCart(Temp)
    }

    function onAdd(contador){
        cantidad = contador
    }


    return (
        <>
            <NavBar color="oscuro"/>
            <div className="tarjetaDetalles"> 
                <img src={items.img} alt="product" className="productoImgBig"/>
                <div className="detalles">
                    <p className="detalleTitulo">{items.title}</p>
                    <p className="detalleDescripcion">{items.descripcion}</p>
                    <ItemCount stock={10} onAdd={onAdd} SumarCarrito={SumarCarrito}/>
                    <p className="detallePrecio">ARS {items.precio}$</p>
                </div>
            </div>
            <ItemListContainer/>
        </>
    )
}
 
export default ItemDetailContainer;