// /* Function return type & "void" */
// function addNumber(n1: number, n2: number): number {
//   return n1 + n2;
// }
// // the void function doesn't have a return statement 
// //because it doesn't return anything
// function printResult(num: number):void {
//   console.log("Result: " + num);
// }

// /* Function Callbacks */
// function addAndHandler(n1: number, n2: number, cb:(num: number)=>void){
//     const result = n1 + n2;
//     cb(result);
// }

// printResult(add(5, 12));
// /* Function Types */
// // Are functions describing the values and the Parameters
// // A combine function is a function that takes two numbers and return a number
// // now we can say that combine function, take two parameters, where each one takes two numbers and return us a number
// let combineValues: (a: number, b:number) => number;

// // combineValues does not complain because it complies with the definition of line 16
// combineValues = add;
// // but here it complain because it takes a number but it doesnt return nothing.
// // combineValues = printResult;
// // combineValues = 6; 

// console.log(combineValues(8,8));

// addAndHandler(10, 20, (result) => {
//     console.log(result)
// });

// function sendRequest(_data: string, cb: (response: any) => void) {
//     // ... sending a request with "data"
//     return cb({data: 'Hi there!'});
//   }
   
//   sendRequest('Send this!', (response) => { 
//     console.log(response);
//     return true;
//    });