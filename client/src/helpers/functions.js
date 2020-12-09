/**
 * Write all your functions here and export them to use in each respective component
 */

const getVaildDrills = (bit, bench, sub_drilling, density, PenRate, drillReq, allDrills) => {
    // Filter out invalid drills
    for (let i = 0; i < allDrills.length; i++) {
        if (allDrills[i].bitMin > bit || allDrills[i].bitMax < bit) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    let depth = parseFloat(bench) + parseFloat(sub_drilling);
    for (let i = 0; i < allDrills.length; i++) {
        if (depth > allDrills[i].depthTotal) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < allDrills.length; i++) {
        if (density > allDrills[i].maxUCS) {
            allDrills.splice(i, 1);
            i--;
        }
    }

    // Calculate Net Penetration Rate & Hours of Drilling
    let EX21 = Number(bench) + Number(sub_drilling);
    let EX1 = (Number(bench) + Number(sub_drilling) * 60) / Number(PenRate);
    let EX8;
    let EX23;
    let NetPen;
    let HoursDrilled;

    for (let i = 0; i < allDrills.length; i++) {
        EX8 = Number(EX1) + ((Number(allDrills[i].PipeLength) / Number(allDrills[i].Retract))) + Number(allDrills[i].SetUp);
        EX23 = Number(EX8) / 60;
        NetPen = (Number(EX21) / Number(EX23)) / .3048;
        HoursDrilled = Number(drillReq) / Number(NetPen);
        allDrills[i]["NetPen"] = NetPen;
        allDrills[i]["HoursDrilled"] = HoursDrilled;
    }



    return allDrills;
}

const getDrillReq = (tonReq, Burden, Spacing, Bench, Sub_Drill, Density) => {
    let drillReq = Number(tonReq) / (((Number(Burden)) * Number(Spacing) / 27 * (Number(Bench) / (Number(Bench) + Number(Sub_Drill)))) * Number(Density));

    return drillReq;
}


export {
    getVaildDrills, getDrillReq
};