/* The Unknown Type */
var userInput;
var userName;
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
