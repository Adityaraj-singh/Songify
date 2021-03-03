/*
function generatePyramid(num) {
    let number = '';
  
    for (let i = 1; i <= num; i++) {
        number+='*'
      console.log(number);
    }
  }
  generatePyramid(4);
*/


function createHalfPyramid (height) {
  
    for (var i = 1; i <= height; i++) {
      var row = '';
      
      for (var j = 1; j <= (height - i); j++) {
        row += ' ';
      }
      
      for (var k = 1; k <= i; k++) {
        row += '*';
      }
      
      console.log(row);
    }
  }
  
  createHalfPyramid(5);

  
