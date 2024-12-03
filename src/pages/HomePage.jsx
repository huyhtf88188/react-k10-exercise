import { useEffect, useState } from "react";
import { getAll } from "../axios";
import styles from "./homePage.module.css";

const HomePage = () => {
  const [productsHome, setProdcuctsHome] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAll("/productHome");
      setProdcuctsHome(data);
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Danh Sách Sản Phẩm</h2>
        <div className={styles.grid}>
          {productsHome.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.thumbnail}
                className={styles.image}
                alt={item.title}
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.price}>
                <strong>Giá: </strong>${item.price}
              </p>
              <p className={styles.description}>{item.description}</p>
              <button className={styles.button}>Xem Chi Tiết</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
