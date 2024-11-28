import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // cách 2 :
    fetch(`http://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));

    // // cách 1 :
    // (async () => {
    //   try {
    //     const res = await fetch(`http://dummyjson.com/products/${id}`);
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();

    // fetchAPI();
  }, []);

  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col-lg-6 col-md-6">
        <img
          src={products.thumbnail}
          alt={products.title}
          style={{ width: "80%" }}
        />
      </div>
      <div className="col-lg-6 col-md-6" style={{ marginTop: "8rem" }}>
        <div key={products.id}>
          <p>
            <strong>Mô Tả :</strong> {products.description}
          </p>

          <h3>{products.title}</h3>
          <p>
            <strong>Giá:</strong> {products.price}
          </p>
          <div className="btn-buy">
            <Link to={`/products/${products.id}`} className="btn btn-danger">
              Mua Ngay
            </Link>
            <Link to={`/products/${products.id}`} className="btn btn-danger">
              Thêm vào Giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
