import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import ConnectWallet from "./Pages/ConnectWallet/ConnectWallet";
import Music from "./Pages/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import Photo from "./Pages/Photo/Photo";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import TradingCardPage from "./Pages/TradingCardPage/TradingCardPage";
import Activity from "./Pages/Activity/Activity";
import MyWallet from "./Pages/Profile/MyWallet";
import Offers from "./Pages/Profile/Offers";
import Favorites from "./Pages/Profile/Favorites";
import { MyCollections } from "./Pages/MyCollections/MyCollections";
import { CreateNewItemPage } from "./Pages/MyCollections/CreateNewItemPage";
import { Rankings } from "./Pages/Rankings/Rankings";
import MobileNavBar from "./Components/MobileNavBar/MobileNavBar";
import { CollectionItemPage } from "./Pages/MyCollections/CollectionItemPage";
import AllNFTs from "./Pages/AllNFTs/AllNFTs";

import DropDownStateProvider, { FilterContext } from "./Context";

const App: React.FC = () => {
  return (
    <DropDownStateProvider>
      <div className="App">
        <Router>
          {window.innerWidth > 1026 ? <Navbar /> : <MobileNavBar />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/connect-wallet" component={ConnectWallet} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/photos" component={Photo} />
            <Route
              exact
              path="/trading-card-page"
              component={TradingCardPage}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/all-nfts" component={AllNFTs} />
            <Route exact path="/profile/wallet" component={MyWallet} />
            <Route exact path="/profile/Offers" component={Offers} />
            <Route exact path="/profile/Favorites" component={Favorites} />
            <Route exact path="/profile/Activity" component={Activity} />
            <Route exact path="/collections" component={MyCollections} />
            <Route
              exact
              path="/collections/:id"
              component={CollectionItemPage}
            />
            <Route exact path="/rankings" component={Rankings} />
            <Route
              exact
              path="/collections/item/create"
              component={CreateNewItemPage}
            />
            {/* <Redirect to="/" /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </DropDownStateProvider>
  );
};

export default App;
