import { ProfileSidebar } from "../Profile/ProfileSidebar";
import { CreateNewItem } from "./CreateNewItem";

interface Props {}

export const CreateNewItemPage: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <div className="profile_edit"></div>
        <ProfileSidebar />
        <CreateNewItem />
      </div>
    </div>
  );
};
