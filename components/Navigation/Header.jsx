import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

//COMPONENTS
import { NavLinks, UserCartDropDown, MobileNavOverlay } from "../../components";
import { CartIcon, ProfileIcon, Hamburger } from "../assets";

const Header = ({ headerClass }) => {
  const { isAdmin, cart } = useSelector((state) => state.authReducer);

  const [overlay, setOverlay] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
  ];

  if (window) {
    if (overlay && document) {
      document.getElementById("__next").style.overflow = "hidden";
    } else {
      document.getElementById("__next").style.overflow = "auto";
    }
  }

  return (
    <header className={headerClass}>
      <Link
        className="text-white hover:text-sec ease-in-out duration-300"
        href="/">
        Gen Records
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <NavLinks links={linkInfo} />
          {isAdmin ? (
            <Link
              className="text-white hover:text-sec ease-in-out duration-300"
              href={"/admin"}>
              Admin Dashboard
            </Link>
          ) : (
            ""
          )}
          <div className="flex" onClick={() => setToggleCart(!toggleCart)}>
            <CartIcon
              amount={cart?.length}
              twClass={`w-4 fill-white hover:fill-sec cursor-pointer ease-in-out duration-300`}
            />
          </div>
          <Link className="flex" href={"/profilePage"}>
            <ProfileIcon
              twClass={
                "w-4 fill-white hover:fill-sec cursor-pointer ease-in-out duration-300"
              }
            />
          </Link>
        </ul>
      </nav>
      <div
        onClick={() => setOverlay(!overlay)}
        className="relative z-30 text-white sm:hidden flex">
        <Hamburger visible={overlay} />
      </div>
      {toggleCart ? <UserCartDropDown cart={cart} /> : <></>}
      {overlay ? <MobileNavOverlay links={linkInfo} /> : <></>}
    </header>
  );
};

export default Header;
