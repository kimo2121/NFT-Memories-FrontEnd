import { ProfileInfo } from "./ProfileInfo";
import { Profile_Offers } from "./Profile_Offers";

import { MdModeEdit } from "react-icons/md";
import { EditProfileInfo } from "./EditProfileInfo";
import { ProfileMenu } from "./ProfileMenu";
import { WalletInput } from "./WalletInput";

interface Props {
  cover?: String;
  page?: String;
}

export const ProfileContent: React.SFC<Props> = ({ cover, page }) => {
  return (
    <div className="profile_content">
      <MdModeEdit className="editIcon" />

      {cover ? (
        <div
          className="profile_cover"
          style={{ background: "#EEEEF296" }}
        ></div>
      ) : (
        <img
          src="https://i.pinimg.com/originals/db/52/48/db5248dd3efb452a013560953e1f9293.jpg"
          alt="cover"
          className="profile_cover"
        />
      )}

      <div style={{ padding: ".5rem 1rem" }}>
        <ProfileInfo />
        <ProfileMenu />
        {page === "profile" && <EditProfileInfo />}
        {page === "wallet" && <WalletInput />}
        {page === "offers" && <Profile_Offers />}
        {/* {page === "favorites" && <Profile_Offers />} */}
        {/* {page === "activity" && <Profile_Offers />} */}
      </div>
    </div>
  );
};
