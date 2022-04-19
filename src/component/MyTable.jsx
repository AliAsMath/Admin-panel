import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyTable = (props) => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div className="p-[10px] m-5 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
      <h2 className="text-slate-400 dark:text-neutral-200 text-base mb-5">
        {props.title}
      </h2>
      <TableContainer
        component={Paper}
        className="bg-inherit text-slate-600 dark:text-neutral-400"
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="text-inherit">Tracking ID</TableCell>
              <TableCell className="text-inherit">Product</TableCell>
              <TableCell className="text-inherit">Customer</TableCell>
              <TableCell className="text-inherit">Date</TableCell>
              <TableCell className="text-inherit">Amount</TableCell>
              <TableCell className="text-inherit">Payment Method</TableCell>
              <TableCell className="text-inherit">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-inherit">{row.id}</TableCell>
                <TableCell className="text-inherit">
                  <div className="flex items-center gap-2">
                    <img
                      src={row.img}
                      alt=""
                      className="w-8 h-8 rounded object-cover"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="text-inherit">{row.customer}</TableCell>
                <TableCell className="text-inherit">{row.date}</TableCell>
                <TableCell className="text-inherit">{row.amount}</TableCell>
                <TableCell className="text-inherit">{row.method}</TableCell>
                <TableCell className="text-inherit">
                  <span
                    className={`p-1 rounded ${
                      row.status === "Pending"
                        ? "text-amber-200 bg-amber-500"
                        : "text-teal-200 bg-teal-500"
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
