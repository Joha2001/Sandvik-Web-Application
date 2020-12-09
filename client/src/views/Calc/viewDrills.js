import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function viewDrills(output) {
    return (
        <TableContainer component={Paper}>
            <Table size="large" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Drills</TableCell>
                        <TableCell align="right">Net Penetration Rate</TableCell>
                        <TableCell align="right">Hours Drilled</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {output.map((drill) => (
                        <TableRow key={drill.drillName}>
                            <TableCell component="th" scope="row">{drill.drillName}</TableCell>
                            <TableCell align="right">{drill.NetPen}</TableCell>
                            <TableCell align="right">{drill.HoursDrilled}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default viewDrills;