import { useEffect } from "react";
import {
  fetchProducts,
  removeProduct,
} from "../../features/products/productActions";

import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemove = async (id: number | string) => {
    if (confirm("are you sure")) {
      dispatch(removeProduct(+id));
    }
  };

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      <h1>Trang Sản Phẩm</h1>
      <Link className="btn btn-primary mb-5 mt-3" to="/admin/products/add">
        Add Product
      </Link>
      <table className="table table-stripred table-bordered">
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
          {products &&
            products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className=" btn btn-danger"
                      onClick={() => {
                        typeof item.id === "number" &&
                          !isNaN(item.id) &&
                          handleRemove(item.id);
                      }}
                    >
                      Remove
                    </button>
                    <Link
                      to={`/admin/products/update/${item.id}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
