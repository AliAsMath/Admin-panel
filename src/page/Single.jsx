import React from "react";
import Skelton from "./../component/Skelton";
import SingleProduct from "./../component/SingleProduct";
import { useLocation } from "react-router-dom";
import SingleUser from "../component/SingleUser";

function Single() {
  const { pathname } = useLocation();
  return (
    <Skelton>
      {pathname.includes("users") && <SingleUser />}
      {pathname.includes("products") && <SingleProduct />}
    </Skelton>
  );
}

export default Single;
