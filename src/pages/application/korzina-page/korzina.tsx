/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "@mantine/core";
import { useDispatch } from "react-redux";

import { decrementItem, deleteItem, incrementItem } from "../main-page/shopreducer"; // Update the import path

interface KorzinaProps {
   korzine: any[];
   setKorzine: (isBollen: boolean) => void;
}

const Korzina: React.FC<KorzinaProps> = ({ korzine, setKorzine }) => {
   const dispatch = useDispatch();
   const [telefon, setTelefon] = useState({ count: 0, price: 0, name: "IPHONE 15" });
   const [ipad, setIpad] = useState({ count: 0, price: 0, name: "IPAD 5" });
   const [macbook, setMacbook] = useState({ count: 0, price: 0, name: "MACBOOK Air M1" });

   useEffect(() => {
      let telefonCount = 0;
      let telefonTotalPrice = 0;
      let ipadCount = 0;
      let ipadTotalPrice = 0;
      let macbookCount = 0;
      let macbookTotalPrice = 0;

      korzine.forEach(item => {
         if (item.name === "IPHONE 15") {
            telefonCount++;
            telefonTotalPrice += item.price;
         } else if (item.name === "IPAD 5") {
            ipadCount++;
            ipadTotalPrice += item.price;
         } else if (item.name === "MACBOOK Air M1") {
            macbookCount++;
            macbookTotalPrice += item.price;
         }
      });

      setTelefon(prevTelefon => ({
         ...prevTelefon,
         count: telefonCount,
         price: telefonTotalPrice
      }));
      setIpad(prevIpad => ({ ...prevIpad, count: ipadCount, price: ipadTotalPrice }));
      setMacbook(prevMacbook => ({
         ...prevMacbook,
         count: macbookCount,
         price: macbookTotalPrice
      }));
   }, [korzine]);

   const handleIncrement = (productName: string) => {
      // @ts-ignore
      dispatch(incrementItem(productName));
   };

   const handleDecrement = (productName: string) => {
      // @ts-ignore

      dispatch(decrementItem(productName));
   };

   const handleDelete = (productName: string) => {
      // @ts-ignore

      dispatch(deleteItem(productName));
   };

   return (
      <>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: "30px",
               alignItems: "center",
               justifyContent: "center"
            }}
         >
            <Flex align="center" gap={20} justify="space-between" sx={{ width: "600px" }}>
               {telefon.count === 0 ? (
                  ""
               ) : (
                  <>
                     {telefon.name} <Button onClick={() => handleDecrement("IPHONE 15")}>-</Button>
                     {telefon.count}
                     <Button onClick={() => handleIncrement("IPHONE 15")}>+</Button> {telefon.price}{" "}
                     <Button onClick={() => handleDelete("IPHONE 15")}>Delete</Button>
                  </>
               )}
            </Flex>
            <Flex align="center" gap={20} justify="space-between" sx={{ width: "600px" }}>
               {ipad.count === 0 ? (
                  ""
               ) : (
                  <>
                     {ipad.name} <Button onClick={() => handleDecrement("IPAD 5")}>-</Button>
                     {ipad.count}
                     <Button onClick={() => handleIncrement("IPAD 5")}>+</Button> {ipad.price}{" "}
                     <Button onClick={() => handleDelete("IPAD 5")}>Delete</Button>
                  </>
               )}
            </Flex>
            <Flex align="center" gap={20} justify="space-between" sx={{ width: "600px" }}>
               {macbook.count === 0 ? (
                  ""
               ) : (
                  <>
                     {macbook.name}{" "}
                     <Button onClick={() => handleDecrement("MACBOOK Air M1")}>-</Button>
                     {macbook.count}
                     <Button onClick={() => handleIncrement("MACBOOK Air M1")}>+</Button>{" "}
                     {macbook.price}{" "}
                     <Button onClick={() => handleDelete("MACBOOK Air M1")}>Delete</Button>
                  </>
               )}
            </Flex>
         </Box>
         <h1>Obshi summa {telefon.price + ipad.price + macbook.price}</h1>
         <Button
            onClick={() => {
               setKorzine(false);
            }}
         >
            Chiqish
         </Button>
      </>
   );
};

export default Korzina;
