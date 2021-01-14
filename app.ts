/*-----Object Types----- */

   const person = {
    name: 'Dimos',
    age: 30,
    /*-----Array Types----- */
    hobbies:['Sports', 'Cooking']
};
let favoriteActivities:string[];
console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}