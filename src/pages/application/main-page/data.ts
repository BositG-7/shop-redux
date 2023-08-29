import { v4 as uuidv4 } from "uuid";

import iphone15 from "./imgs/iPhone-15-Rumors.webp";

import IPAD5 from "./imgs/02672ce1fbd8b74c40231414b15a8327e4c59576ef4a4ee9417be4f80da8702f_mqkheB_640l.jpg";
import macbook from "./imgs/macbookm2vsm1.jpg";

const products = [
  {
    name: "IPHONE 15",
    brand: "APPLE",
    img: iphone15,
    price: 15000000,
    id: uuidv4(),
  },
  {
    name: "IPAD 5",
    brand: "APPLE",
    img: macbook,
    price: 9900009,
    id: uuidv4(),
  },
  {
    name: "MACBOOK Air M1",
    brand: "APPLE",
    img: IPAD5,
    price: 15000000,
    id: uuidv4(),
  },
];

const initialState = {
  products,
  korzine: [] as any[],
};

export default initialState;
