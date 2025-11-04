// let character = 'Hello';
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// let pushed = rows.push("Quincy");
// console.log(pushed);
// console.log(rows[3]);
// // let popped = rows.pop();
// // console.log(popped);
// // console.log(rows);




// // const character = "e";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
// rows.push(i);
// }

// let result = ""

// for (const row of rows) {
// result = result + row;
// }

// console.log(result);


// function addTwoNumbers(first, second){
//     return first + second;
//     }
//     let sum = addTwoNumbers(5, 10)
//     console.log(sum)



// function padRow(done, count) {
//     return "#".repeat(done);
//   }
 
// const count = 5;
// const rows = [];

// for (let done = 0; done < count; done++) {
//   rows.push(padRow(done, count)); we add to rows the function (padRow(done, count)
// }

// console.log(rows);


function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    // Calculate the class average
    const classAverage = getAverage(totalScores);
    
    // Get the student's grade
    const studentGrade = getGrade(studentScore);
    
    // Determine pass/fail status
    const passStatus = studentGrade === "F" ? "You failed the course." : "You passed the course.";
    
    // Construct and return the message without rounding the class average
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${passStatus}`;
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

