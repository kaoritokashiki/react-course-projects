// function square(x) {
//     return x * x;
// };

// console.log(square(8));


// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));
const getFirstName = (fullName) => {
    return fullName.split('-')[0]
}
console.log(getFirstName('Kaori-Tokashiki'));

const getAge = (age)=> console.log(age);
getAge(22);