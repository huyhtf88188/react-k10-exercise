import { Link } from "react-router-dom";
import styles from "./producTable.module.css";

const ProductTable = ({ products = [], onRemove }) => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div>
        <h1 className={styles.title}>Quản lý sản phẩm</h1>
        <Link
          to={`/admin/products/add`}
          className={`btn btn-primary ${styles.addButton}`}
        >
          Add new product
        </Link>
        <table className={`table table-bordered table-striped ${styles.table}`}>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className={styles.row}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className={`btn btn-danger ${styles.actionButton}`}
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                  <Link
                    to={`/admin/products/update/${item.id}`}
                    className={`btn btn-warning ${styles.actionButton}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
