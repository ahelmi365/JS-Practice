const allNumbers = document.getElementsByClassName('numbers')
// console.log(allNumbers)

const allBTNS = document.getElementsByTagName('button');
const calculator = document.getElementById('container');
const resultArea = document.getElementById('result');

// let calcThis = [];
let calcThis = "";
calculator.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.id == "clear") {
        // calcThis = [];
        calcThis = ""
        console.log(calcThis);
    }
    if (e.target.dataset['calc'] == "calc") {
        // console.log(e.target.id);
        // calcThis.push(e.target.id);
        calcThis += e.target.id;
        console.log(calcThis);

    }
    if (e.target.id == "equal") {
        if (calcThis.includes("add")) {
            const bothSisde = calcThis.split("add");
            console.log(Number(bothSisde[0]) + Number(bothSisde[1]));
            resultArea.textContent = Number(bothSisde[0]) + Number(bothSisde[1]);

        } else if (calcThis.includes("subtract")) {
            const bothSisde = calcThis.split("subtract");
            console.log(Number(bothSisde[0]) - Number(bothSisde[1]));
            resultArea.textContent = Number(bothSisde[0]) - Number(bothSisde[1]);

        } else if (calcThis.includes("multiply")) {
            const bothSisde = calcThis.split("multiply");
            console.log(Number(bothSisde[0]) * Number(bothSisde[1]));
            resultArea.textContent = Number(bothSisde[0]) * Number(bothSisde[1]);

        } else if (calcThis.includes("devide")) {
            const bothSisde = calcThis.split("devide");
            if (Number(bothSisde[1]) == 0) {
                console.log("Cannot divide by ZERO");
                resultArea.textContent = "Cannot divide by ZERO";
            } else {
                console.log(Number(bothSisde[0]) / Number(bothSisde[1]));
                resultArea.textContent = Number(bothSisde[0]) / Number(bothSisde[1]);
            }
        }
        calcThis = ""
    }
})