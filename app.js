"use strict";
/* The Unknown Type */
let userInput;
let userName;
userInput = 5;
userInput = "Dimos";
if (typeof userInput === "string") {
    userName = userInput;
}
/*The never Type */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occur!', 500);
