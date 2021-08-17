import { Button } from "@material-ui/core";

interface Props {
  text: String;
  capitalize?: Boolean;
  borderRadius?: String;
  width?: String;
  outlined?: Boolean;
  onClick?: any;
}

const MainButton: React.FC<Props> = ({
  text,
  capitalize,
  borderRadius,
  width,
  outlined,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      disableElevation
      style={{
        background: outlined ? "white" : "#FF0000",
        color: outlined ? "black" : "white",
        padding: "8px 1.5rem",
        fontSize: "1rem",
        borderRadius: `${borderRadius ? borderRadius : "8px"}`,
        textTransform: `${capitalize ? "capitalize" : "uppercase"}`,
        // textTransform: `capitalize`,
        fontWeight: "bold",
        width: width ? `${width}` : "",
        border: outlined ? "1px solid black" : "",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
export default MainButton;
