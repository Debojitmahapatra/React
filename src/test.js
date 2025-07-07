// There are two strings 'S' and 'T', each having 'N' lowercase English characters. Initially, both strings are equal.
// You don't want the string 'T' equal to 'S'. For this, you can reshuffle the characters of the string 'T'.
// Determine if you can make the string 'T' different from 'S' after reshuffling the characters of the string 'T'.
// Return '1' if you can make the string 'T' different from 'S'. Otherwise, return '0'.



// function canYouMakeDifference(n, s) {
//     // Write your code here.
//    let allStr= getAllShuffledStrings(s);
//    for (let i = 0; i < allStr.length; i++) {
//     if(allStr[i]!=s)  return 0
//    }
//    return1
// }

// function getAllShuffledStrings(str) {
//     const result = [];

//     function permute(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current);
//             return;
//         }

//         for (let i = 0; i < remaining.length; i++) {
//             const newCurrent = current + remaining[i];
//             const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
//             permute(newCurrent, newRemaining);
//         }
//     }

//     permute('', str);
//     return result;
// }

// // Example usage:
// const allShuffles = getAllShuffledStrings('abc');
// console.log(allShuffles);




function maximumSubarraySum(n, v) {
  // Write your code here
  v.sort((a,b)=>b-a)
   let maxSum=0;
   let CurrSum=0;
   for (const num of v) {
        CurrSum +=num;
        if(CurrSum<0){
            CurrSum=0
        }
        maxSum=Math.max(maxSum,CurrSum)
   }
   return maxSum
  
}

let A = [1, -5, 1, 1, -4]

console.log(maximumSubarraySum(5, A));
