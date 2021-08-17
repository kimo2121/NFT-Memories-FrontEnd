import { useState } from "react";
import { Link } from "react-router-dom";
import { data1 } from "./ProfileData";
interface Props {}

export const ProfileSidebar: React.FC<Props> = (props) => {
  const [state, setstate] = useState<string>("profile");
  const handleActiveTab = (item: any): void => {
    setstate(item.name);
  };

  return (
    <div className="profile_sidebar">
      <div className="profile_sidebar_content">
        {data1.map((item, indx) => (
          <Link
            key={indx}
            className={
              state === item.name
                ? "each-profile-tab active"
                : "each-profile-tab"
            }
            onClick={() => handleActiveTab(item)}
            to={`/${item.name}`}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
