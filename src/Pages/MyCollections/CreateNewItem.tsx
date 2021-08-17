import ImgPlaceholder from "../../assets/ImgPlaceholder.svg";
import InputField from "../../Components/InputField";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { CreateItemRaw } from "./CreateItemRaw";
import MainButton from "../../Components/MainButton";
import ListIcon from "@material-ui/icons/List";
import StarRateIcon from "@material-ui/icons/StarRate";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import WarningIcon from "@material-ui/icons/Warning";
import { Switch } from "@material-ui/core";

interface Props {}

export const CreateNewItem: React.FC<Props> = (props) => {
  const subheaderSupply = (
    <div className="">
      The number of copies that can be minted. No gas cost to you! Quantities
      above one coming soon. <AiOutlineInfoCircle />
    </div>
  );
  const senestiveContent = (
    <div className="">
      Set this item as explicit and senstive conetnt. <AiOutlineInfoCircle />
    </div>
  );
  const plusIcon = (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        border: "1px solid blue",
        borderRadius: "5px",
        color: "blue",
        padding: "5px 10px ",
      }}
    >
      +
    </div>
  );
  const SwitchElemnt = (
    <Switch
      //   checked={state.checkedB}
      //   onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          textAlign: "left",
          padding: "0 2rem",
          opacity: ".8",
          width: "80%",
        }}
      >
        <h2>Create New Item</h2>
        <h4 className="p">Image,Vidoe,Audio or 3D Modal</h4>
        <h4 className="p" style={{ fontWeight: "normal" }}>
          File types supported JPG,PNG,SVG,MP4,MPX,WAV,OGG,GLB,GLTF,max size 40
          MB
        </h4>
        <div
          style={{
            border: "3px dashed  lightgray",
            borderRadius: "5px",
            width: "250px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          <img
            src={ImgPlaceholder}
            alt="ImgPlaceholder"
            style={{ width: "50px", height: "50px" }}
          />
          <h5 style={{ color: "gray" }}>
            Drage & drop file <br /> or{" "}
            <span style={{ color: "#38a9f0" }}>
              brwose media on your device
            </span>
          </h5>
        </div>
        <br />
        <InputField label="Name*" placeholder="Item Name" />
        <InputField
          label="Description"
          textArea
          subheader="The description will be included on the item's detail page underneath its image. Markdown syntax is supported"
          placeholder="Provide a detailed description of your item"
        />
        <CreateItemRaw
          leftIcon={<ListIcon />}
          rightIcon={plusIcon}
          header="Properties"
          subheader="Textual trais that show up as rectangles "
        />
        <CreateItemRaw
          leftIcon={<StarRateIcon />}
          rightIcon={plusIcon}
          header="Levels"
          subheader="Numerical trais that show up as progressbar "
        />
        <CreateItemRaw
          leftIcon={<EqualizerIcon />}
          rightIcon={plusIcon}
          header="Stats"
          subheader="Numerical trais that show up as numbers "
        />
        <CreateItemRaw
          leftIcon={<LockOpenIcon style={{ opacity: ".3" }} />}
          rightIcon={SwitchElemnt}
          header="Unlockable Content"
          subheader="Include unlockable content that can only be revealed by the owner of the item. "
        />
        <CreateItemRaw
          leftIcon={<WarningIcon />}
          rightIcon={SwitchElemnt}
          header="Explicit and Sensetive Content"
          subheader={senestiveContent}
        />
        <InputField
          label="Supply"
          subheader={subheaderSupply}
          placeholder="1"
        />
        <h4 style={{ display: "flex", alignItems: "cnter" }}>
          Freeze metadata{" "}
          <AiOutlineInfoCircle
            style={{ fontSize: "1.5rem", marginLeft: "5px", opacity: ".5" }}
          />
        </h4>
        <InputField
          label="Freezing your metadata will allow you permanetlly lock and sotre all this item's conent in decentralize file storage. "
          subheader={subheaderSupply}
          placeholder="To freez your metadata,you must create your item first"
        />
      </div>

      <div style={{ textAlign: "left", width: "50%", margin: "1rem 2rem" }}>
        <MainButton
          text="Create"
          borderRadius="2rem"
          capitalize={true}
          width="170px"
        />
      </div>
    </div>
  );
};
