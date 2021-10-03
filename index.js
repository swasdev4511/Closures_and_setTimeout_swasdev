// Import stylesheets
import './style.css';

// Example- 1
function x(a) {
  setTimeout(() => {
    console.log(a);
  }, 5000);
}
x(50); // after 5 sec. 50 will be printed

// Example- 2
// write a program to print integers from 1-10 with delay of 1 sec.

function x() {
  for (var i = 1; i < 10; i++)
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
}
x(); // 9 times 10 will be printed

// Example- 3
function y() {
  for (let j = 1; j < 10; j++)
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
}
y(); //  1 - 9 will be printed

// Example- 4
function z() {
  for (var k = 1; k < 10; k++) {
    function innerFun(para) {
      setTimeout(() => {
        console.log(para);
      }, para * 1000);
    }
    innerFun(k);
  }
}

z(); //  1 - 9 will be printed
