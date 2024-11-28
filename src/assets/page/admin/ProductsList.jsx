import { useState, useEffect } from "react";
import "./productsList.css";
const ProductsList = () => {
  const [productsListAdmin, setProductsListAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsListAdmin(data);
      });
  }, []);

  async function handleRemoveProduct(id) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm?")) {
      try {
        await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        });

        const deleteProduct = await fetch(
          "http://localhost:3000/products"
        ).then((res) => res.json());
        setProductsListAdmin(deleteProduct);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsListAdmin.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <strong>{item.title}</strong>
              </td>
              <td>{item.price}$</td>
              <td>{item.description}</td>
              <td className="status">
                <button onClick={() => handleRemoveProduct(item.id)}>
                  Remove
                </button>
                {/* <button>Update</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
