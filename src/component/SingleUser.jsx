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
              className="h-24 w-24 rounded-full object-cover"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <div className="flex flex-col justify-between h-full text-sm">
              <h2 className="text-2xl font-bold">Maryam Gerami</h2>
              <span>
                <b>Email:</b> MGerami@gmail.com
              </span>
              <span>
                <b>Phone: </b>+98 912 364 4576
              </span>
              <span>
                <b>Address: </b>Lorestan, Dorud
              </span>
              <span>
                <b>Country: </b>Iran
              </span>
            </div>
          </div>
          <button className="p-1 absolute top-0 right-0 rounded-tr-xl text-xs bg-purple-200 text-purple-500">
            Edit
          </button>
        </div>
        <Chart title="User spending (last 6 month)" aspect={3 / 1} />
      </div>
      <div>
        <MyTable title="Last Transaction" />
      </div>
    </>
  );
}

export default SingleUser;
