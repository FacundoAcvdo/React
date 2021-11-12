//Los fragmentos son capaces de crear elementos "invisibles" para el DOM, se pueden crear usando etiquetas sin nombre <> </>
//Los atributos funcionan de la misma forma que en HTML aunque algunos tienen sintaxis diferente como el caso de class = className
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Productos from "./Productos"
import ItemDetailContainer from "./ItemDetailContainer"
import Home from './Home'
import { CartProvider } from './CartContext'
import Carrito from './Cart'


const App = () => {
    return(
        <CartProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/productos/" component={Productos}/>
                    <Route exact path="/categoria/:id" component={Productos}/>
                    <Route exact path="/producto/:id" component={ItemDetailContainer}/>
                    <Route exact path="/carrito/" component={Carrito}/>
                </Switch>
            </BrowserRouter>
        </CartProvider>
    )
}
//Exportar componente
export default App