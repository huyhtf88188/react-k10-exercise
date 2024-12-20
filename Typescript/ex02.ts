type TProduct = {
  title: string;
  price: number;
};

let productA: TProduct = { title: "tivi", price: 200 };

enum ProductSize {
  "S",
  "M",
  "L",
  "XL",
  "XXL",
}
interface IProduct {
  title: string;
  price: number;
  description: string;
  stock: number;
  sku: string;
  size: ProductSize;
}

interface I {
  title: string;
  price: number;
  des?: string;
}

let i: I = {
  title: "name",
  price: 455,
};
