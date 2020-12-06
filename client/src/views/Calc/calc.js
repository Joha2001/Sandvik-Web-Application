import React, { useState, useEffect } from 'react';
import './calc.css'
import NavBar from '../../components/Header/NavBar'
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
const Input = (props) => {
    const [input, setInput] = useState({})
    const [output, setOutput] = useState({})
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
    let inSchema = {};

    let RotaryDrill;
    let Savings;
    let outSchema = {};

    function handleIn() {
        inSchema = {
            bit: Bit,
            bur: Burden,
            spa: Spacing,
            ben: Bench,
            sub: Sub_Drilling,
            den: Density,
            pen: penRate,
            met: meterDrilled,
            util: targetUtil,
            proHour: targetProdHour,
            proTon: targetProdTon,

        }
    }

    function handleOut() {
        RotaryDrill = 'Test';
        Savings = 12345;

        outSchema = {
            Drill: RotaryDrill,
            Sav: Savings,
        }
    }


    function handleSubmit() {
        setInput(inSchema);
        setOutput(outSchema);
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
                    <form id="Parameter-List" onSubmit={() => { handleIn(); handleOut(); handleSubmit(); }}>
                        BIT (mm):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Bit = e.target.value }}
                            required />
                        <p>
                            Burden (m):
                <input className="calc-input"
                                type="number"
                                onChange={(e) => { Burden = e.target.value }}
                                required />
                        </p>
                Spacing (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Spacing = e.target.value }}
                            required />
                        <p>
                            Bench (m):
                <input className="calc-input"
                                type="number"
                                onChange={(e) => { Bench = e.target.value }}
                                required />
                        </p>
                Sub-Drilling (m):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { Sub_Drilling = e.target.value }}
                            required />
                        <p>
                            Rock Density (UCS):
            <input className="calc-input"
                                type="number"
                                onChange={(e) => { Density = e.target.value }}
                                required />
                        </p>
                    Current Pen Rate (m/hr):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { penRate = e.target.value }}
                            required />
                        <p>
                            Meter Drilled per Shift (m):
            <input className="calc-input"
                                type="number"
                                onChange={(e) => { meterDrilled = e.target.value }}
                                required />
                        </p>
                    Target Utilization (%):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { targetUtil = e.target.value }}
                            required />
                        <p>
                            Target Production Hours per Month (hr):
            <input className="calc-input"
                                type="number"
                                onChange={(e) => { targetProdHour = e.target.value }}
                                required />
                        </p>
                    Target Production Tonnage per Month (ton):
                <input className="calc-input"
                            type="number"
                            onChange={(e) => { targetProdTon = e.target.value }}
                            required />
                        <p>
                            <input className="calc-button" type="submit" name="Submit"></input>
                        </p>
                    </form>}

                {!submitting &&
                    <div>
                        <div>
                            Your Paramter List: {input.bit}, {input.bur}m, {input.spa}m
                    <p>
                                Your Rotary Drill: {output.Drill}
                            </p>
                    Your Savings: ${output.Sav}
                        </div>
                        <button className="calc-button" onClick={() => toggle()}>Return</button>
                    </div>
                } </div>
        </div >
    );

}

export default Input