
import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  const navegacion = ['Home', 'Tienda', 'Contacto', 'Ayuda']

  const handleConsole = () => console.log('Aca estoy')

  return (
    <div className="navbar">
      {/* Utilizamos el componente Link de react-router-dom */}
      <h1>LOGO</h1>
      <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
      <Link to={'/cart'}>
      <CartWidget/>
      </Link>
    </div>
  );
};

export default Navbar;
