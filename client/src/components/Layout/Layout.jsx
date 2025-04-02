import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggle ? <MdKeyboardDoubleArrowLeft size={30} /> : <MdKeyboardDoubleArrowRight size={30} />}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className='container'>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
