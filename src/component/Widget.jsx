import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = (props) => {
  return (
    <div className="flex-[1] flex basis-40 justify-between p-[10px] h-28 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
      <div className="flex flex-col justify-between">
        <span className="text-xs font-bold text-slate-400 dark:text-neutral-200">
          {props.title}
        </span>
        <span className="text-2xl font-light">
          {props.isMoney && "$"} {props.amount}
        </span>
        <span className="text-xs border-b w-fit">{props.link}</span>
      </div>
      <div
        className={`flex flex-col justify-between ${
          props.diff < 0 ? "text-rose-500" : "text-teal-400"
        }`}
      >
        <div className="flex items-center text-sm">
          <KeyboardArrowUpIcon />
          {props.diff} %
        </div>
        {props.icon}
      </div>
    </div>
  );
};

export default Widget;
