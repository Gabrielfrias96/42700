import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, descripcion, imgUrl }) => {

  const handleClick = (event) => {
    //parametro event captura el evento sintetico
    //Detiene el comportamiento por default
    event.preventDefault()
    // Detiene la propagacion de los eventos por defaults de sus padres
    event.stopPropagation()

    console.log(id, nombre, precio , descripcion)
  }

  return (
    <div>
      <img style={{width:"200px", height:"120px"}} src={imgUrl} />
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
