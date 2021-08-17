import { ProfileSidebar } from "../Profile/ProfileSidebar";
import { CollectionItem } from "./CollectionItem/CollectionItem";

interface Props {}

export const CollectionItemPage: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <div className="profile_edit"></div>
        <ProfileSidebar />
        <CollectionItem />
      </div>
    </div>
  );
};
