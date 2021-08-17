import { useState } from "react";
import "./MenuItem.css";
interface Props {
  text: string;
  name: string;
  icon: any;
}

const MenuItem: React.FC<Props> = ({ text, icon, name }) => {
  return (
    <div
     className="menuItem_contianer"
    >
      <p className="menuItem_icon">{icon}</p>
      <p className="p menuItem_text">{text}</p>
    </div>
  );
};
export default MenuItem;
