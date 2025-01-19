import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";
import { BsTelephone, BsAward } from "react-icons/bs";

export default function Rootlayout() {
  return (
    <>
      <div className="min-h-screen pb-16">
        {" "}
        {/* Add bottom padding for the navbar */}
        {/* Main content area */}
        <Outlet />
      </div>

      {/* Fixed navbar */}
      <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:right-5">
        <div className="flex justify-between mx-auto text-primary p-2 rounded-full border-primary border-solid border-[1px] max-w-[300px] bg-secondary">
          <NavLink
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            to="/"
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
          >
            <BiHomeAlt />
          </NavLink>
          <NavLink
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            to="/experience"
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
          >
            <BsAward />
          </NavLink>
          <NavLink
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            to="/profile"
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
          >
            <BiUser />
          </NavLink>
          <NavLink
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            to="/portfolio"
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
          >
            <BiCodeAlt />
          </NavLink>
          <NavLink
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            to="/contact"
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
          >
            <BsTelephone />
          </NavLink>
        </div>
      </div>
    </>
  );
}
