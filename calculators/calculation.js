const xlsx = require("xlsx");

let wb = xlsx.readFile("Key_Production_Calculator_v2.xlsx", {cellDates:true});


let ws = wb.Sheets["Calculator"];

let customerName, projectName, elevation, benchHeight, 
subDrilling, setPulldown, temp, burden, spacing, 
rotationSpeed, hoursPer, daysPer, rockUCS, rockDensity; 

customerName = 'JUSTIN'
projectName = 'yooooo'
elevation = 1000;
benchHeight = 1000;
subDrilling = 1000;
setPulldown = 1000;
temp = 50;
burden = 10;
spacing = 10;
rotationSpeed = 100;
hoursPer = 20;
daysPer = 200;
rockUCS = 200;
rockDensity = 2;


ws["N24"] = {
    t: 's',
    v: rockDensity,
    r: rockDensity,
    h: rockDensity,
    w: rockDensity
}

ws["N21"] = {
    t: 's',
    v: rockUCS,
    r: rockUCS,
    h: rockUCS,
    w: rockUCS
}

ws["N13"] = {
    t: 's',
    v: daysPer,
    r: daysPer,
    h: daysPer,
    w: daysPer
}

ws["N12"] = {
    t: 's',
    v: hoursPer,
    r: hoursPer,
    h: hoursPer,
    w: hoursPer
}

ws["I27"] = {
    t: 's',
    v: rotationSpeed,
    r: rotationSpeed,
    h: rotationSpeed,
    w: rotationSpeed
}

ws["I21"] = {
    t: 's',
    v: burden,
    r: burden,
    h: burden,
    w: burden
}

ws["I24"] = {
    t: 's',
    v: spacing,
    r: spacing,
    h: spacing,
    w: spacing
}

ws["I12"] = {
    t: 's',
    v: temp,
    r: temp,
    h: temp,
    w: temp
}

ws["D32"] = {
    t: 's',
    v: setPulldown,
    r: setPulldown,
    h: setPulldown,
    w: setPulldown
}

ws["D24"] = {
    t: 's',
    v: subDrilling,
    r: subDrilling,
    h: subDrilling,
    w: subDrilling
}

ws["D4"] = {
    t: 's',
    v: customerName,
    r: customerName,
    h: customerName,
    w: customerName
}

ws["I4"] = {
    t: 's',
    v: projectName,
    r: projectName,
    h: projectName,
    w: projectName
}

ws["D12"] = {
    t: 's',
    v: elevation,
    r: elevation,
    h: elevation,
    w: elevation
}

ws["D21"] = {
    t: 's',
    v: benchHeight,
    r: benchHeight,
    h: benchHeight,
    w: benchHeight
}

xlsx.writeFile(wb, "New.xlsx");