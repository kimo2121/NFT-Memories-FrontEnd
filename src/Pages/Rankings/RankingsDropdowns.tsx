import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { allCatogries, hisotry } from "./RankingsData";

interface Props {}

export const RankingsDropdowns: React.SFC<Props> = (props) => {
  return (
    <div className="ranking_dropdown_container">
      <div className="ranking_leftDropdown ranking_dropdown">
        <h4 className="p">Last 7 Days</h4>

        <Dropdown
          marginTop
          data={hisotry}
          hideIcon
          icon={
            <ExpandMoreRoundedIcon
              style={{ fontSize: "4rem", color: "#E7E8ED", height: "3em" }}
            />
          }
        />
      </div>
      <div className="ranking_dropdown">
        <h4 className="p">All Categories</h4>

        <Dropdown
          marginTop
          data={allCatogries}
          hideIcon
          icon={
            <ExpandMoreRoundedIcon
              style={{ fontSize: "4rem", color: "#E7E8ED", height: "" }}
            />
          }
        />
      </div>
    </div>
  );
};
