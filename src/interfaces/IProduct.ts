export interface IProduct {
  id?: number | string | undefined;
  title: string;
  price: number;
  description?: string;
  thumbnail?: string;
  images?: string[];
}
