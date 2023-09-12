import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./styles.css";

const Navbar = () => {

  const navegacion = ['Home', 'Tienda', 'Contacto', 'Ayuda']

  const handleConsole = () => console.log('Aca estoy')

  return (
    <div className="navbar">
      <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
      <CartWidget/>
    </div>
  );
};

export default Navbar;
