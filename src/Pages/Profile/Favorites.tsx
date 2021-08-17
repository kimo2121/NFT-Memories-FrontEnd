import "./Profile.css";
import { ProfileContent } from "./ProfileContent";
import { ProfileSidebar } from "./ProfileSidebar";

interface Props {}
const Favorites: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <ProfileSidebar />
        <ProfileContent page="favorites" />
      </div>
    </div>
  );
};
export default Favorites;
