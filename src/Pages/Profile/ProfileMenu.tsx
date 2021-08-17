import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../Components/MenuItem/MenuItem";
import { menuData } from "./ProfileData";

interface Props {}

export const ProfileMenu: React.FC<Props> = () => {
  const [state, setstate] = useState<string>("Profile");
  const handleActiveTab = (item: any): void => {
    setstate(item.name);
  };
  return (
    <div className="profile_content_menu">
      {menuData.map((item, indx) => (
        <
          // div
          // key={indx}
          // className={state === item.name ? "menuItem active" : "menuItem"}
          // onClick={() => handleActiveTab(item)}
        >
          <Link
            to={item.name === "Profile" ? "/profile" : `/profile/${item.name}`}
            className={state === item.name ? "menuItem active" : "menuItem"}
            onClick={() => handleActiveTab(item)}
          >
            <MenuItem text={item.text} icon={item.icon} name={item.name} />
          </Link>
        </>
      ))}
    </div>
  );
};
