import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productos);
      setIsLoading(false)
    }, 1000);
  }, []);

  return (
    <Layout>
      <ItemList>
        {
            isLoading 
            ? <p>Cargando . . .</p>
            : products.map(prod => (
                <Item  
                id={prod.id}
                nombre={prod.nombre}
                descripcion={prod.descripcion}
                />
            ))
        }
      </ItemList>
    </Layout>
  );
};

export default Home;
