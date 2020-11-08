import React, { useState, useEffect } from 'react';

function Input(props) {
    let RigModel = 'Rig 1';
    let HoleDiameter;
    let HoleDepth;
    let Material;
    let Elevation;
    let AmbientTemp;

    const handleSubmit = () => {
        alert('Your Rig Model is: ' + RigModel +
            '\nYour Hole Diameter is: ' + HoleDiameter +
            '\nYour Hole Depth is: ' + HoleDepth +
            '\nYour Material is: ' + Material);
    }


    return (
        <form id="Parameter-List" onSubmit={() => handleSubmit()}>
            <label>
                Pick your rig model:
            <select onChange={(e) => { RigModel = e.target.value; }}>
                    <option value="Rig 1">Rig 1</option>
                    <option value="Rig 2">Rig 2</option>
                    <option value="Rig 3">Rig 3</option>
                    <option value="Rig 4">Rig 4</option>
                </select>
            </label>
            <p>
                Hole Diameter (m):
            <input
                    type="text"
                    onChange={(e) => {
                        HoleDiameter = e.target.value;
                    }}
                    required />
            </p>
            Hole Depth (m):
            <input
                type="text"
                onChange={(e) => {
                    HoleDepth = e.target.value;
                }}
                required />
            <p>
                Material Type:
            <input
                    type="text"
                    onChange={(e) => {
                        Material = e.target.value;
                    }}
                    required />
            </p>
            Elevation (m):
            <input
                type="text"
                onChange={(e) => {
                    Elevation = e.target.value;
                }}
                required />
            <p>
                Ambient Temperature (C):
            <input
                    type="text"
                    onChange={(e) => {
                        AmbientTemp = e.target.value;
                    }}
                    required />
            </p>
            <input type="submit" value="Submit" />
        </form>
    );

}

export default Input