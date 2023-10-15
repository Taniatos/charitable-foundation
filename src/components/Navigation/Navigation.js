import React from "react";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg sticky-xl-top">
      <div className="navbar-content">
        <div className="logo-left">
          <a
            className="nav-link"
            aria-current="page"
            href="https://google.com/"
            title="Home"
          >
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/056/original/logo.png?1697057798"
              alt="logo"
              className="logo"
            />
          </a>
        </div>
        <div className="transparent"></div>
        <div className="menu-right">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav menu-options">
              <a
                className="nav-link menu-style"
                aria-current="page"
                href="https://google.com/"
                title="Menu1"
              >
                Menu
              </a>
              <a
                className="nav-link menu-style"
                href="https://google.com/"
                title="Menu2"
              >
                Menu
              </a>
              <a
                className="nav-link menu-style"
                href="https://google.com/"
                title="Menu3"
              >
                Menu
              </a>
              <a
                className="nav-link menu-style"
                href="https://google.com/"
                title="Menu4"
              >
                Menu
              </a>
              <a
                className="nav-link menu-style"
                href="https://google.com/"
                title="Menu5"
              >
                Menu
              </a>
              <a
                className="nav-link menu-style"
                href="https://google.com/"
                title="Menu6"
              >
                Menu
              </a>
              <button className="language-switch-btn">UKR</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
