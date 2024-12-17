import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  fetchProducts,
  deleteProduct,
} from "../features/products/productsAction";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const handleRemoveProduc = async (id) => {
    try {
      dispatch(deleteProduct(id));
    } catch (err) {
      toast.error("xóa không thành công");
    }
  };

  useEffect(() => {
    (async () => {
      // const { data } = await instance.get("/products");
      dispatch(fetchProducts());
    })();
  }, [dispatch]);

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
          {products.length ? (
            products.map((item, index) => {
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
            })
          ) : (
            <tr>
              <td>không có sản phẩm</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
