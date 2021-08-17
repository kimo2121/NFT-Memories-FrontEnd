import { useState } from "react";

interface Props {
  text: string;
  icon: any;
  activeIcon?: boolean;
}

const MenuItem: React.FC<Props> = ({ text, icon, activeIcon }) => {
  const [Active, setActive] = useState(true);
  const defaultColor = "#B8B8B8";
  const activeColor = "#FF0000";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "2rem",
      }}
    >
      <p
        style={{
          fontSize: "1.7rem",
          marginRight: ".2rem",
          paddingTop: "4px",
          color: Active ? activeColor : defaultColor,
        }}
      >
        {icon}
      </p>
      <h5
        className="p"
        style={{ letterSpacing: "1.5px", fontFamily: "Montserrat" }}
      >
        {text}
      </h5>
    </div>
  );
};
export default MenuItem;
