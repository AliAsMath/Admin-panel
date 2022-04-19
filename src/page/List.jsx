import { useLocation } from "react-router-dom";
import DataTable from "../component/DataTable";
import Skelton from "./../component/Skelton";

function List() {
  const location = useLocation();

  let title = "";
  if (location.pathname === "/users") title = "Users";
  else if (location.pathname === "/products") title = "Products";

  return (
    <Skelton>
      <DataTable title={title} />
    </Skelton>
  );
}

export default List;
