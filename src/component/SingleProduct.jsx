import React from "react";
import Chart from "./Chart";
import MyTable from "./MyTable";

function SingleUser() {
  return (
    <>
      <div className="p-5 flex gap-5">
        <div className="flex flex-col gap-5 relative p-5 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
          <h2 className="text-slate-400 dark:text-neutral-200 text-base">
            Information
          </h2>
          <div className="flex gap-4 h-full">
            <img
              className="h-24 w-24 rounded object-cover"
              src="https://www.kickmobiles.com/images/thumbs/0019380_blackberry-porsche-design-p9982_808.jpeg"
              alt=""
            />
            <div className="flex flex-col justify-between h-full text-sm">
              <h2 className="text-2xl font-bold">Porsche design</h2>
              <span>
                <b>Model: </b>P 9982
              </span>
              <span>
                <b>Company: </b>BlackBarry
              </span>
              <span>
                <b>Year: </b>2011
              </span>
              <span>
                <b>Price: </b>$999
              </span>
            </div>
          </div>
          <button className="p-1 absolute top-0 right-0 rounded-tr-xl text-xs bg-purple-200 text-purple-500">
            Edit
          </button>
        </div>
        <Chart title="Price Fluctuation (last 6 month)" aspect={3 / 1} />
      </div>
      <div>
        <MyTable title="Related" />
      </div>
    </>
  );
}

export default SingleUser;
