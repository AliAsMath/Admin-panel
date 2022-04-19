import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userColumns, userRows } from "./../dataTableSource";
import { Link, useNavigate } from "react-router-dom";

function DataTable(props) {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <div
              className="border rounded p-1 cursor-pointer text-cyan-700 border-cyan-700 hover:bg-cyan-400"
              onClick={() =>
                props.title === "Users"
                  ? navigate("/users/" + params.id)
                  : navigate("/products/" + params.id)
              }
            >
              View
            </div>
            <div
              className="border rounded p-1 cursor-pointer text-rose-700 border-rose-700 hover:bg-rose-400"
              onClick={() =>
                setData((prev) => prev.filter((row) => row.id !== params.id))
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-full aspect-[2/1] p-5">
      <div className="flex justify-between mb-3 px-7">
        <h1 className="text-xl">{props.title}</h1>
        <Link
          to={"/" + props.title.toLowerCase() + "/new"}
          className="p-1 border border-cyan-600 text-cyan-600 hover:bg-cyan-100 rounded"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="text-inherit"
        rows={data}
        columns={[...userColumns, ...actionColumn]}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
