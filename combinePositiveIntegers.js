'use strict';

const answer = (numbers) => {
 if (numbers.length === 0) {
   return "";
 };
  
 if (numbers.length > 1) {
   const sortedNums = numbers.sort(function(a,b){return a-b})
   const descNums = sortedNums.reverse()
   
   const arrayNums = descNums.join('');
 
   return arrayNums.toString();  
  };
  
 return numbers.toString();
};


module.exports = answer;
