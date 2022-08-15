import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.jpg";
import HeaderOpen from "./HeaderOpen";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [menu, setMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth >= 1100) {
      setMenu(true);
    }else{
      setMenu(false)
    }
  }, [windowSize.innerWidth]);

  const handelVisible = () => {
    setVisible((current) => !current);
  };

  const handleMenu = () => {
    setMenu(() => !menu);
    if (menu === false) {
      setVisible(() => true);
    }
  };

  return (
    <div className="header">
      <div className="headerTop headerTop__none">
        <div className="header__left">
          <div className="header__responsive">
            <img src={Logo} className="header__logo" />
            <p onClick={handleMenu} className="header__menu">
              Menu {menu ? "-" : "+"}
            </p>
          </div>
          {menu && (
            <ul className={menu ? "" : ""}>
              <li>Live</li>
              <li>Push</li>
              <li>Link</li>
              <li>Shop</li>
              <li>Packs</li>
              <li>Help</li>
              <li onClick={handelVisible}>More {visible ? "+" : "-"}</li>
            </ul>
          )}
        </div>
        {menu && (
          <div className="header__right">
            <p>Try Live for free</p>
            <p>Log in or Register</p>
          </div>
        )}
      </div>
      {menu ? <HeaderOpen isClicked={visible} /> : ""}
    </div>
  );
};

export default Header;

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
