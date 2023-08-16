import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
// import CakeBanner from "../Img/CakeBanner.PNG";
import LandingCard from "./LandingCard";
import styled from "../Style/Landing.module.css";
import LandingFoodCate from "./LandingFoodCate";
import SingleProduct from "./Page/SingleProduct";
// import Autosearch from "../Autosearch";

const Landing = () => {
  const dispatch = useDispatch();
  return (
    <div className={styled.bg}>
      <div>
        <a href="">
          <Banner />
        </a>
      </div>
      <div>
        <LandingFoodCate />
      </div>
      <div className="LandingCard_box ">
        <LandingCard />
      </div>
      <div>
        <article className={styled.artical}>
          <strong>Loren</strong> ipsum dolor sit amet, consectetur adipisicing
          elit. Eveniet cumque non voluptates animi sed, quos laboriosam enim
          deleniti a recusandae? Vero aperiam vel enim? Iure ducimus quasi
          veniam eligendi. Dolorum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque iusto voluptatibus tempora? A soluta libero
          sit earum fugit, asperiores expedita, distinctio ipsam reprehenderit
          voluptatem nemo dolorum laudantium dignissimos sed quidem?Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Doloremque aliquid fugiat
          iusto! Maiores recusandae illo modi sequi ducimus eum exercitationem
          tenetur eaque nam, ex deserunt quasi in, necessitatibus quidem
          quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore sunt ad et qui, ab ratione nemo sapiente perspiciatis officiis!
          Quo vel voluptatem id qui harum voluptate eius, et totam. Assumenda.{" "}
          <br /> <br />
          <strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            eum veniam hic maxime praesentium reprehenderit vel sed sint. Quod,
            pariatur provident. Possimus, obcaecati odit eius corrupti amet
            laboriosam maiores assumenda. {/* </strike> */}
          </strong>
          <br /> <br />
          <i>ipsum dolor sit amet consectetur adipisicing elit.</i> Obcaecati
          eveniet dignissimos ipsa. Impedit veritatis earum unde hic assumenda
          excepturi maiores sed aspernatur ea velit, dignissimos dolore minima
          at est esse. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis nam nostrum facere. Consectetur perspiciatis voluptates
          tempora incidunt praesentium rerum error cumque sit accusantium,
          placeat iure explicabo asperiores, facere dolores facilis? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Iure nihil voluptate a!
          Deleniti sit quasi rem nobis voluptatibus pariatur dignissimos in.
          Officia eos odit sequi, dicta nesciunt fugit sit aliquid. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Optio dolore molestiae
          aut expedita tenetur ea numquam est enim vero, ut adipisci, illo sunt.
          Aliquam doloremque quaerat in dolor, voluptas mollitia.
        </article>
      </div>
      <div className={styled.iframe_container}>
        <div>
          <iframe src="https://www.masaischool.com/" title="Iframe Example" />
        </div>
        <div>
          <iframe
            src="https://www.masaischool.com/courses/full-stack-web-dev-full-time"
            title="Iframe Example"
          />
        </div>
        <div>
          <iframe
            src="https://www.masaischool.com/fees"
            title="Iframe Example"
          />
        </div>
        <div>
          <iframe
            src="https://www.masaischool.com/hire-masai-graduates"
            title="Iframe Example"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
