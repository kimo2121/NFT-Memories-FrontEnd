import React, { useState } from "react";
import PrimarySearchAppBar from "../SearchBar/SearchBar";
import "./MarketPlaceCollectionFilter.css";

const data1: Array<any> = [
  {
    name: "Microsoft Stores",
    img: "https://www.mlive.com/resizer/UEaVb0UEZ-FOOmU5sH-jaAPzEgI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
  },
  {
    name: "Lenovo Stores",
    img: "https://www.cnet.com/a/img/il6jwdZY19bL9QEDR5x6zNjd55Y=/0x404:828x1603/940x0/2020/05/18/ef3e4846-00d1-4b6b-8647-d876b73b6b3e/fb-avatar.jpg",
  },
  {
    name: "Nokia Stores",
    img: "https://cdn.dribbble.com/users/3294839/screenshots/14567472/media/524efe16b803e0d913d725c120b0cb46.jpg?compress=1&resize=400x300",
  },
  {
    name: "BlackBerry Stores",
    img: "http://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg",
  },
  {
    name: "Samsung Stores",
    img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
  },
  {
    name: "Microsoft Stores",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbY3v1BLGcs377egpKrACqT0K_-6o_ldiWA&usqp=CAU",
  },
  {
    name: "Amazone Stores",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbY3v1BLGcs377egpKrACqT0K_-6o_ldiWA&usqp=CAU",
  },
  {
    name: "Apple Stores",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbY3v1BLGcs377egpKrACqT0K_-6o_ldiWA&usqp=CAU",
  },
];
const MarketPlaceCollectionFilter: React.FC = (collectionFilter) => {
  const [state, setState] = useState<string>("");
  const onChangeHandler = (e: any): void => {
    setState(e.target.value);
  };
  return (
    <div className="marketplace-collection-filter">
      <PrimarySearchAppBar
        onChangeHandler={onChangeHandler}
        collectionFilter={collectionFilter}
      />

      <div className="filter-container">
        {data1
          .filter((val) => {
            if (state == "") {
              return val;
            } else if (val.name.toLowerCase().includes(state.toLowerCase())) {
              return val;
            }
          })
          .map((item, indx) => (
            <div className="each-collection-item" key={indx}>
              <img src={item.img} alt="" />
              <span style={{ fontSize: ".8rem" }}>{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MarketPlaceCollectionFilter;
