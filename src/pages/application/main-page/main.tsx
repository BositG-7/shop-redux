import React, { useState } from "react";
import { Box, Button, Flex } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

import Korzina from "../korzina-page/korzina";

import { addItem } from "./shopreducer"; // Importing the new action

import "./main.scss";

const Main = () => {
   const [isKorzine, setKorzine] = useState(false);
   const products = useSelector((state: any) => state.products);
   const korzine = useSelector((state: any) => state.korzine); // Update the korzine selector
   const dispatch = useDispatch();

   const addToCart = (product: any) => {
      dispatch(addItem(product)); // Using the new action
   };

   if (isKorzine) return <Korzina korzine={korzine} setKorzine={setKorzine} />;

   return (
      <div>
         <Flex sx={{ position: "relative" }} justify="space-between" align="center">
            <h1>APPLE STORE</h1>
            <h1
               onClick={() => {
                  setKorzine(true);
               }}
            >
               🧺
            </h1>
            <span className="count">{korzine.length}</span>
         </Flex>
         <Box>
            <Flex className="boxs">
               {products.map((product: any) => (
                  <div key={product.id} className="product">
                     <h2>{product.name}</h2>
                     <img width={300} height={300} src={product.img} alt="" />
                     <Flex justify="space-between" align="center">
                        <p>Narxi: {product.price}</p>
                        <Button onClick={() => addToCart(product)} variant="filled">
                           ✚
                        </Button>
                     </Flex>
                  </div>
               ))}
            </Flex>
         </Box>
      </div>
   );
};

export default Main;
