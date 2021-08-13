import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Monday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tuesday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wednesday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thursday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Friday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Saturday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell align="right">6am - 9pm</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
