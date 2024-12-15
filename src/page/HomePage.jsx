import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../action/productAction";
import instance from "../services";
import styles from "./homePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch(setProduct(data));
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>Danh Sách Sản Phẩm</h1>
        <div className={styles.row}>
          {state.products &&
            state.products.map((item, index) => (
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
