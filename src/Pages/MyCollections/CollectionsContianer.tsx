import { Grid } from "@material-ui/core";
import { CollectionCard } from "./CollectionCard";
import { CreateCollection } from "./CreateCollection";

interface Props {}

export const CollectionsContianer: React.FC<Props> = (props) => {
  return (
    <>
      <Grid container style={{ margin: "1rem" }}>
        <Grid item sm={12} xs={12}>
          <p style={{ textAlign: "left", fontSize: "2rem" }}>My Collections</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CreateCollection />
        </Grid>

        {Array(10)
          .fill(10)
          .map((i, n) => (
            <Grid item xs={12} sm={4}>
              <CollectionCard />
            </Grid>
          ))}
        {/* {Array(10)
          .fill(10)
          .map((i, n) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                // margin: "0 1rem 1rem 1rem",
              }}
            >
              <CollectionCard />
            </div>
          ))} */}
      </Grid>
    </>
  );
};
