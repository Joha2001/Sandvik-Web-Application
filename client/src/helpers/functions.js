/**
 * Write all your functions here and export them to use in each respective component
 */

const getVaildDrills = (bit, bench, sub_drilling, density, allDrills) => {
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

    return allDrills;
}



export {
    getVaildDrills
};