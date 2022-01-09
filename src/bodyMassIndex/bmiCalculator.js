// const parseArguments = (args: Array<string>) => {
//   if (args.length > 4) throw new Error('Too many arguments');
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
//     throw new Error('Provided values were not numbers')
//   } else {
//     return {
//       height: Number(args[2]),
//       mass: Number(args[3])
//     };
//   }
// }

// const calculateBmi = (height: number, mass: number) => {
//   const bmi = mass / ((height / 100) * (height / 100));
//   if (bmi < 18.5) {
//     console.log('underweight')
//   } else if (bmi > 24.9) {
//     console.log('overweight');
//   } else {
//     console.log('healthy weight');
//   }
// };

// const {height, mass} = parseArguments(process.argv);
// calculateBmi(height, mass);