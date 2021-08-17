import { Avatar } from "@material-ui/core";
import { GoPerson } from "react-icons/go";
import WolfIcon from "../../assets/wolfIcon.png";
interface Props {
  name?: String;
  id?: String;
  imgUrl?: String;
}

export const ProfileInfo: React.SFC<Props> = ({ name, id, imgUrl }) => {
  return (
    <div className="profile_content_top">
      <h1 className="profileInfo_header">My Profile</h1>
      <div className="profileInfo_img_container">
        {!imgUrl ? (
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dDKJKyWWHiJIPlMqZBSYfCepxMJVzweEuTCmseyCzhBGwjcKNZWrj00xREU_UioMHTI&usqp=CAU"
            className="profileInfo_avatar"
          />
        ) : (
          <GoPerson className="profileImgIcon" />
        )}

        <h2 className="p profileInfo_username">Jessica Blair</h2>
        <h6 className="p profileInfo_userId">
          0x38FFD8…..1F3
          <span>
            <img
              src={WolfIcon}
              alt="wolfIcon"
              className="profileInfo_userId_icon"
            />
          </span>
        </h6>
      </div>
    </div>
  );
};
