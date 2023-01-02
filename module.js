// const calling_people_modules = require('./people')// 1st pattern

const {tekken_char_data, person_full_data} = require ('./people'); // 2nd pattern


// console.log(calling_people_modules);// Only return an empty object (not exported) 1st pattern
//console.log(person); // Throw err: ReferencesError : person is not defined (not exported yet) 1st pattern
//console.log(calling_people_modules);// Already exported using module.export 1st pattern (unspecified data)
// console.log(calling_people_modules.person_full_data);// to call the specified object 1st pattern

console.log(
    tekken_char_data, person_full_data
) // ReferenceError : person_full_data is not define (must include variable that we want to access) 2nd pattern

