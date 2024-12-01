import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create } from "../../axios";
import { updateById } from "../../axios/index";
import "../../index.css";
import { getById } from "../../axios";

const ProductForm = () => {
  const { id } = useParams();
  console.log("id: ", id);
  const nav = useNavigate();
  const initValue = {
    title: "",
    price: 0,
    description: "",
  };

  const [product, setProduct] = useState(initValue);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data = await getById("/products", id);
          setProduct({
            title: data.title,
            price: data.price,
            description: data.description,
          });
        } catch (error) {
          console.error("Không tìm thấy sản phẩm: ", error);
        }
      })();
    }
  }, [id]);

  // Cập nhật state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Gửi dữ liệu đi
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   (async () => {
  //     // try {
  //     // 	const res = await fetch("http://localhost:3000/products", {
  //     // 		method: "POST",
  //     // 		headers: {
  //     // 			"Content-Type": "application/json",
  //     // 		},
  //     // 		body: JSON.stringify(product),
  //     // 	});
  //     // 	const data = await res.json();
  //     // 	console.log(data);
  //     // 	// Thong bao them thanh cong.
  //     // 	confirm("Them thanh cong, ban muon quay lai danh sach san pham khong?") && nav("/admin/products");
  //     // 	// Cap nhat lai danh sach san pham neu nguoi dung quay lai danh sach san pham
  //     // 	// Neu nguoi dung o lai ProductForm, sau khi submit thi phai reset form.
  //     // } catch (error) {
  //     // 	console.log(error);
  //     // }

  //     if (id) {
  //       // logic update
  //       const res = await updateById("/products", id, product);
  //       console.log(res);
  //       if (res.status === 200) {
  //         alert("cập nhật sản phẩm thành công");
  //       } else {
  //         // logic add
  //         const res = await create("/products", product);
  //         console.log(res);
  //         if (res.status === 201) {
  //           alert("Thêm mới sản phẩm thành công");
  //         }
  //       }
  //       nav("/admin/products");
  //     }
  //     // logic chung
  //   })();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      // update
      const res = await updateById("/products", id, product);
      if (res.status === 200) {
        alert("cập nhật thành công");
      }
    } else {
      //create
      const res = await create("/products", product);
      if (res.status === 201) {
        alert("thêm mới thành công");
      }
    }
    nav("/admin/products");
  };
  return (
    <div className="container form-admin">
      <h1>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form action="" className="formSubmit">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="price"
            placeholder="Title"
            defaultValue={product.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            defaultValue={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            type="text"
            name="description"
            id="description"
            placeholder="Nội dung"
            defaultValue={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button className="btn btn btn-primary w-100" onClick={handleSubmit}>
            {id ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
