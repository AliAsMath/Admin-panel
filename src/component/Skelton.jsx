import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
function Skelton({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <div className={`w-full ${isDark ? "dark" : ""}`}>
      <div className="flex dark:bg-neutral-900 text-slate-600 dark:text-neutral-400">
        <Sidebar setIsDark={setIsDark} />
        <div className="flex-[6] ">
          <Navbar setIsDark={setIsDark} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Skelton;
