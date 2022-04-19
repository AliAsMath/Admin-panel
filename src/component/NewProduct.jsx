import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";

function NewUser() {
  return (
    <div className="p-5">
      <h1 className="p-4 mb-5 text-xl font-bold text-slate-400 dark:text-neutral-200 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
        Add new product
      </h1>
      <div className="flex  justify-between p-5 rounded-xl shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)]">
        <div className="flex-[1] flex justify-center items-center">
          <img
            className="h-28 w-28 rounded-full object-cover"
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            alt=""
          />
        </div>
        <form className="flex-[6] flex flex-wrap justify-around gap-7">
          <div className="w-2/5">
            <label>Description</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="description"
              placeholder="description"
            />
          </div>
          <div className="w-2/5">
            <label>Price</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="price"
              placeholder="100"
            />
          </div>
          <div className="w-2/5">
            <label>Title</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="title"
              placeholder="Apple Macbook Pro"
            />
          </div>
          <div className="w-2/5">
            <label>Category</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="category"
              placeholder="Notebook"
            />
          </div>
          <div className="w-2/5">
            <label>stock</label>
            <input
              className="w-full border-b outline-none pl-2 placeholder:text-sm bg-transparent"
              type="text"
              name="stock"
              placeholder="in stock"
            />
          </div>
          <div className="w-2/5 self-end">
            <label className="flex items-center" htmlFor="file">
              image:
              <DriveFolderUploadOutlined className="cursor-pointer ml-2 text-2xl" />
            </label>
            <input className="hidden" type="file" name="name" id="file" />
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
