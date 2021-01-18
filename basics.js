/*---------------Working with Types-------------------- */
// function add(n1:number, n2:number, showResult: boolean){
// // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
// //     throw new Error('Incorrect input!');
// // }
// if(showResult){
//     console.log(n1 + n2);
// }else{
//     return n1 + n2;
// }
// }
// const number1=5;
// const number2=2.8;
// const printResult = true;
// add(number1, number2, printResult);
/*-----Type Casing----- */
/* In Typescript we work with types like string or number all the time.
Important!!! : we are using string and number NOT String AND Number
ALWAYS WE USE PRIMITIVE TYPES IN TYPESCRIPT ARE ALL LOWERCASE!!! */
/*-----Number|Strings|Booleans----- */
function result(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    // because I dont want this to happen I m adding a result
    const result = n1 + n2;
    if (showResult) {
        // a string combine with two numbers here means all string
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
/*-----Types Assignment & Type Inference----- */
const number1 = 5;
const number2 = 2.8;
const printTotal = true;
const resultPhrase = 'Result is: ';
add(number1, number2);
/*-----Nested Object and Types----- */
/* const product = {
    id:'abc1',
    price: 12.99,
    tags:['great-offer', 'hot-and-new'],
    details:{
        title:'Red Carpet',
        description: 'A great carpet - almost brand new!'
    }
}
This would be the type of the object differently:

{
    id:string;
    price:number;
    tags:string[],
    details:{
        title:string;
        description:string;
    }
}*/
/*-----The "any" Type----- */
/*-----Union Types----- */
/*-----Literal Types----- */ 
