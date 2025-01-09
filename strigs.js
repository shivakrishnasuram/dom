let str ="welcime"
let op =str.charAt(2)
console.log(op)



let op2 =str.at(-2)
console.log(op2)


//slice
let str2 = "shivakrishna"
let opss =str2.slice(2)
let opss1 =str2.slice(-6,-2)
console.log(opss)
console.log(opss1)
//charCodeAt
console.log(str2.charCodeAt(2))

let js ="javascript"
let opps =js.substring(6)
console.log(opps)

let strsss1 ="shivakrishna"
let oppsss =strsss1.substr(0,15)// starting index and ending length of the string 
let oppssss =strsss1.substr(-4,5)// return the rest of the sring from the back side  
console.log(oppsss)
console.log(oppssss)





let str22 = "shivakrishna";
console.log("copilot")
let opss2 = str22.slice(2);        // "ivakrishna"
let opss12 = str22.slice(-6, -2);  // "kris"
console.log(opss2);
console.log(opss12);

// Additional slice examples
let str5 = "Hello, World!";
let slice1 = str5.slice(0, 5);   // "Hello"
let slice2 = str5.slice(7, 12);  // "World"
let slice3 = str5.slice(-6);     // "World!"
let slice4 = str5.slice(2, -2);  // "llo, Wor"

console.log(slice1);
console.log(slice2);
console.log(slice3);
console.log(slice4);


let str3 = "react js";
let str4 = "react native";
let result2 = str3.concat(", ", str4, "!"); // "Hello, World!"
console.log(result2);





///trims
console.log("trimm method string method")

let strWithSpaces = "   Hello, World!   ";
let trimmedStr = strWithSpaces.trim(); // "Hello, World!"
let trimmedend = strWithSpaces.trimEnd(); // "Hello, World!"
let trimmedstart = strWithSpaces.trimStart(); // "Hello, World!"
console.log(trimmedStr);
console.log(trimmedend);
console.log(trimmedstart);


//padstart

console.log("pad start ")
let pad ="javascript"
let padstart = pad.padStart(100, "*");//it will add in the starting point in 100 length
let padEnd = pad.padEnd(75, "shivakrshnasutaam"); //it will add the padding at the end of the string 

console.log(padstart);
console.log(padEnd);



// repeat method to repeat the paeticular string  
console.log("repeat method")
let repeats = "shiva krishna!"
let repeat = repeats.repeat(3); // "Hello, World!"
console.log(repeat);


// repalce method to repaalce the content 
let strsss ="frontend devvelopment frontend FRONTEND"
let replace = strsss.replace("frontend", "backend");
let replaces = strsss.replace(/frontend/ig, "backend");
let replaceupper = strsss.replace(/frontend/ig, "backend");
let replaceall = strsss.replaceAll("frontend", "backend");
console.log(replace);
console.log(replaces);
console.log(replaceall);
console.log(replaceupper);



