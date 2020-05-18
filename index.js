

const readline = require('readline');

const readQuestions = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var strName = "";
var strAge = 0;
var strGender = "";
var strIncome = 0;

readQuestions.question("Please enter your name.\n", (name) => {
    strName = name;
    readQuestions.question("Please enter your Age.\n", (age) => {
        Number.isInteger()
        strAge = age;
        readQuestions.question("Please enter your Gender.\n", (gender) => {
            strGender = gender;
            readQuestions.question("Please enter your Income.\n", (income) => {
                strIncome = income;

                console.log("\n");
                console.log("Please find below details of your income tax");
                console.log("===================================================");

                if (strAge <= 18) {
                    console.log("Hello," + strName + " you are under age for income tax\n");
                    readQuestions.close();
                    return;
                } else {
                    calculateTax()
                }
            });
        });
    });
});

function calculateTax(){
    var totalTax = 0;
    //For Male
    if (strGender == "M" || strGender == "m" || strGender.toLowerCase() == "male") {
        if (strAge <= 59) {
            if (strIncome <= 250000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 250001 && strIncome <= 500000){
                totalTax = ((strIncome - 250000) * 0.05);
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        } else if (strAge >= 60 && strAge <= 80) {
            if (strIncome <= 300000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 300001 && strIncome <= 500000){
                totalTax = ((strIncome - 300000) * 0.05);
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        } else {
            if (strIncome <= 500000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        }
    } else {
        //For Female
        if (strAge <= 59) {
            if (strIncome <= 250000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 250001 && strIncome <= 500000){
                totalTax = ((strIncome - 250000) * 0.05);
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        } else if (strAge >= 60 && strAge <= 80) {
            if (strIncome <= 300000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 300001 && strIncome <= 500000){
                totalTax = ((strIncome - 300000) * 0.05);
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        } else {
            if (strIncome <= 500000){
                console.log("Hello," + strName + " your income tax is NIL\n");
                return;
            } else if (strIncome >= 500001 && strIncome <= 1000000){
                totalTax = ((strIncome - 500000) * 0.2);
            } else {
                totalTax = ((strIncome - 1000000) * 0.3);
            }
        }
    }
    console.log("Hello," + strName + " your income tax is: "+totalTax +"\n");
    readQuestions.close();
}