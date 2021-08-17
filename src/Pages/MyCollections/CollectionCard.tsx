import { Paper } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

interface Props {}

export const CollectionCard: React.FC<Props> = (props) => {
  return (
    <Card
      style={{
        height: "250px",
        // width: "100%",
        // minWidth: "100px",
        // padding: "10px",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        margin: "1rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
          title="Contemplative Reptile"
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Silesville
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Link to={`/collections/1`}>
          <Button
            size="small"
            color="primary"
            style={{ color: "red", marginLeft: "1rem" }}
          >
            View Item
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
