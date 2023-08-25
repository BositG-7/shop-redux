import React from "react";
import { Box, Button, Flex } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

import "./main.scss";

interface MainProps {}

const Main: React.FC<MainProps> = props => {
   const products = useSelector((state: any) => state.products);
   const korzine = useSelector((state: any) => state.korzine);
   const dispatch = useDispatch();

   const addToCart = (product: any) => {
      dispatch({ type: "ADD", payload: product });
   };

   return (
      <div>
         <Flex sx={{ position: "relative" }} justify="space-between" align="center">
            <h1>APPLE STORE</h1>
            <h1>🧺</h1>
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
