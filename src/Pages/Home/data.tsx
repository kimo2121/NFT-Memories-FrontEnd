import Live1 from "../../assets/images/Live1.png";
import Live2 from "../../assets/images/Live2.png";
import Live3 from "../../assets/images/Live3.png";
import IconCard1 from "../../assets/images/IconCard1.png";
import IconCard2 from "../../assets/images/IconCard2.png";
import IconCard3 from "../../assets/images/IconCard3.png";
import ImageCard1 from "../../assets/images/ImageCard1.png";
import ImageCard2 from "../../assets/images/ImageCard2.png";
import ImageCard3 from "../../assets/images/ImageCard3.png";
import purse from "../../assets/icons/purse.svg";
import tag from "../../assets/icons/tag.svg";
import collection from "../../assets/icons/collection.svg";
import picture from "../../assets/icons/picture.svg";

export const data1: Array<any> = [
  {
    icon: <img src={purse} alt="" />,
    tag: "Setup Your Wallet",
    text: `Once you’ve set up your wallet of choice, connect
      it to Memories by clicking the wallet icon in the top right corner.
      Learn about the wallets we support.`,
  },
  {
    icon: <img src={collection} alt="" />,
    tag: "Create Your Collection",
    text: `Click Create and set up your collection. Add social links, a description, profile & banner images, and set your selling price.`,
  },
  {
    icon: <img src={picture} alt="" />,
    tag: "Setup Your Wallet",
    text: `Once you’ve set up your wallet of choice, connect
      it to Memories by clicking the wallet icon in the top right corner.
      Learn about the wallets we support.`,
  },
  {
    icon: <img src={tag} alt="" />,
    tag: "Activate Your NFTs for Sale",
    text: `Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!`,
  },
];
export const data2: Array<any> = [
  { img: Live1, text: "Radiance Collection" },
  { img: Live2, text: "Folkes" },
  { img: Live3, text: "Pogs Harbor" },
];
export const data3: Array<any> = [
  {
    img: ImageCard1,
    icon: IconCard1,
    text: "Meta Bots are a collection of 10,000 randomly generated space-robots, living on the Ethereum blockchain. Visit https://metabots.io to mint.",
  },
  {
    img: ImageCard2,
    icon: IconCard2,
    text: " Grimes, a multi-hyphenate artist, is well known for her music and visual language. ",
  },
  {
    img: ImageCard3,
    icon: IconCard3,
    text: "PRE-SALE FOR THE FINAL 7,000 CHILLMELEONS is NOW LIVE",
  },
];
