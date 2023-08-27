import React, { useEffect, useState } from "react";
import { Box } from "@mantine/core";

interface KorzinaProps {
   korzine: any[];
   setKorzine: (isBollen: boolean) => void;
}

const Korzina = ({ korzine, setKorzine }: KorzinaProps) => {
   const [telefon, setTelefon] = useState({ count: 0, price: 0 });
   const [ipad, setIpad] = useState({ count: 0, price: 0 });
   const [macbook, setMacbook] = useState({ count: 0, price: 0 });

   useEffect(() => {
      let telefonCount = 0;
      let telefonTotalPrice = 0;
      let Ipad = 0;
      let IpadPrice = 0;
      let Macbook = 0;
      let MacbookPrice = 0;

      for (let i = 0; i < korzine.length; i++) {
         if (korzine[i].name === "IPHONE 15") {
            // eslint-disable-next-line no-plusplus
            telefonCount++;
            telefonTotalPrice += korzine[i].price;
         } else if (korzine[i].name === "IPAD 5") {
            // eslint-disable-next-line no-plusplus
            Ipad++;
            IpadPrice += korzine[i].price;
         } else if (korzine[i].name === "MACBOOK Air M1") {
            // eslint-disable-next-line no-plusplus
            Macbook++;
            MacbookPrice += korzine[i].price;
         }
      }

      setTelefon(prevTelefon => ({
         ...prevTelefon,
         count: telefonCount,
         price: telefonTotalPrice
      }));
      setIpad(prevOtherProducts => ({
         ...prevOtherProducts,
         count: Ipad,
         price: IpadPrice
      }));
      setIpad(prevOtherProducts => ({
         ...prevOtherProducts,
         count: Macbook,
         price: MacbookPrice
      }));
   }, [korzine]);

   return (
      <>
         <h1
            onClick={() => {
               setKorzine(false);
            }}
         >
            Chiqish
         </h1>
         <Box>
            <p>Korzineda {telefon.count} ta IPHONE 15 mavjud</p>
            <p>IPHONE 15 umumiy narxi: {telefon.price}</p>
            <p>Boshqa mahsulotlar: {ipad.count} ta</p>
            <p>Boshqa mahsulotlar umumiy narxi: {ipad.price}</p>

            <p>Boshqa mahsulotlar: {macbook.count} ta</p>
            <p>Boshqa mahsulotlar umumiy narxi: {macbook.price}</p>
            {korzine.map((item: any, index: number) => (
               // eslint-disable-next-line react/no-array-index-key
               <h1 key={index}>{item.name}</h1>
            ))}
         </Box>
      </>
   );
};

export default Korzina;
