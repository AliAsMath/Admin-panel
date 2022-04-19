import React from "react";
import Widgets from "../component/Widgets";
import Featured from "../component/Featured";
import Chart from "../component/Chart";
import MyTable from "../component/MyTable";
import Skelton from "./../component/Skelton";

function Home() {
  return (
    <Skelton>
      <Widgets />
      <div className="w-full flex flex-wrap gap-5 p-5">
        <Featured />
        <Chart title="Last 6 month (revenue)" aspect={2 / 1} />
      </div>
      <MyTable />
    </Skelton>
  );
}

export default Home;
