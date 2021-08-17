import React from "react";
import "./Home.css";
import BannerCard from "../../Components/BannerCard/BannerCard";
import ExclusiveMemoriesCard from "../../Components/ExclusiveMemoriesCard/ExclusiveMemoriesCard";
import { data1, data2, data3 } from "./data";
import AuctionOffersCard from "../../Components/TradingCard/TradingCard";
import TrendingInCategoriesCard from "../../Components/TrendingInCategoriesCard/TrendingInCategoriesCard";
import TradingCard from "../../Components/TradingCard/TradingCard";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div className="home-page">
      <div className="banner">
        <div className="backdrop-image"></div>
        <div className="backdrop-color"></div>
        <div className="banner-info">
          <h1>Create, Collect, and Sell Memories NFTs</h1>
          <p>Designed for the artist and fan.</p>
          <button style={{ marginRight: "4vw" }}>CREATE</button>
          <button onClick={() => history.push("/all-nfts")}>EXPLORE</button>
        </div>
        <BannerCard />
      </div>
      <div className="exclusive-cards-div" style={{ marginTop: "9.1vh" }}>
        <h1>Exclusive Memories NFT Drops</h1>
        <div className="exclusive-memories">
          {data2.map((item, indx) => (
            <ExclusiveMemoriesCard key={indx} item={item} />
          ))}
        </div>
      </div>
      <div className="trending-all-categories-div">
        <h1 style={{ marginTop: "9.4vh" }}>Trending in all categories</h1>
        <div className="trending-all-categories">
          {data3.map((ele, indx) => (
            <TrendingInCategoriesCard ele={ele} key={indx} />
          ))}
        </div>
      </div>
      <div className="sell-nfts">
        <h1>Create and Sell Your NFTs</h1>
        <div className="sell-nfts-continer">
          {data1.map((item, indx) => (
            <div className="each-sell-nfts-continer" key={indx}>
              {item.icon}
              <h2>{item.tag}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
