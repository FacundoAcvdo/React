import ItemList from "./ItemList.js"

const ItemListContainer = (props) => {

    const id = props.id

    return (
        <>
            <section className="productos">
                <ItemList id={id}/>
            </section>
        </>
    );
}
 
export default ItemListContainer;