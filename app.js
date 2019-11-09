'use strict';
function sum(a, b) {
    var answer = a + b;
    var newSent = `The sum of ${a} and ${b} is ${answer}.`;
    var returnArray = [answer, newSent];
    return returnArray;
}
testSum(4, 7);
////////////////////////////////////////////////////////////////////////////////
// Write your code here
function multiply(a, b) {
    var answer = a * b;
    var newSent = `The product of ${a} and ${b} is ${answer}.`;
    var returnArray = [answer, newSent];
    return returnArray;
}
testMultiply(5, 9);
///////////////////////////////////////////////////////////////////////////////////
//Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var summation = sum(sum(a, b)[0], c)[0];
    var product = multiply(multiply(a, b)[0], c)[0];
    var thirdElement = `${a} and ${b} and ${c} sum to ${summation}.`;
    var fourthElement = `The product of ${a} and ${b} and ${c} is ${product}.`;
    var arr = [summation, product, thirdElement, fourthElement];
    return arr;
}
testSumAndMultiply(4, 7, 5);
///////////////////////////////////////////////////////////////////////////////////

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { 
    var firstElement = sum(sum(sumArr[0], sumArr[1])[0], sumArr[2])[0];
    var secondElement = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${firstElement} is their sum.`;
    var result = [firstElement, secondElement];
    return result;
}
testSumArray(testArray);
///////////////////////////////////////////////////////////////////////////////////

// // Write your code here
// function multiplyArray(multArr) { //eslint-disable-line
//     var firstElement = multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0];
//     var secondElement = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${firstElement}.`;
//     var result = [firstElement, secondElement];
//     return result;

// }
///////////////////////////////////////////////////////////////////////////////////

// Here is the test for multiplyArray(); uncomment it to run it
 //testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
