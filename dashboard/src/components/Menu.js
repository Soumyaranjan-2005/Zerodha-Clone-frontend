import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FRONTEND_BASE_URL, FRONTEND_LOGIN_PATH } from "../config";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    let loginUrl = FRONTEND_LOGIN_PATH;
    if (FRONTEND_BASE_URL && FRONTEND_BASE_URL.trim() !== '') {
      const baseUrl = FRONTEND_BASE_URL.replace(/\/+$/, '');
      const loginPath = FRONTEND_LOGIN_PATH.startsWith('/')
        ? FRONTEND_LOGIN_PATH
        : `/${FRONTEND_LOGIN_PATH}`;
      loginUrl = `${baseUrl}${loginPath}`;
    }

    window.location.href = loginUrl;
  };

  useEffect(() => {
    if (!isProfileDropdownOpen) return;

    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isProfileDropdownOpen]);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li key="dashboard">
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li key="orders">
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li key="holdings">
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li key="positions">
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li key="funds">
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li key="apps">
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile-wrapper" ref={profileRef}>
          <button
            type="button"
            className="profile"
            onClick={handleProfileClick}
            aria-expanded={isProfileDropdownOpen}
          >
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </button>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-header">
                <div className="avatar avatar-sm">ZU</div>
                <div>
                  <p className="profile-name">USERID</p>
                  <p className="profile-label">Signed in</p>
                </div>
              </div>
              <button
                type="button"
                className="logout-button"
                onClick={handleLogout}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
