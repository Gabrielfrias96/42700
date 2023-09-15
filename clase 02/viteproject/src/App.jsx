import { productos } from "./products";
import "./App.css";
import CardCustom from "./components/Card";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList/ItemList";
import Item from "./components/Item/Item";
import Layout from "./components/Layout/Layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState(null);

  const getData = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  const requestJsonPlaceHolder = () =>
    fetch("https://fakestoreapi.com/products");

  // WWWw.miecommers.com/products/

  useEffect(() => {
    requestJsonPlaceHolder()
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <button onClick={() => setFilterByCategory(null)}>Todo</button>
      <button onClick={() => setFilterByCategory("jewelery")}>Joyeria</button>
      <ItemList>
        {isLoading ? (
          <div> Cargando ...</div>
        ) : products && !filterByCategory ? (
          products.map((producto) => (
            <Item
              id={producto.id}
              nombre={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              imgUrl={producto.image}
            ></Item>
          ))
        ) : (
          products
            ?.filter((producto) => producto.category === filterByCategory)
            .map((producto) => (
              <Item
                id={producto.id}
                nombre={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                imgUrl={producto.image}
              ></Item>
            ))
        )}
      </ItemList>
    </Layout>
  );
}

export default App;
