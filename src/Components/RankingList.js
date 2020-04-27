import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
})) (TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
})) (TableRow);

function createData(jugador, matem, lengua) {
  return { jugador, matem, lengua };
}

const rows = [
  createData('Jug 1', 159, 6.0),
  createData('Jug 2', 237, 9.0),
  createData('Jug 3', 262, 16.0),
  createData('Jug 4', 305, 3.7),
  createData('Jug 5', 356, 16.0),
];

const useStyles = makeStyles({
  table: {
    width: '60%',
    marginLeft: '20%'
  },
});

export default function RankingList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell> Jugador </StyledTableCell>
                    <StyledTableCell align="center"> Matematica </StyledTableCell>
                    <StyledTableCell align="center"> Lengua </StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.jugador}>
                    <StyledTableCell component="th" scope="row"> {row.jugador} </StyledTableCell>
                    <StyledTableCell align="center"> {row.matem} </StyledTableCell>
                    <StyledTableCell align="center"> {row.lengua} </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>

      </Table>

    </TableContainer>
  );
}
