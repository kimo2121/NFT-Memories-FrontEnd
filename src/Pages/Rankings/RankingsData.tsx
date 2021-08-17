import NTFIcon from "../../assets/icons/NTFIcon.svg";
import FineArtIcon from "../../assets/icons/FineArtIcon.svg";
import PhotosIcon from "../../assets/icons/PhotosIcon.svg";
import VideoIcon from "../../assets/icons/VideoIcon.svg";
import MusicIcon from "../../assets/icons/MusicIcon.svg";
import TradingCard from "../../assets/icons/TradingCard.svg";

export const allCatogries: Array<any> = [
  { img: NTFIcon, text: "All NFTs", to: "/all-nfts", name: "nftIcon" },
  { img: FineArtIcon, text: "Fine Art", to: "/fine-art", name: "fineArtIcon" },
  { img: PhotosIcon, text: "Photos", to: "/photos", name: "photoIcon" },
  { img: VideoIcon, text: "Video", to: "/video", name: "videoIcon" },
  { img: MusicIcon, text: "Music", to: "/music", name: "musicIcon" },
  {
    img: TradingCard,
    text: "Trading Cards",
    to: "/trading-cards",
    name: "tradingCardIcon",
  },
];
export const hisotry: Array<any> = [
  { text: "Last 24 Hours", to: "/rankings/last_24_h", name: "last_24_h" },
  { text: "Last 7 Days", to: "/rankings/last_7_d", name: "last_7_d" },
  { text: "Last 30 Days", to: "/rankings/last_30_d", name: "last_30_d" },
  {
    text: "All Time",
    to: "/rankings/last_All Time3All Time0_d",
    name: "All Time",
  },
];
