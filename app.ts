function add(n1: number | string , n2: number | string) {
    let showResult;
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error ('Incorrect input');
        
    // }
   if (typeof n1 === 'number' && typeof n2 === 'number') {
        showResult = n1 + n2;
 
    } else {
        showResult = n1.toString() + n2.toString();
    }
    return showResult
}

const numb1= 5;
const numb2= 2;
const printResult = true; 
const resultPhrase= 'Result is ';

console.log(add(numb1, numb2));

// NOW OBJEST TYPES

 const person = {
// const person: {
//     name: string,
//     age: number
// } = {
    name: 'Naya',
    age: 2,
    hobbies: ['Sims', 'Playing dolls'],
   
}

// ARRAY
let favoriteActivities: string[];
let AnyArrayNoTypes: any[]; // ["Sports", 1]

favoriteActivities = ['Sports'];

console.log(person.name, favoriteActivities);
// for each hobby in the array of person
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

// Working with Tuples and enum

enum Role {ADMIN= 'Admin', READ_ONLY= 23, AUTHOR= 200 };
const person1 = {
        name: 'Naya',
        age: 6,
        hobbies: ['Sims', 'Playing dolls'],
        role: Role.ADMIN
       
    };


//person1.role.push('admin')
//person1.role[1] = 10;
//person1.role = [0, 'admin'];

console.log(person1.role)

