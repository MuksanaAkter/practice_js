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


//------------
//Problem 1
//------------
	//by using this function we can  multiplying the input by 3 , adding 10 with the result, dividing the whole result by 2 and then subtracting 5 from the result and finally return the result.
function mindGame(number){

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

//console.log(mindGame(5))

//------------
//Problem 2
//------------
  //by using this function we can count the string length and find those length are even or odd..if length is even we return even if length is odd we return odd.
function evenOdd(strings){

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

//console.log(evenOdd('Batch7'))

//------------
//Problem 3
//------------
  // In this function  we can find the number is less or greater than seven or not,,if yes we return the number-7...else we multiply the number by 2 and return number*2.
function isLGSeven(number){

  let variable_type = typeof(number);
	   if(variable_type !== "number")
	     return "Error!! Please give a number..."
	   else{
        let difference = (number-7);
        if(difference<7)
          return  number-7;
        else
          return number*2;
      }
    }
 //console.log(isLGSeven(-15))

//------------
//Problem 4
//------------
// In this function negative number is a bad array and we can find and count those negative number from an array.
function findingBadData(array){

	   if(Array.isArray(array) === false)
	     return "Error!! Please give a array...";
	   else{
          for(let i=0 ; i<array.length; i++)
          {
            if(typeof(array[i]) !== "number")
            {
              return "Error!! Please give a number in array...";
            }

          }

          let count=0;
          for(let i=0 ; i<array.length; i++){
            if(array[i]<0)
            {
              count++;
            }
            }
            return count;
         }
       }
//console.log(findingBadData( [-9, -5, -33, 5 ,8 ,-7] ))

//------------
//Problem 5
//------------
//In this function we can Convert your friends gems into diamond and return the the diamond value.
function gemsToDiamond(friend1,friend2, friend3)
{
  let variable_type = typeof(friend1,friend2, friend3);
	   if(variable_type !== "number")
	     return "Error!! Please give a positive number..."
	   else{
          const gem1=21;
          const gem2=32;
          const gem3=43;
          let diamond=(friend1*gem1)+(friend2*gem2)+(friend3*gem3);
        if(diamond>1000*2)
        return diamond-2000;
        else
        return diamond;
     }
}
//console.log(gemsToDiamond(1 , 1 ,1))