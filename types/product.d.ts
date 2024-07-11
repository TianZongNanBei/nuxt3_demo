export type Product = {
  id: string;
  pictures: string[];
  title: string;
  alt: string;
  target: string;
  type: number;
};

export interface IProduct {
  code: string;
  msg: string;
  result: Product[];
}
