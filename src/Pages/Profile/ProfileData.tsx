import { ReactComponent as Profile } from "../../assets/icons/Profile.svg";
import { ReactComponent as SpreadSheet } from "../../assets/icons/SpreadSheet.svg";
import { ReactComponent as Info } from "../../assets/icons/Info.svg";
import { ReactComponent as Store } from "../../assets/icons/store.svg";
import { ReactComponent as OutlineHeart } from "../../assets/icons/OutlineHeart.svg";
import { ReactComponent as Contacts } from "../../assets/Contacts.svg";
import { ReactComponent as Offers } from "../../assets/Offer.svg";
import { ReactComponent as Wallet } from "../../assets/Wallet.svg";
import { ReactComponent as Activity } from "../../assets/Activity.svg";

export const data1: Array<any> = [
  {
    text: "My Profile",
    icon: <Profile style={{ width: "26px", height: "25px" }} />,
    name: "profile",
  },
  {
    text: "My Payouts",
    icon: <SpreadSheet style={{ width: "26px", height: "25px" }} />,
    name: "payouts",
  },
  {
    text: "My Collections",
    icon: <Info style={{ width: "26px", height: "25px" }} />,
    name: "collections",
  },
  {
    text: "Info & Help",
    icon: <Store style={{ width: "26px", height: "25px" }} />,
    name: "info",
  },
];
export const menuData: Array<any> = [
  {
    text: "My Wallet",
    icon: <Wallet style={{ width: "26px", height: "25px" }} />,
    name: "wallet",
  },
  {
    text: "Offers",
    icon: <Offers style={{ width: "26px", height: "25px" }} />,
    name: "Offers",
  },
  {
    text: "Favorites",
    icon: <OutlineHeart style={{ width: "26px", height: "25px" }} />,
    name: "Favorites",
  },
  {
    text: "Activity",
    icon: <Activity style={{ width: "26px", height: "25px" }} />,
    name: "Activity",
  },
  {
    text: "Profile Details",
    icon: <Contacts style={{ width: "26px", height: "25px" }} />,
    name: "Profile",
  },
];
