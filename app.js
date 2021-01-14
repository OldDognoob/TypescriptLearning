/*-----Object Types----- */
var person = {
    name: 'Dimos',
    age: 30,
    /*-----Array Types----- */
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
