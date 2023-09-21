// # === math-level-1-1 ===
console.log("%c === math-level-1-1 ===", "background: red; color: yellow");
console.log(Math.PI);
const pi= Math.PI;
console.log(pi.toFixed(2));


// # === math-level-1-2 ===
console.log("%c === math-level-1-2 ===", "background: red; color: yellow");
let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

function zahlRunden(zahl){
    return Math.round(zahl);
}

console.log(zahlRunden(array[0]));
console.log(zahlRunden(array[1]));
console.log(zahlRunden(array[2]));
console.log(zahlRunden(array[3]));


// # === math-level-1-3 ===
console.log("%c === math-level-1-3 ===", "background: red; color: yellow");
let randomNum= Math.random();
let randomNum1_10= Math.floor(Math.random() * 10);
let randomNum1_100= Math.floor(Math.random() * 100);
console.log({randomNum});
console.log({randomNum1_10});
console.log({randomNum1_100});

// # === math-level-2-1 ===
console.log("%c === math-level-2-1 ===", "background: red; color: yellow");

function roundTo(zahl, genauigkeit){
    return (zahl.toFixed(genauigkeit));

}

console.log(roundTo(3.1415926535, 5));