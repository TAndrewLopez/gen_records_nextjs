import { useState } from "react";
const FormDropDown = ({ setEdit }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
          onBlur={(evt) => {
            if (!evt.relatedTarget) {
              setToggle(false);
            } else {
              if (
                !evt.relatedTarget.className.includes(
                  "option cursor-pointer hover:bg-highlight"
                )
              ) {
                setToggle(false);
              }
            }
          }}
          className="inline-flex w-full justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-shade-1 shadow-sm hover:bg-highlight hover:text-shade-9 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 ease-in-out duration-300"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true">
          Add Item
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        onBlur={() => setToggle(false)}
        className={`${
          toggle ? "absolute" : "hidden"
        } right-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1">
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New Artist");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Artist
          </a>
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New Line Item");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Line Item
          </a>
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New Order");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Order
          </a>
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New Track");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Track
          </a>
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New User");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New User
          </a>
          <a
            onClick={() => {
              setToggle(false);
              setEdit(true);
              console.log("Add New Vinyl");
            }}
            className="option cursor-pointer hover:bg-highlight text-gray-700 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Vinyl
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormDropDown;
