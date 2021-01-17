"use strict";
/*-----Object Types----- */
//    const person:{
//        name:string;
//        age:number;
//        hobbies:string[];
/*-----Working with Tuples----- */
/* tells typescript I want to have a special array with first element
a number and a second element a string */
//    role:[number,string];
//    } = {
//     name: 'Dimos',
//     age: 30,
/*-----Array Types----- */
// hobbies:['Sports', 'Cooking'],
/*1.First key element is a numerical identifier
  2.Second key element is a string identifier */
// role:[2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR =2;
/*-----Working with Enums----- */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Dimos',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1]=10;
let favoriteActivities;
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
