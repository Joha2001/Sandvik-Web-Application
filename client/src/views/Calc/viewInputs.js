import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function viewInputs(input) {

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Bit&nbsp;(mm)</TableCell>
                        <TableCell align="right">Burden&nbsp;(m)</TableCell>
                        <TableCell align="right">Spacing&nbsp;(m)</TableCell>
                        <TableCell align="right">Bench&nbsp;(m)</TableCell>
                        <TableCell align="right">Sub-Drilling&nbsp;(m)</TableCell>
                        <TableCell align="right">Rock Density&nbsp;(m)</TableCell>
                        <TableCell align="right">Drilling Index</TableCell>
                        <TableCell align="right">Current Pen Rate&nbsp;(m/hr)</TableCell>
                        <TableCell align="right">Meter Drilled per Shift&nbsp;(m)</TableCell>
                        <TableCell align="right">Target Utilization&nbsp;(%)</TableCell>
                        <TableCell align="right">Target Production Hours/Month&nbsp;(hr)</TableCell>
                        <TableCell align="right">Target Production Tonnage/Month&nbsp;(ton)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">{input.bit}</TableCell>
                        <TableCell align="right">{input.bur}</TableCell>
                        <TableCell align="right">{input.spa}</TableCell>
                        <TableCell align="right">{input.ben}</TableCell>
                        <TableCell align="right">{input.sub}</TableCell>
                        <TableCell align="right">{input.den}</TableCell>
                        <TableCell align="right">{input.idx}</TableCell>
                        <TableCell align="right">{input.pen}</TableCell>
                        <TableCell align="right">{input.met}</TableCell>
                        <TableCell align="right">{input.util}</TableCell>
                        <TableCell align="right">{input.proHour}</TableCell>
                        <TableCell align="right">{input.proTon}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default viewInputs;