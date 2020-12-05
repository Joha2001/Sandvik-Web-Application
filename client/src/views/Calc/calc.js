import React, { useState, useEffect } from 'react';
import './calc.css'
import NavBar from '../../components/Header/NavBar'
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
const Input = () => {
    
    const [input, setInput] = useState({})
    const [output, setOutput] = useState({})
    const [submitting, setSubmitting] = useState(true);
    const toggle = () => { setSubmitting(!submitting) };

    let RigModel = "Rig 1";
    let HoleDiameter;
    let HoleDepth;
    let Material;
    let Elevation;
    let AmbientTemp;
    let inSchema = {};

    let RotaryDrill;
    let Savings;
    let outSchema = {};

    function handleIn() {
        inSchema = {
            Rig: RigModel,
            Dia: HoleDiameter,
            Dep: HoleDepth,
            Mat: Material,
            Ele: Elevation,
            Tem: AmbientTemp,
        }
    }

    function handleOut() {
        if (input.Rig === "Rig 1") {
            RotaryDrill = 'D254S';
            Savings = 750000;
        }
        else if (input.Rig === "Rig 2") {
            RotaryDrill = 'D55SP';
            Savings = 1000000;
        }
        else if (input.Rig === "Rig 3") {
            RotaryDrill = '1190E';
            Savings = 500000;
        }
        else {
            RotaryDrill = 'D75KX';
            Savings = 1250000;
        }

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
        <div>
            <NavBar></NavBar>
            <header className="calc-header">{submitting ? 'Inputs' : 'Results'}</header>
            {submitting &&
                <form id="Parameter-List" onSubmit={() => { handleIn(); handleOut(); handleSubmit(); }}>
                    <label>
                        Pick your rig model:
                        <select onChange={(e) => { RigModel = e.target.value }}>
                            <option value="Rig 1">Rig 1</option>
                            <option value="Rig 2">Rig 2</option>
                            <option value="Rig 3">Rig 3</option>
                            <option value="Rig 4">Rig 4</option>
                        </select>
                    </label>
                    <p>
                        Hole Diameter (m):
                <input
                            type="number"
                            onChange={(e) => { HoleDiameter = e.target.value }}
                            required />
                    </p>
                Hole Depth (m):
                <input
                        type="number"
                        onChange={(e) => { HoleDepth = e.target.value }}
                        required />
                    <p>
                        Material Type:
                <input
                            type="text"
                            onChange={(e) => { Material = e.target.value }}
                            required />
                    </p>
                Elevation (m):
                <input
                        type="number"
                        onChange={(e) => { Elevation = e.target.value }}
                        required />
                    <p>
                        Ambient Temperature (C):
            <input
                            type="number"
                            onChange={(e) => { AmbientTemp = e.target.value }}
                            required />
                    </p>
                    <input type="submit" name="Submit"></input>
                </form>}

            {!submitting &&
                <div>
                    <div>
                        Your Paramter List: {input.Rig}, {input.Dia}m, {input.Dep}m, {input.Mat}, {input.Ele}m, {input.Tem}C
                    <p>
                            Your Rotary Drill: {output.Drill}
                        </p>
                    Your Savings: ${output.Sav}
                    </div>
                    <button onClick={() => toggle()}>Return</button>
                </div>
            }
        </div>
    );

}

export default Input