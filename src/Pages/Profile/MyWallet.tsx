import "./Profile.css";
import { ProfileContent } from "./ProfileContent";
import { ProfileSidebar } from "./ProfileSidebar";

interface Props {}
const Profile: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <ProfileSidebar />
        <ProfileContent page="wallet" />
      </div>
    </div>
  );
};
export default Profile;
