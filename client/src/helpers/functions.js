/**
 * Write all your functions here and export them to use in each respective component
 */

const getVaildDrills = (bit, bench, sub_drilling, UCSdensity, TONdensity, PenRate, tonReq, Burden, Spacing, targetUtil, allDrills) => {
    // Filter out invalid drills
    for (let i = 0; i < allDrills.length; i++) {
        if (allDrills[i].bitMin > bit || allDrills[i].bitMax < bit) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    let depth = parseFloat(bench) + parseFloat(sub_drilling);
    for (let i = 0; i < allDrills.length; i++) {
        if (depth > (Number(allDrills[i].depthTotal) * 3.28)) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < allDrills.length; i++) {
        if (UCSdensity > allDrills[i].maxUCS) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    // Calculate Net Penetration Rate & Hours of Drilling & Drilling Required & Fleet Size & Fleet Capacity
    let dm14 = (Number(Burden) * Number(Spacing) / 27) * (Number(bench) / (Number(bench) + Number(sub_drilling)))
    let drillReq = (Number(tonReq) / (dm14 * Number(TONdensity)))

    let fleetSize;

    let EX21 = Number(bench) / 3.28 + (Number(sub_drilling) / 3.28);
    let EX1 = ((Number(bench) / 3.28 + (Number(sub_drilling) / 3.28)) * 60) / (Number(PenRate) / 3.28);
    let EX8;
    let EX23;
    let NetPen;
    let HoursDrilled;

    let fleetH;
    let fleetCapM;
    let fleetCapT;

    for (let i = 0; i < allDrills.length; i++) {
        EX8 = Number(EX1) + ((Number(allDrills[i].PipeLength) / Number(allDrills[i].Retract))) + Number(allDrills[i].SetUp);
        EX23 = Number(EX8) / 60;
        NetPen = (Number(EX21) / Number(EX23)) / .3048;
        HoursDrilled = drillReq / NetPen;
        fleetSize = Math.ceil(HoursDrilled / ((Number(targetUtil) / 100) * 6000));


        fleetH = fleetSize * 6000 * (Number(targetUtil) / 100);
        fleetCapM = (fleetH * (Number(drillReq) * .3048)) / HoursDrilled;
        fleetCapT = (Number(tonReq) * fleetCapM) / (Number(drillReq) * .3048);


        allDrills[i]["FleetCapM"] = fleetCapM;
        allDrills[i]["FleetCapT"] = fleetCapT;
        allDrills[i]["FleetSize"] = fleetSize;
        allDrills[i]["DrillReq"] = drillReq;
        allDrills[i]["NetPen"] = NetPen;
        allDrills[i]["HoursDrilled"] = HoursDrilled;
    }



    return allDrills;
}


export {
    getVaildDrills
};