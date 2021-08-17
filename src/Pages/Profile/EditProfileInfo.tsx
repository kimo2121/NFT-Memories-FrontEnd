import InputField from "../../Components/InputField";
import InputFieldWithIcon from "../../Components/InputFieldWithIcon";
import { MdContentCopy } from "react-icons/md";

interface Props {}

export const EditProfileInfo: React.FC<Props> = (props) => {
  return (
    <>
      {/* profil edit info  */}
      <div className="profile_form">
        <h3
          className="p"
          style={{ margin: ".5rem 0", fontFamily: "Montserrat" }}
        >
          General Settings
        </h3>
        <InputField label="Username" placeholder="JessicaB1234" />
        <InputField
          label="Bio"
          placeholder="Social media influencer and creator from the Bronx. I enjoy Central Park and music with my cats."
          textArea
        />
        <InputField label="Email Address" placeholder="jb1234@yahoo.com" />
      </div>
    </>
  );
};
