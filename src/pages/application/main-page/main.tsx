import React from "react";
import { useSelector } from "react-redux";

interface MainProps {}

const Main = (props: MainProps) => {
   // Redux store'dan ma'lumotlarni olish
   const products = useSelector((state: any) => state.products);

   return (
      <div>
         <h1>Do'kon</h1>
         <div className="product-list">
            {products.map((product: any) => (
               <div key={product.id} className="product">
                  <h2>{product.title}</h2>
                  <p>Narxi: {product.price}</p>
                  {/* Boshqa tafsilotlar */}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Main;
