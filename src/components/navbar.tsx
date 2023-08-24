// @ts-nocheck
import React, { FunctionComponent } from "react"; // React import qilingan
import { useNavigate } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
   const navigate = useNavigate();

   return (
      <>
         <h1>Navbar page</h1>
      </>
   );
};

export default Navbar;
