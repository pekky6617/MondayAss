const book = {
    title: "To Kill a Mockingbird",
    author: "Pekky Lee",
    yearPublished: 2006,
    
    getSummary(){
      return  'The Name Of the is' +book.title + ', It Was By ' +book.author + ', And Was Published In ' +book.yearPublished+'.' ;
    }
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year Published:", book.yearPublished);
console.log("Summary:", book.getSummary());

// Create a student object
const student = {
  name: "John Doe",
  age: 20,
  grades: [85, 90, 78, 92, 88],

  // Method to calculate the average grade
  calculateAverageGrade: function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
          sum += this.grades[i];
      }
      let average = sum / this.grades.length;
      return average;
  }
};

// Access the properties and call the method
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Student Grades: " + student.grades.join(", "));
console.log("Average Grade: " + student.calculateAverageGrade());
