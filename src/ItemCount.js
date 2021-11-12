import {useState} from 'react';

const ItemCount = ({stock, initial = 1, onAdd, SumarCarrito}) => {

    const [contador, setContador] = useState(parseInt(initial))

    const incrementar = () =>{
        if(contador < 10){
            setContador(contador+1)
        }
        
    }

    const decrementar = () =>{
        if(contador > initial){
             setContador(contador-1)
        }
    }

    function agregar (){
        onAdd(contador)
        SumarCarrito()
    }
    
    return (

        <>
            <div className="cantidad">
                <button className="operadores" onClick={decrementar}>-</button>
                <p className="cantidadNum">{contador} </p>
                <button className="operadores" onClick={incrementar}>+</button>
            </div>
            <button className="agregarCarrito" onClick={agregar}>Agregar</button>
        </>
    );
}
 
export default ItemCount;