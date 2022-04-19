import React from "react";
import NewUser from "../component/NewUser";
import NewProduct from "../component/NewProduct";
import Skelton from "../component/Skelton";

function New(props) {
  return (
    <Skelton>
      {props.type === "user" && <NewUser />}
      {props.type === "product" && <NewProduct />}
    </Skelton>
  );
}

export default New;
