import "./Profile.css";
import { ProfileContent } from "./ProfileContent";
import { ProfileSidebar } from "./ProfileSidebar";
import { MyCollections } from "../MyCollections/MyCollections";

interface Props {}
const Profile: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <div className="profile_edit"></div>
        <ProfileSidebar />
        {/* <MyCollections /> */}
        <ProfileContent page="profile" />
      </div>
    </div>
  );
};
export default Profile;
