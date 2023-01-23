import { useState } from "react";
import { useDispatch } from "react-redux";
import { AdminIcon, UsersIcon } from "../icons";
import { demoLogin } from "../../redux/features/authSlice";

const DemoLoginButtons = () => {
  const dispatch = useDispatch();

  const [adminHover, setAdminHover] = useState(false);
  const [employeeHover, setEmployeeHover] = useState(false);

  return (
    <div className="w-full flex justify-center gap-16 md:gap-24 pb-3">
      <div
        onClick={() => {
          dispatch(demoLogin(true));
        }}
        onMouseEnter={() => {
          if (!adminHover) setAdminHover(true);
        }}
        onMouseLeave={() => {
          if (adminHover) {
            setTimeout(() => {
              setAdminHover(false);
            }, 200);
          }
        }}
        className="bg-shade-1 hover:bg-shade-9 cursor-pointer rounded-full flex flex-col justify-center items-center p-4 relative ease-in-out duration-500">
        <span
          className={`absolute z-[-1] bottom-8 min-w-max text-shade-1 bg-shade-9 ease-in-out duration-500 px-2 py-1 pointer-events-none rounded-sm 
          ${adminHover ? "translate-y-[-35px] opacity-100" : "opacity-0"} `}>
          Sign in as Admin
        </span>
        <AdminIcon
          twClass={`w-6 ${adminHover ? "fill-shade-1" : "fill-accent"}`}
        />
      </div>

      <div
        onClick={() => {
          dispatch(demoLogin(false));
        }}
        onMouseEnter={() => {
          if (!employeeHover) setEmployeeHover(true);
        }}
        onMouseLeave={() => {
          if (employeeHover) {
            setTimeout(() => {
              setEmployeeHover(false);
            }, 200);
          }
        }}
        className="bg-shade-1 hover:bg-shade-9 cursor-pointer rounded-full flex flex-col justify-center items-center p-4 relative ease-in-out duration-500">
        <span
          className={`absolute z-[-1] bottom-8 min-w-max text-shade-1 bg-shade-9 ease-in-out duration-500 px-2 py-1 pointer-events-none rounded-sm
      ${employeeHover ? "translate-y-[-35px] opacity-100" : "opacity-0"} `}>
          Sign in as Employee
        </span>
        <UsersIcon
          twClass={`w-6 ${employeeHover ? "fill-shade-1" : "fill-accent"}`}
        />
      </div>
    </div>
  );
};

export default DemoLoginButtons;
