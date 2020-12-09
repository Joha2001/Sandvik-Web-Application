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
                        <TableCell >Drills</TableCell>
                        <TableCell align="right">Drilling Required (ft)</TableCell>
                        <TableCell align="right">Net Penetration Rate (ft/hr)</TableCell>
                        <TableCell align="right">Hours Drilled (hr)</TableCell>
                        <TableCell align="right">Fleet Size (drills)</TableCell>
                        <TableCell align="right">Fleet Capacity (m)</TableCell>
                        <TableCell align="right">Fleet Capacity (ton)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {output.map((drill) => (
                        <TableRow key={drill.drillName}>
                            <TableCell component="th" scope="row">{drill.drillName}</TableCell>
                            <TableCell align="right">{Math.ceil(drill.DrillReq)}</TableCell>
                            <TableCell align="right">{drill.NetPen.toFixed(1)}</TableCell>
                            <TableCell align="right">{Math.ceil(drill.HoursDrilled)}</TableCell>
                            <TableCell align="right">{Math.ceil(drill.FleetSize)}</TableCell>
                            <TableCell align="right">{Math.ceil(drill.FleetCapM)}</TableCell>
                            <TableCell align="right">{Math.ceil(drill.FleetCapT)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default viewDrills;