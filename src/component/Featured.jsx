import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function Featured() {
  const amuont1 = 12.4;
  const amuont2 = -12.4;

  return (
    <div className="flex-[1] flex flex-col items-center gap-4 p-[10px] dark:to-neutral-200 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
      <div className="w-full flex justify-between font-medium">
        <h2>Total Revenue</h2>
        <MoreVertIcon />
      </div>
      <CircularProgressbar
        className="h-24 w-24"
        value={77}
        text={"77%"}
        strokeWidth={5}
      />
      <h3 className="font-medium">Total sales made today</h3>
      <span className="text-3xl">$420</span>
      <p className="px-5 font-light text-xs text-center">
        Previous transactions processing. Last payments may not be included.
      </p>
      <div className="w-full flex justify-between px-5 text-sm">
        <div className="flex flex-col items-center gap-2">
          <h4 className="">Target</h4>
          <span
            className={`flex items-center ${
              amuont1 < 0 ? "text-rose-400" : "text-teal-400"
            }`}
          >
            <KeyboardArrowUpOutlinedIcon />${amuont1}K
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="">Target</h4>
          <span
            className={`flex items-center ${
              amuont2 < 0 ? "text-rose-400" : "text-teal-400"
            }`}
          >
            <KeyboardArrowDownIcon />${amuont2}K
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="">Target</h4>
          <span
            className={`flex items-center ${
              amuont1 < 0 ? "text-rose-400" : "text-teal-400"
            }`}
          >
            <KeyboardArrowUpOutlinedIcon />${amuont1}K
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
