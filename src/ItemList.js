//Implementar varias tarjetas de items y pasarle los datos mediante los props en forma de ARRAY que rescate desde la promesa en ItemListContainer
import {useState,useEffect} from 'react'
import { firestore } from "./firebase"
import Items from "./Items.js"

const ItemList = (props) => {

    const [items, setItems] = useState([]);

    const id = props.id

    useEffect(() => {

        const referencia = firestore.collection("productos")
        let consulta 
        if (id === undefined) {
            consulta = referencia.get()
        }else{
            consulta = referencia.where("precio", "==", parseInt(id)).get()
        }
        consulta
            .then((resultado)=>{
                const datosFinales = []

                resultado.forEach(producto=>{
                    const id = producto.id
                    const datos = producto.data()
                    const productoFinal = {id,...datos}
                    datosFinales.push(productoFinal)
                })

                setItems(datosFinales)
            })

    },[id])

    const [carga, setCarga] = useState(false)

    useEffect(() => {
        setCarga(true)
        setTimeout(()=>{
            setCarga(false)
        },3000)
    },[])

    if(carga){
        return(
            <i className='bx bx-loader-alt bx-spin' id="loader"></i>
        )
    }
    else{
    return (
        <>
            {items.length > 0 && items.map((item, index) => {
                return <Items 
                    key={index}
                    id={item.id} 
                    img={item.img}
                    title={item.title} 
                    precio={item.precio} 
                    />
                })
            }
        </>
    )}
}
 
export default ItemList;