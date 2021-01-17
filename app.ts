/* The Unknown Type */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Dimos";
if (typeof userInput === "string") {
  userName = userInput;
}

/*The never Type */

function generateError(message: string, code: number){
    throw {message: message, errorCode: code};
}
generateError('An error occur!', 500);