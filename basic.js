//  console.log(firstName);

// var num1 = 10;
// var num2 = "20.666";
// const convertNum2 = parseFloat(num2);

// const sum = num1 * num2;
// console.log(sum.toFixed(2));

// var num3 = "200.1578";

// console.log(parseFloat(num3));

//  if else start from here on

// var num5 = 20;
// var num6 = 40;

// if (num5 == 20 || num6 == 30) {
//   console.log("this is 20");
// } else if (num5 == 100 && num6 == 100) {
//   console.log("this is 100");
// } else {
//   console.log("kono tai tik na");
// }

// var num5 = 100;

// if (num5 > 100) {
//   console.log("this is bigger then 100");
// } else if (num5 < 100) {
//   console.log("this is smaller then 100");
// } else {
//   console.log("this is equal  100");
// }

// var num1 = 600;
// var num2 = 800;
// var num3 = 500;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 shobtheke boro");
// } else if (num2 > num3) {
//   console.log("num2 shobtheke boro");
// } else {
//   console.log("num3 shobtheke boro");
// }

// var number = "300";

// if (number == 30) {
//   if (typeof number == "string") {
//     console.log("ok its 30 and also a string");
//   } else {
//     console.log("its equal to 30 but not a string");
//   }
// } else {
//   console.log("number not equal to 30");
// }

// console.log(typeof number);

// var num = 100;

// if (num % 2 != 0) {
//   console.log("this is odd number");
// } else {
//   console.log("this is even number");
// }

// 0-32=F
// 33-49=D
//50-59=C
//60-69=B
//70-79=A
// 80-100=A+

// var result = 30;

// if (result > 100) {
//   console.log("bhai result kamne 100 er beshi hoi bolen??");
// } else if (result <= 100 && result >= 0) {
//   if (result >= 0 && result < 33) {
//     console.log("F");
//   } else if (result > 32 && result < 50) {
//     console.log("D");
//   }
// } else {
//   console.log("bhai result ki 0 theekw kom paicen???");
// }



function mindGame(number){
	//by using this function we can  multiplying the input by 3 , adding 10 with the result, dividing the whole result by 2 and then subtracting 5 from the result and finally return the result.
	   let variable_type = typeof(number);
	   if(variable_type !== "number" || number<0)
	     return "Error!! Please give a positive number..."
	   else{
	   let multiply,add,divide,result;
	   multiply = number*3;
	   add = multiply + 10;
	   divide = add/2;
	   result = divide-5;
	    return result;
	   }
}
// let number;
// console.log(mindGame(5))



function evenOdd(strings){
  //by using this function we can count the string length and find those length are even or odd
  let variable_type = typeof(strings);
	   if(variable_type !== "string" )
	     return "Error!! Please give a string..."
	   else{
            let length = strings.length;
            if(length%2 === 0)
              return 'Even';
          else
            return 'Odd';
            }
}
// let strings;
// console.log(evenOdd('Batch7'))

function isLGSeven(num){
    let result=num-7;
	   if(result<7)
	     return num;
    else
      return (num*2);
}
// var num;
console.log(isLGSeven(10))

// function findingBadData(array){
//     let count=0;
//     for(let i=0 ; i<=array.length; i++)
//     {
//         if(array[i]<0)
//         {
//             count++;
//         }
//     }
//     console.log(count)
// }
// findingBadData([-1, -2, -3, 4, 5, 6])


// function gemsToDiamond(f1,f2, f3)
// {
//     const f11=21;
//     const f22=32;
//     const f33=43;
//     let sum=(f11*f1)+(f22*f2)+(f33*f3);
//     //console.log(sum);
//    if(sum>1000*2)
//    return sum-2000;
//    else
//    return sum;
// }
// console.log(gemsToDiamond(100,5,1))