console.log('class','string','numbers','varaibles','constants');


//q1

// Create a varaible without assigning any value to it and checks its value
let a;
console.log(a);

//  q2  create a varaible assign a string value to it then again assign it with value of type number 
//   then assign again with value of type boolean and p
// print the result

let value='shery';
value=23;
value=true;
console.log(value);


// Q3 create a variable with let keyword and then declare the variable with same name const and see the behavior

//  let let_name='shery';
//  const let_name=123;

/* Q4
 create a variable with let keyword and then declare the variable with same name let and see the behavior


  */
    let name;
    // let name;
 
 /*Q5    CREATE TWO VARAIBLES WITH VALUE OF TYPE STRING AND NUMBER 
 RESPECTIVELY 
 ADD NUMBER TO NUMBER
 ADD STRING TO STRING 
 ADD STRING TO NUMBER
 PRINT ALL 3 OUTPUTS
 */

name='shery';
let value1=1;
console.log(name+name)
console.log(value1+value1)
console.log(name+value1)

/*Q6    CREATE Three VARAIBLES WITH VALUE OF TYPE STRING , NUMBER & boolean 
 RESPECTIVELY 
 ADD number & string & boolean
 ADD boolean & number&string 
 ADD string & number &boolean
  ADD string & boolean &number
 PRINT ALL OUTPUTS
 */

 let x='talha';
 let y=4;
 let z=true;

 console.log(y+x+z);
 
 console.log(z+y+x);
 
 console.log(x+y+z);
 
 console.log(x,z,y);



 /* create a varaibles username and age and add the value
 dynamically to string 
 print  "my name is ______ , I am ____ years old;

 */
 
 // bakctick
 let username='shery';
 let age=21;
 console.log(`MY NAME IS ${username} , i am ${age} years old`);


 // LECTURE 2

 // Q8
 // CREATE  A VARAIBLE AND CHECK ITS TYPE

 let va='string';
 console.log( typeof va);

 /* Q9
 create an array of length 10 ,remove an item from end, add 2 new items at the end
 and then check the size of array, then remove value at index 7 of the array.
*/
 const arr=[1,2,3,4,5,6,7,8,9,10];
arr.pop();
console.log(arr);
arr.push(11,12);
console.log(arr);
console.log(arr.length);
arr.splice(7,1);              // delete arr[7];
console.log(arr);

/* 10
 create an object having keys name & age,add new key with email with value 'abc@xyz.com'
 change the age to true, create a copy of the object and then delete name key 
 from that object
*/
const obj={
    name:'shery',
    age:12,
};
obj.email='abc@xyz.com';
obj.age=true;
 // spread operator 
const obj1={...obj};

delete obj1.name; 
console.log(obj);            // delete obj1{'name'}
console.log(obj1);

/* Q 11
  if temperature is greator than and equal to 40 degress, 
  print 'ac is required'
   if temperature is less than and equal to 5 degress
   print ' heater is required'
   otherwise print ' wweather is cool;
*/

let temperature=220;
if(temperature>=40){
    console.log('AC IS REQUIRED')
}
else if(temperature<=5){
    console.log('HEATER IS REUQIRED');
}
else{
    console.log('WEATHER IS COOL');
}  

// temperature>=40 ? console.log('AC IS REQUIRED') :temperature<=5 ? console.log('HEATER IS REUQIRED') : console.log('WEATHER IS COOL');

/* Q 12
   if name state with 'A or a' and age is greater than 15,
   print 'person name along with its age' 
   if name statr with 'X' and age is undefined,
   print 'unknown data' 
   if name  consist of 10 letters  and age is greater than 0
   print 'name contains 10 letters';
    otherwise print ' data is faulty 
  */
 let userName='shery';
 let  userage=16;
   function nameandage( name,age){
    if(name[0]==='A'|| name[0]==='a'  && age>15){
        console.log('person name along with its age')
    }
   else   if(name[0]==='X'  && age==null){
        console.log('unknown DATA')
    }
    else  if(name.length==10  || age>0){
        console.log('NAME CONTAINS 10 LETTERS')
    }
    else{
console.log('data is faulty');
    }
   }
   nameandage(userName,userage);  






 /* 13 
   create left trainagle having length 5
   create right traingle having length 5
   create triangle having length 5
   hint: use loops and *
*/

let number = 5; 
let string = '';
for(let i = 1; i <= number; i++){
  for(let j = 1; j <= i; j++){
    string += '*';
  }
  string += "\n";
}
console.log(string);

let n = 5
let right = ""

for (let i = 1; i <= n; i++){
  // console.log(i)
  // i + 1,2,3,4,5
for (let j = i; j <= n-1; j++){
     right += " ";
}
  for (let j = 1; j <= i; j++)
     right += "*"
   right += "\n"

}

console.log(right);



let n1 = 5;
let string1 = "";
// External loop
for (let i = 1; i <= n1; i++) {
  // printing spaces
  for (let j = 1; j <= n1 - i; j++) {
    string1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);
