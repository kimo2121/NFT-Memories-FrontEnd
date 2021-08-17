import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: String,
  imgUrl: String,
  volume: Number,
  _24h: String,
  _7d: String,
  floor_price: Number,
  owners: Number,
  assets: Number
) {
  return { name, imgUrl, volume, _24h, _7d, floor_price, owners, assets };
}

const rows = [
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "+499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
  createData(
    "Bored Ape Yacht Club",
    "imgUrl",
    8505.98,
    "+50.1",
    "-499.27",
    6.8,
    4.8,
    10.0
  ),
];

interface Props {}

export const BasicTable: React.SFC<Props> = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{ fontWeight: "bold", width: "400px" }}
            >
              Collection
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", padding: "0" }}
            >
              <div>
                Volume
                <span>
                  <ArrowDropDownIcon
                    style={{
                      fontSize: "1.4rem",
                      color: "gray",
                      marginBottom: "-5px",
                    }}
                  />{" "}
                </span>
              </div>
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              {" "}
              24h %{" "}
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              {" "}
              7d %{" "}
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Floor Price
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              {" "}
              Owners{" "}
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              {" "}
              Assets{" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, n) => {
            let _24h_color = row._24h.slice(0, 1) === "+" ? "green" : "red";
            let _7d_color = row._7d.slice(0, 1) === "+" ? "green" : "red";
            return (
              <TableRow key={n}>
                <TableCell align="right">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "300px",
                    }}
                  >
                    <FiberManualRecordIcon
                      style={{
                        fontSize: ".8rem",
                        color: "green",
                      }}
                    />
                    <p style={{ margin: "0 1rem " }}> {n + 1} </p>
                    <Avatar
                      alt="Remy Sharp"
                      // src="/static/images/avatar/1.jpg"
                      style={{ marginRight: "1rem" }}
                    />
                    <p> {row.name} </p>
                  </div>
                </TableCell>
                <TableCell align="right">{row.volume}</TableCell>
                <TableCell
                  align="right"
                  style={{ color: _24h_color, opacity: ".6" }}
                >
                  {row._24h}%
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: _7d_color, opacity: ".6" }}
                >
                  {row._7d}%
                </TableCell>
                <TableCell align="right">{row.floor_price}</TableCell>
                <TableCell align="right">{row.owners}K</TableCell>
                <TableCell align="right">{row.assets}K</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
