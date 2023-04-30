import axios from "axios";
import { Product } from "../objects/product";
const endpoint = "https://dummyjson.com/products";
export const services = {
  getAll: (props: {
    limit: number;
    skip: number;
  }): Promise<{
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }> => {
    return handleResponse(axios.get(endpoint, { params: props }));
  },
};

export function handleResponse(response: Promise<any>) {
  return response.then(
    (text: any) => {
      return text.data;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
}
