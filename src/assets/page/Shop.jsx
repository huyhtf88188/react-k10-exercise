import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let url = "";
    if (searchValue === "") {
      url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    } else {
      url = `https://dummyjson.com/products/search?q=${searchValue}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [limit, skip, searchValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectLimit = (e) => {
    const selectedLimit = e.target.value;

    if (selectedLimit === "all") {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setLimit(data.total);
          setSkip(0);
          setPage(1);
        });
    } else {
      setLimit(selectedLimit);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setSkip((prev) => prev - 10);
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setSkip((prev) => prev + 10);
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        value={searchValue}
        onChange={handleSearch}
      />
      <select onChange={(e) => handleSelectLimit(e)}>
        <option value={10}>Hiển thị 10 sản phẩm</option>
        <option value={20}>Hiển thị 20 sản phẩm</option>
        <option value={30}>Hiển thị 30 sản phẩm</option>
        <option value="all">Hiển thị tất cả sản phẩm</option>
      </select>
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6">
            <Link to={`/products/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
            </Link>

            <Link to={`/products/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>Giá: {item.price}</p>
            <Link to={`/products/${item.id}`} className="btn btn-danger">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
      <button className="btn btn-danger" onClick={handlePrev}>
        Prev
      </button>
      <button className="btn btn-danger" onClick={handleNext}>
        Next
      </button>
      <div>Trang {page}</div>
    </div>
  );
};

export default Shop;
