import { useState } from "react";

const FormDropDown = ({ setEdit, setFormID }) => {
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
              const relatedTarget =
                evt.relatedTarget.className.includes("option");
              if (!relatedTarget) {
                setToggle(false);
              }
            }
          }}
          className="inline-flex w-full justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-shade-1 shadow-sm hover:bg-shade-1 hover:text-shade-9 focus:outline-none focus:ring-2 focus:ring-shade-1 focus:ring-offset-2 focus:ring-offset-gray-100 ease-in-out duration-300"
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
        className={`
        ${toggle ? "absolute" : "hidden"} 
        right-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-shade-8 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1">
        <div className="py-1" role="none">
          <a
            onClick={() => {
              setFormID(1);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Artist
          </a>
          <a
            onClick={() => {
              setFormID(2);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Line Item
          </a>
          <a
            onClick={() => {
              setFormID(3);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Order
          </a>
          <a
            onClick={() => {
              setFormID(4);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New Track
          </a>
          <a
            onClick={() => {
              setFormID(5);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            Add New User
          </a>
          <a
            onClick={() => {
              setFormID(6);
              setToggle(false);
              setEdit(true);
            }}
            className="option cursor-pointer hover:bg-shade-1 hover:text-shade-9 text-shade-1 text-center block px-4 py-2 text-sm"
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
