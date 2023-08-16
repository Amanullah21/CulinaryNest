import React, { useEffect, useState } from "react";
import styled from "../Style/FoodList.module.css"

const FoodList = () => {
  const [serverData, setServerData] = useState([]);
  let [cakeFilter, setCakeFilter] = useState(false);
  let [fruitFilter, setFruitFilter] = useState(false);
  let [vegFilter, setVegFilter] = useState(false);
  let [sweetFilter, setSweetFilter] = useState(false);

  const url = "http://localhost:3000/food";
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setServerData(ele))
      .catch((ele) => console.log(ele));
  };
  useEffect(() => getToServer(), []);
  // console.log("data",data)
  if (cakeFilter) {
    return (
      <div className={styled.FoodList}>
        <div className={styled.filter_container}>
          <h5>Filter By Category</h5>
          <button onClick={() => setSweetFilter(!cakeFilter)}>
            Sweet
          </button>{" "}
          <br />
          <button onClick={() => setVegFilter(!vegFilter)}>
            Vegitable
          </button>{" "}
          <br />
          <button onClick={() => setFruitFilter(!fruitFilter)}>
            Fruit
          </button>{" "}
          <br />
          <button onClick={() => setCakeFilter(!cakeFilter)}>Cake</button>{" "}
          <br />
        </div>
        <div className={styled.FoodList_container}>
          {serverData
            .filter((task) => task.cate === "Cake")
            .map((ele, index) => (
              <div className={styled.FoodList_box} key={index}>
                <div key={index} className={styled.div_text_list}>
                  <h1>{ele.name}</h1>
                  <h3>Price : {ele.price}</h3>
                  <h6>Category - {ele.cate}</h6>
                  <p>{ele.des}</p>
                  <button>BUY KNOW</button>
                </div>
                <div>
                  <img src={ele.url} alt={ele.name} />
                </div>
                
              </div>
            ))}
        </div>
      </div>
    );
  } else if (fruitFilter) {
    return (
      <div className={styled.FoodList}>
        <div className={styled.filter_container}>
          <h5>Filter By Category</h5>
          <button onClick={() => setSweetFilter(!cakeFilter)}>
            Sweet
          </button>{" "}
          <br />
          <button onClick={() => setVegFilter(!vegFilter)}>
            Vegitable
          </button>{" "}
          <br />
          <button onClick={() => setFruitFilter(!fruitFilter)}>
            Fruit
          </button>{" "}
          <br />
          <button onClick={() => setCakeFilter(!cakeFilter)}>Cake</button>{" "}
          <br />
        </div>
        <div className={styled.FoodList_container}>
          {serverData
            .filter((task) => task.cate === "Fruit")
            .map((ele, index) => (
              <div className={styled.FoodList_box} key={index}>
                <div key={index} className={styled.div_text_list}>
                  <h1>{ele.name}</h1>
                  <h3>Price : {ele.price}</h3>
                  <h6>Category - {ele.cate}</h6>
                  <p>{ele.des}</p>
                  <button>BUY KNOW</button>
                </div>
                <div>
                  <img src={ele.url} alt={ele.name} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else if (vegFilter) {
    return (
      <div className={styled.FoodList}>
        <div className={styled.filter_container}>
          <h5>Filter By Category</h5>
          <button onClick={() => setSweetFilter(!cakeFilter)}>
            Sweet
          </button>{" "}
          <br />
          <button onClick={() => setVegFilter(!vegFilter)}>
            Vegitable
          </button>{" "}
          <br />
          <button onClick={() => setFruitFilter(!fruitFilter)}>
            Fruit
          </button>{" "}
          <br />
          <button onClick={() => setCakeFilter(!cakeFilter)}>Cake</button>{" "}
          <br />
        </div>
        <div className={styled.FoodList_container}>
          {serverData
            .filter((task) => task.cate === "Veg")
            .map((ele, index) => (
              <div className={styled.FoodList_box} key={index}>
                <div key={index} className={styled.div_text_list}>
                  <h1>{ele.name}</h1>
                  <h3>Price : {ele.price}</h3>
                  <h6>Category - {ele.cate}</h6>
                  <p>{ele.des}</p>
                  <button>BUY KNOW</button>
                </div>
                <div>
                  <img src={ele.url} alt={ele.name} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else if (sweetFilter) {
    return (
      <div className={styled.FoodList}>
        <div className={styled.filter_container}>
          <h5>Filter By Category</h5>
          <button onClick={() => setSweetFilter(!cakeFilter)}>
            Sweet
          </button>{" "}
          <br />
          <button onClick={() => setVegFilter(!vegFilter)}>
            Vegitable
          </button>{" "}
          <br />
          <button onClick={() => setFruitFilter(!fruitFilter)}>
            Fruit
          </button>{" "}
          <br />
          <button onClick={() => setCakeFilter(!cakeFilter)}>Cake</button>{" "}
          <br />
        </div>
        <div className={styled.FoodList_container}>
          {serverData
            .filter((task) => task.cate === "Sweet")
            .map((ele, index) => (
              <div className={styled.FoodList_box} key={index}>
                <div key={index} className={styled.div_text_list}>
                  <h1>{ele.name}</h1>
                  <h3>Price : {ele.price}</h3>
                  <h6>Category - {ele.cate}</h6>
                  <p>{ele.des}</p>
                  <button>BUY KNOW</button>
                </div>
                <div>
                  <img src={ele.url} alt={ele.name} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styled.FoodList}>
      <div className={styled.filter_container}>
        <h5>Filter By Category</h5>
        <button onClick={() => setSweetFilter(!cakeFilter)}>Sweet</button>{" "}
        <br />
        <button onClick={() => setVegFilter(!vegFilter)}>Vegitable</button>{" "}
        <br />
        <button onClick={() => setFruitFilter(!fruitFilter)}>Fruit</button>{" "}
        <br />
        <button onClick={() => setCakeFilter(!cakeFilter)}>Cake</button> <br />
      </div>
      <div className={styled.FoodList_container}>
        {serverData.map((ele, index) => (
          <div className={styled.FoodList_box} key={index}>
            <div key={index} className={styled.div_text_list}>
              <h1>{ele.name}</h1>
              <h3>Price : {ele.price}</h3>
              <h6>Category - {ele.cate}</h6>
              <p>{ele.des}</p>
              <button>BUY KNOW</button>
            </div>
            <div>
              <img src={ele.url} alt={ele.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
