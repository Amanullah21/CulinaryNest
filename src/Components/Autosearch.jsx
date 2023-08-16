import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "../Style/Navbar.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import SingleProduct from "./Page/SingleProduct";

const Autosearch = () => {
  let [items, setItems] = useState([]);
  let [single, setSingle] = useState(null);
  const url = "http://localhost:3000/food";
  const url1 = "http://localhost:3000/single";
  const navigate = useNavigate();
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setItems(ele))
      .catch((ele) => console.log(ele));
  };
  useEffect(() => getToServer(), []);

  const handleOnSearch = (string, results) => {
    console.log(string);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    fetch(url1, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/singleproduct");
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{
            display: "block",
            textAlign: "left",
            opacity: "10",
            position: "absolute",
            top: "10",
          }}
        >
          {item.name}
        </span>
      </>
    );
  };

  return (
    <div className={styled.Autosearch}>
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
};

export default Autosearch;
