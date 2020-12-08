import React, { useState, useEffect } from 'react';
import './calc.css'
import NavBar from '../../components/Header/NavBar'
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
import drills from '../../Data/drills.json';
import { getVaildDrills } from '../../helpers/functions';
import viewInputs from './viewInputs';
import viewDrills from './viewDrills';

const Input = () => {
    const [input, setInput] = useState({})
    const [output, setOutput] = useState([])
    const [submitting, setSubmitting] = useState(true);
    const toggle = () => { setSubmitting(!submitting) };

    let Bit;
    let Burden;
    let Spacing;
    let Bench;
    let Sub_Drilling;
    let Density;
    let penRate;
    let meterDrilled;
    let targetUtil;
    let targetProdHour;
    let targetProdTon;
    let drillingIdx;
    let inSchema = {};


    let all_drills = [];
    let id = 1;
    drills.forEach(element => {
        element["id"] = id
        all_drills.push(element)
        id++
    });

    function handleIn() {
        inSchema = {
            bit: Bit,
            bur: Burden,
            spa: Spacing,
            ben: Bench,
            sub: Sub_Drilling,
            den: Density,
            idx: drillingIdx,
            pen: penRate,
            met: meterDrilled,
            util: targetUtil,
            proHour: targetProdHour,
            proTon: targetProdTon,

        }
    }

    function handleSubmit() {
        setInput(inSchema);
        setOutput(getVaildDrills(Bit, Bench, Sub_Drilling, Density, all_drills));
        toggle();
    }
    if (!isLoggedIn()) {
        return <Redirect to="/Login" />;
    }
    return (
        <div >
            <div className="calc-navbar">
                <NavBar></NavBar>
            </div>
            <header className="calc-header">{submitting ? 'Inputs' : 'Results'}</header>
            <div className="calc-form">
                {submitting &&
                    <form id="Parameter-List" onSubmit={() => { handleIn(); handleSubmit(); }}>
                        Bit (mm):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Bit = e.target.value }}
                            required />

                            Burden (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Burden = e.target.value }}
                            required />

                            Spacing (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Spacing = e.target.value }}
                            required />

                            Bench (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Bench = e.target.value }}
                            required />

                            Sub-Drilling (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Sub_Drilling = e.target.value }}
                            required />

                            Rock Density (UCS):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Density = e.target.value }}
                            required />


                            Drilling Index:
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { drillingIdx = e.target.value }}
                            required />

                            Current Pen Rate (m/hr):
                <input className="calc-input"
                            type="text"
                            onChange={(e) => { penRate = e.target.value }}
                            required />

                            Meter Drilled per Shift (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { meterDrilled = e.target.value }}
                            required />

                            Target Utilization (%):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { targetUtil = e.target.value }}
                            required />

                            Target Production Hours per Month (hr):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { targetProdHour = e.target.value }}
                            required />

                            Target Production Tonnage per Month (ton):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { targetProdTon = e.target.value }}
                            required />

                        <input className="calc-button" type="submit" name="Submit"></input>

                    </form>}

                {!submitting &&
                    <div>
                        Input Paramters
                        <p>{viewInputs(input)}</p>
                        Avaible Drills
                        <p>{viewDrills(output)}</p>

                        <button className="calc-button" onClick={() => toggle()}>Return</button>
                    </div>
                } </div>
        </div >
    );

}

export default Input