import React, { useEffect, useState } from "react";
import styled from "../../Style/FoodList.module.css";

const SingleProduct = (pros) => {
  let [data, setData] = useState([]);
  const url = "http://localhost:3000/single";
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele))
      .catch((ele) => console.log(ele));
  };

  useEffect(() => getToServer(), []);
  return (
    <div className={styled.bg}>
      {data.map((ele) => (
        <div className={styled.SingleProduct}>
          <div className={styled.SingleProduct_text}>
            <h4>{ele.offer}</h4>
            <h1>{ele.name}</h1> <br />
            <h4>
              <strong>{ele.cate}</strong>
            </h4>
            <strike>1{ele.price}</strike>
            <h4>{ele.price}</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quos! Enim ex similique quaerat libero hic magni
              fugiat, nam a sint. Maxime corporis vero facilis, consequuntur
              iste tempora enim itaque?
            </p>
            <button>BUY KNOW</button>
          </div>
          <div className={styled.SingleProduct_img}>
            <img src={ele.url} alt={ele.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
