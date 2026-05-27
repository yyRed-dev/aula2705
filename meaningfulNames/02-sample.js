let d1 = "2024-01-01";
let d2 = "2024-12-31";

function calcDif(d1, d2) {
    return new Date(d2) - new Date(d1);
}

let res = calcDif(d1, d2);
console.log(res);