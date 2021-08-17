import { BasicTable } from "../../Components/BasicTable";
import "./Ranking.css";
import { RankingsDropdowns } from "./RankingsDropdowns";
interface Props {}

export const Rankings: React.SFC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontFamily: "Raleway", fontSize: "1.4rem" }}> Top NFTs</p>
      <RankingsDropdowns />
      <BasicTable />
    </div>
  );
};
