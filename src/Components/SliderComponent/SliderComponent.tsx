import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import RightArrow from "../../assets/icons/RightArrow.svg";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import Image1 from "../../assets/icons/Image1.svg";
import SignatureRequest from "../SignatureRequest/SignatureRequest";

const data1: Array<any> = [Image1, Image1, Image1];

const SliderComponent: React.FC = () => {
  const [state, setState] = useState<boolean>(false);
  const showWalletInfo = (): void => {
    setState(!state);
  };
  const NextArrow = (onClick: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={RightArrow} alt="" className="right-direction" />
      </div>
    );
  };

  const PrevArrow = (onClick: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={LeftArrow} alt="" className="left-direction" />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="md:px-16 px-10 pt-20 ">
        <Slider className="slider-component" {...settings}>
          {data1?.map((i, indx) => (
            <div className="each-slide" key={indx}>
              <p>Sign into your wallet.</p>
              <img src={i} alt="SilverCard" />
              <button onClick={showWalletInfo}>CONNECT WALLET</button>
            </div>
          ))}
        </Slider>
        {state && <SignatureRequest showWalletInfo={showWalletInfo} />}
      </div>
    </>
  );
};

export default SliderComponent;
