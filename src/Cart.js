import { useContext, useEffect, useState, memo} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import NavBar from "./NavBar"
import { firestore } from "./firebase"

const Cart = () => {

    const [Cart]=useContext(CartContext)

    let [total,setTotal]=useState(0)

    let valorTotal = {total}

    let [Notificacion, SetNotificacion] = useState("")

    useEffect(() => {
        let tot = 0

        Cart.forEach(element => {
            console.log(element.precio)
            tot =+ tot + (element.precio*element.cantidad)
        });

        setTotal(tot)

    },[valorTotal])

    function Eliminar(index){
        Cart.splice(index,1)
    }

    function EliminarTodo(){
        SetNotificacion("")
        Cart.splice(0,Cart.length)
    }

    const FinalizarCompra = () => {

        let comprador = {
            nombre:"Facundo",
            telefono:"1234567890",
            email:"facundo@gmail.com"
        }

        const orden = {
            comprador: comprador,
            items: Cart,
            total: total
        }

        if(Cart.length>0){
            const collection = firestore.collection('ordenes')
            const query = collection.add(orden)
    
            query.then(resultado => {
                SetNotificacion(`-    Su pedido se realizó correctamente. Tu código de compra es: ${resultado.id}    -`)
            })
        }
        else if(Cart.length<=0){
            SetNotificacion("Tu carrito no contiene productos")
        }
    }

    console.log(Cart)

    return (
        <>
            <NavBar/>
            <div id="Carrito">
                <h2>Productos en carrito</h2>
                {Cart.length ? Cart.map((item,index)=>{
                    return(
                        <div className="TarjetaCarrito" key={index}>
                            <img src={item.img} alt="product" className="productoImgCart"/>
                            <Link to="/carrito" className="delete" onClick={()=>Eliminar(index)} title="Eliminar item"><i className='bx bx-minus bx-fade-right'></i></Link>
                            <div>
                                <h2>{item.titulo}</h2>
                                <p>{item.descripcion}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>ARS {item.precio*item.cantidad}$</p>
                            </div>
                        </div>
                    )
                }): <p>- No hay productos en el carrito -</p>}

                
                <div id="CartButton">
                    <Link to="/carrito" className="CartButton" onClick={EliminarTodo} title="Eliminar todo"><i className='bx bx-x bx-flashing' ></i></Link>
                    <div className="CartButton FinalizarCompra" onClick={FinalizarCompra} title="Finalizar Compra">Finalizar Compra</div>
                </div>
                <p>Total ARS {total}$</p>
                <p className="Notificacion">{Notificacion}</p>
            </div>
        </>
    );
}
 
export default memo(Cart)

