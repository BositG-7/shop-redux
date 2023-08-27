/* eslint-disable no-plusplus */

import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "@mantine/core";

interface KorzinaProps {
  korzine: any[];
  setKorzine: (isBollen: boolean) => void;
}

const Korzina = ({ korzine, setKorzine }: KorzinaProps) => {
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

    for (let i = 0; i < korzine.length; i++) {
      const item = korzine[i];

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
    }

    setTelefon((prevTelefon) => ({ ...prevTelefon, count: telefonCount, price: telefonTotalPrice }));
    setIpad((prevIpad) => ({ ...prevIpad, count: ipadCount, price: ipadTotalPrice }));
    setMacbook((prevMacbook) => ({ ...prevMacbook, count: macbookCount, price: macbookTotalPrice }));
  }, [korzine]);

  const handleIncrement = (product:any) => {
    if (product === "telefon") {
      setTelefon((prevTelefon) => ({ ...prevTelefon, count: prevTelefon.count + 1 }));
    } else if (product === "ipad") {
      setIpad((prevIpad) => ({ ...prevIpad, count: prevIpad.count + 1 }));
    } else if (product === "macbook") {
      setMacbook((prevMacbook) => ({ ...prevMacbook, count: prevMacbook.count + 1 }));
    }
  };

  const handleDecrement = (product:any) => {
    if (product === "telefon" && telefon.count > 0) {
      setTelefon((prevTelefon) => ({ ...prevTelefon, count: prevTelefon.count - 1 }));
    } else if (product === "ipad" && ipad.count > 0) {
      setIpad((prevIpad) => ({ ...prevIpad, count: prevIpad.count - 1 }));
    } else if (product === "macbook" && macbook.count > 0) {
      setMacbook((prevMacbook) => ({ ...prevMacbook, count: prevMacbook.count - 1 }));
    }
  };

  const handleDelete = (product:any) => {
    if (product === "telefon") {
      setTelefon({ count: 0, price: 0, name: "IPHONE 15" });
    } else if (product === "ipad") {
      setIpad({ count: 0, price: 0, name: "IPAD 5" });
    } else if (product === "macbook") {
      setMacbook({ count: 0, price: 0, name: "MACBOOK Air M1" });
    }
  };



  return (
    <>
      <Box sx={{display:'flex', flexDirection:'column',gap:'30px',alignItems:'center',justifyContent:'center'}}>
        <Flex align="center" gap={20} justify='space-between' sx={{width:'600px'}}>
          {telefon.count === 0 ? (
            ""
          ) : (
            <>
              {telefon.name} <Button onClick={() => handleDecrement("telefon")}>-</Button>
              {telefon.count}
              <Button onClick={() => handleIncrement("telefon")}>+</Button> {telefon.price}{" "}
              <Button onClick={() => handleDelete("telefon")}>Delete</Button>
            </>
          )}
        </Flex>
        <Flex align="center" gap={20} justify='space-between' sx={{width:'600px'}}>
          {ipad.count === 0 ? (
            ""
          ) : (
            <>
              {ipad.name} <Button onClick={() => handleDecrement("ipad")}>-</Button>
              {ipad.count}
              <Button onClick={() => handleIncrement("ipad")}>+</Button> {ipad.price}{" "}
              <Button onClick={() => handleDelete("ipad")}>Delete</Button>
            </>
          )}
        </Flex>
        <Flex align="center" gap={20} justify='space-between' sx={{width:'600px'}}>
          {macbook.count === 0 ? (
            ""
          ) : (
            <>
              {macbook.name} <Button onClick={() => handleDecrement("macbook")}>-</Button>
              {macbook.count}
              <Button onClick={() => handleIncrement("macbook")}>+</Button> {macbook.price}{" "}
              <Button onClick={() => handleDelete("macbook")}>Delete</Button>
            </>
          )}
        </Flex>
      </Box>
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