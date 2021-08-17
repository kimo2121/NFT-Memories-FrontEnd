import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./SliderButton.css";
const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: "80%",
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}
interface IProp {
  value?: any;
  setValue?: any;
}
const RangeSlider: React.FC<IProp> = ({ value, setValue }) => {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Slider
        max={10000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{ color: "#FF000A", marginTop: "22px" }}
      />
    </div>
  );
};
export default RangeSlider;
