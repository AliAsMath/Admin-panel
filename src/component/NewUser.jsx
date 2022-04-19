import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

function NewUser() {
  const [image, setImage] = useState(null);
  return (
    <div className="p-5">
      <h1 className="p-4 mb-5 text-xl font-bold text-slate-400 dark:text-neutral-200 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
        Add new user
      </h1>
      <div className="flex  justify-between p-5 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
        <div className="flex-[1] flex justify-center items-center">
          <img
            className="h-28 w-28 rounded-full object-cover"
            src={
              image
                ? URL.createObjectURL(image)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <form className="flex-[6] flex flex-wrap justify-around gap-7">
          <div className="w-2/5">
            <label>Name and surname</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="name"
              placeholder="Ali"
            />
          </div>
          <div className="w-2/5">
            <label>Phone</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="phone"
              placeholder="+989163884569"
            />
          </div>
          <div className="w-2/5">
            <label>Address</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="address"
              placeholder="Lorestan, Dorud"
            />
          </div>
          <div className="w-2/5">
            <label>Username</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="username"
              placeholder="AliAs7"
            />
          </div>
          <div className="w-2/5">
            <label>Email</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="Email"
              placeholder="ali@gmail.com"
            />
          </div>
          <div className="w-2/5">
            <label>Password</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="password"
              placeholder="*******"
            />
          </div>
          <div className="w-2/5">
            <label>Country</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="country"
              placeholder="Iran"
            />
          </div>
          <div className="w-2/5 self-end">
            <label className="flex items-center" htmlFor="file">
              image:
              <DriveFolderUploadOutlined className="cursor-pointer ml-2 text-2xl" />
            </label>
            <input
              className="hidden"
              type="file"
              name="name"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button className="w-1/5 mx-auto p-1 transition-colors text-slate-50 bg-teal-800 hover:bg-teal-600 rounded font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
