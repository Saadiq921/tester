/*
*  Saadiq Abubakar
*
*  Date: 05/21/2022
*
*  A function that checks if a word is a palindrome.
*
*/


let palindrome = (string) =>{
    //In case the string is in mixed case
    const justWords = string.toLowerCase();
    //One array for original string
    //Other for revversal string
    let firstArray = [];
    let secondArray = [];
    for(let i=0; i<justWords.length; i++){
        //Don't add spaces into array
        if(justWords[i] === " "){
            continue;
        }else {
            firstArray.unshift(justWords[i])
            secondArray.push(justWords[i])
        }
        
    }
    const reverse = firstArray.join("")
    const other = secondArray.join("")
    return (reverse === other) ? true: false;
    
}
