import { ProfileSidebar } from "../Profile/ProfileSidebar";
import { CollectionCard } from "./CollectionCard";
import { CollectionItem } from "./CollectionItem/CollectionItem";
import { CollectionsContianer } from "./CollectionsContianer";
import { CreateCollection } from "./CreateCollection";

interface Props {}

export const MyCollections: React.FC<Props> = (props) => {
  return (
    <div className="profile_body">
      <div style={{ display: "flex" }}>
        <div className="profile_edit"></div>
        <ProfileSidebar />
        {/* <CollectionItem /> */}
        <CollectionsContianer />
      </div>
    </div>
  );
};
