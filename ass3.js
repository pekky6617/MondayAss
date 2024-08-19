// const book = {
//   title : "Diary Of  A Wimpy Kid",
//   Author : "Pekky Okeuge",
//   Year: 2006,
 
// getSummarry(){
//     return 'The title Of The Book is ' + this.title + 'And it Was Written By' + this.Author + 'And Was Published On' + this.Year;
    
// }
 
// };

// console.log(book.title);
// console.log(book.Author);
// console.log(book.Year);
// console.log(book.getSummarry());



// let Square = [2, 4, 6, 8];

// let result = Square.map( function squaredNumber(num) {
//     return num * 2;
// })

// let 

// console.log(result);


// let student = {
//     name : "johnny",
//     age : 20,
//     grade : [80, 80, 90],



//     averageGrade(){
//         let sum = 0;
//         for(i = 0; i < this.grade.length; i++){
//             sum += this.grade[i];
//         };
//         let average = sum/this.grade;
//        return average;
//     }
// }

// console.log(student.name);
// console.log(student.age);
// console.log(student.averageGrade);

let student = {
    studentName : "pekky",
    studentAge : 20,
    grade : [80, 90, 100],
    // averageGrade : student.grade.reduce((p, o) =>{
    //     return p + o / 3;  
    //  }, 0
    // )
    
        
}
//  const averageGrade = student.grade.reduce((p, o) =>{
//     return p + o.grade / 3;  
//  }
// );

console.log(student.studentName);
console.log(student.studentAge);
console.log(student.grade);
console.log(student.averageGrade);




