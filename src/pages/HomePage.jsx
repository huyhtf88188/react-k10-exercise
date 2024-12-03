import { useEffect, useState } from "react";
import { getAll } from "../axios";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

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
      <div className="container">
        <h2>Danh Sách Sản Phẩm</h2>
        {productsHome.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>${item.title}</Card.Title>
              <Card.Text>${item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
