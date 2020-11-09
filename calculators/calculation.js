const xlsx = require("xlsx");

let wb = xlsx.readFile("calculators/Key_Production_Calculator_v2.xlsx", {cellDates:true});

let ws = wb.Sheets["Calculator"];

let customerName, projectName; 

customerName = 'Justin'
projectName = 'yooooo'


ws["D4"] = {
    t: 's',
    v: customerName,
    r: '<t>Customer Name</t>',
    h: customerName,
    w: customerName
}

ws["I4"] = {
    t: 's',
    v: projectName,
    r: '<t>Project Name</t>',
    h: projectName,
    w: projectName
}


xlsx.writeFile(wb, "New.xlsx");