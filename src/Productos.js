import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Categorias from "./Categorias";

const Productos = (props) => {

    const id = props.match.params.id

    return (
        <>
            <NavBar color="oscuro"/>
            <Categorias/>
            <ItemListContainer id={id}/>
        </>
    );
}
 
export default Productos;