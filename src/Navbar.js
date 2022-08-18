import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo from "./Netflix_logo.png";
import { BsSearch } from "react-icons/bs";
import NoteContext from "./context";
const Navbar = () => {
  const data = useContext(NoteContext);
  const [show, handleShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const checkSize = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  };
  useEffect(() => {
    checkSize();
    return () => {
      window.addEventListener("scroll", checkSize);
    };
  }, []);
  const searchResults = () => {
    if (!visible) {
      setVisible(true);
      handleShow(true);
    } else {
      if (!data.search) {
        setVisible(false);
        // {window.screenY>50?handleShow(false):""}
      } else {
        data.setQuery(data.search);
        data.setShow(true);
      }
    }
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="NETFLIX" />
      <div className={visible ? "show" : "search"}>
        <input
          type="text"
          placeholder="Search..."
          value={data.search}
          onChange={(e) => {
            data.setSearch(e.target.value);
          }}
        />
        <div
          className="btn"
          onClick={() => {
            searchResults();
          }}
        >
          <BsSearch />
        </div>
      </div>
      {/* <img className="nav_avatar" src="" alt="DOWN" /> */}
    </div>
  );
};

export default Navbar;
