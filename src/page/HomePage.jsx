import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./homePage.module.css";
import { fetchProducts } from "../features/products/productsAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    (async () => {
      dispatch(fetchProducts());
    })();
  }, [dispatch]);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>Danh Sách Sản Phẩm</h1>
        <div className={styles.row}>
          {products &&
            products.map((item, index) => (
              <div className={styles.col} key={index}>
                <img src="https://picsum.photos/200/300" alt="" />
                <p>
                  <strong>SKU :</strong> {item.id}
                </p>
                <p>
                  <strong>Tên Sản Phẩm :</strong> {item.title}
                </p>
                <p>
                  <strong>Giá :</strong> {item.price}
                </p>
                <p>
                  <strong>Mô Tả :</strong> {item.description}
                </p>
                <div className="mb-3 mt-5">
                  <button className="btn btn-primary">Xem Chi Tiết</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
