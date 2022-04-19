import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar(props) {
  const darkHandler = () =>
    props.setIsDark((prev) => {
      localStorage.setItem("isDark", !prev);
      return !prev;
    });
  return (
    <nav className="w-full border-b dark:border-b-neutral-600 flex items-center justify-between p-2  h-12">
      <div className="flex-grow flex justify-center">
        <div className="border rounded w-fit focus-within:border-purple-500">
          <input
            type="text"
            className="outline-none pl-2 border-none transition-all bg-transparent w-72 focus:w-96 placeholder:text-xs"
            placeholder="Search..."
          />
          <SearchOutlinedIcon className="text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative flex items-center">
          <LanguageOutlinedIcon className="text-xl cursor-pointer" /> English
        </div>
        <div className="relative">
          <DarkModeOutlinedIcon
            className="text-xl cursor-pointer"
            onClick={darkHandler}
          />
        </div>
        <div className="relative">
          <FullscreenExitOutlinedIcon className="text-xl cursor-pointer" />
        </div>
        <div className="relative">
          <NotificationsNoneOutlinedIcon className="text-xl cursor-pointer" />
          <div className="absolute -top-1 -right-1 rounded-full h-4 w-4 text-white bg-rose-500 text-[10px] flex items-center justify-center">
            1
          </div>
        </div>
        <div className="relative">
          <ChatBubbleOutlineOutlinedIcon className="text-xl cursor-pointer" />
          <div className="absolute -top-1 -right-1 rounded-full h-4 w-4 text-white bg-rose-500 text-[10px] flex items-center justify-center">
            2
          </div>
        </div>
        <div className="relative">
          <ListOutlinedIcon className="text-xl cursor-pointer" />
        </div>
        <div className="relative">
          <img
            src="https://see.news/wp-content/uploads/2022/01/newFile-2.jpg"
            alt=""
            className="h-8 w-8 rounded object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
