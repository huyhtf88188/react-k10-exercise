import { useDispatch, useSelector } from "react-redux";
import { removeProduct, setProduct } from "../action/productAction";
import instance from "../axios/axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);

  const handleRemoveProduc = async (id) => {
    try {
      const productId = await instance.delete(`products/${id}`);
      console.log(productId);
      dispatch(removeProduct(id));
    } catch (err) {
      toast.error("xóa không thành công");
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch(setProduct(data));
    })();
  }, []);
  return (
    <>
      <h1>Product list</h1>
      <Link className="btn btn-primary" to="/admin/products/add">
        Add products
      </Link>
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
          {productsList.products &&
            productsList.products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleRemoveProduc(item.id);
                      }}
                    >
                      Remove
                    </button>
                    <Link
                      className="btn btn-primary"
                      to={`/admin/products/update/${item.id}`}
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
