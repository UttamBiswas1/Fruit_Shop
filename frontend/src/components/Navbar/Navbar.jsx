import React, { useContext, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import profile_icon from "../../assets/profile_icon.png";
import logout_icon from "../../assets/logout_icon.png";
import bag_icon from "../../assets/bag_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const NavbarMenu = [
  {
    id: 1,
    tittle: "Home",
    link: "/",
  },
  {
    id: 2,
    tittle: "Shop",
    link: "/menus",
  },
  {
    id: 3,
    tittle: "About",
    link: "/brand-info",
  },
  {
    id: 5,
    tittle: "Contacts",
    link: "#",
  },
];

const Navbar = ({setShowLogin}) => {
  const { setToken,token,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* menu sectiin */}
          <div className="flex">
            <div className="hidden md:block mt-1">
              <ul className="flex items-center gap-6 text-gray-600">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-1 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    >
                      {menu.tittle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="navbar-cart-icon">
            <Link to={"/cart"}>
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 ml-20 md:ml-3">
                <MdOutlineShoppingCart />
              </button>
            </Link>
             <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>

            {!token ? (<button onClick={() => {setShowLogin(true);}}>Sign in</button>) : (
              <div className="navbar-profile">
                <div className="navbar-profile ml-4 mr-1 sm:mr-0  mt-1">
                  <img
                    src={profile_icon}
                    alt=""
                    className=" w-9 h-9 hover:bg-primary rounded-full p-2 "
                  />
                  <ul className="nav-profile-dropdown hidden absolute z-1 mr-10">
                    <li className="flex gap-4 items-center cursor-pointer pr-5">
                      <img src={bag_icon} alt="" />
                      <p>Orders</p>
                    </li>
                    <hr />
                    <li
                      className="flex gap-4 items-center cursor-pointer pr-5"
                      onClick={logout}
                    >
                      <img src={logout_icon} alt="" />
                      <p className="text-primary ">LogOut</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* mobile Menu Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
