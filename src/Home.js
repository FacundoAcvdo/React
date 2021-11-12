import NavBar from "./NavBar";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="fondoOscuro">
                <NavBar color="oscuro"/>
                <section id="home">
                    <img src="imagenes/centro.jpg" alt="logo" className="logo"/>
                    <div className="relativo">
                        <Link to={"/productos/"}><i className='bx bx-right-arrow bx-flashing flecha' ></i></Link>
                    </div>
                </section>
            </section>
        </>
    );
}
 
export default Home;