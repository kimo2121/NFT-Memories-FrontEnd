import "./Profile.css";
import { ProfileContent } from "./ProfileContent";
import { ProfileSidebar } from "./ProfileSidebar";

interface Props {}
const Activity: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <ProfileSidebar />
        <ProfileContent page="ativity" />
      </div>
    </div>
  );
};
export default Activity;
