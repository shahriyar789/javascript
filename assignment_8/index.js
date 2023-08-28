/* QUESTION NO 01
 Write a function that uses setTimeout to log the message "Hello, World!" after a delay of 2 seconds.
 */
const func=()=>{
    setTimeout(()=>  console.log('Hello,world!'),2000);  
};
func();

/*  QUESTION NO 02:
 Implement a function that uses setInterval to display the current time in the format "HH:MM:SS" every second.
*/

    setInterval(()=>{
        let d=new Date();
     console.log(d.toTimeString().split(" ")[0])
    },1000);

    
/* QUESTION NO 03
 Create a function called multiply that takes two numbers as arguments and returns their product. 
 Implement a callback function called handleResult that logs the result to the console after a delay of 1 second.
 */

 const multiply=(a,b)=>{
  return a*b;
};
const handleResult=(x,y,callback) =>{
    let res=callback(x,y);
     setTimeout(()=>  console.log(res),1000);
}

handleResult(2,3,multiply);

/*   QUESTION N0 04
 Write a function called countdown that takes a number as an argument and logs the numbers 
from the given number to 1 with a delay of 1 second between each number. Use promises to handle 
the asynchronous behavior.
*/

function countdown(x) {
    return new Promise((resolve, reject) => {
      let Number =x;
      
      const intervalId = setInterval(() => {
        console.log(Number);
        Number--;
  
        if (Number < 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }
  countdown(5)
  .then(() => {
    console.log("Countdown completed!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
  
    



/*  QUESTION NO 05:
 Implement a function called fetchData that fetches data from the "https://jsonplaceholder.typicode.com/posts" 
API using fetch. Handle the response using promises and log the data to the console.
  */

let promise1=fetch("https://jsonplaceholder.typicode.com/posts")
promise1.then((res)=>res.json()).then((x)=>console.log(x));

  
/* QUESTION  NO 06
Create a function called sum that takes an array of numbers as an argument and returns a promise. 
The promise should resolve with the sum of all the numbers in the array after a delay of 2 seconds
*/
const sum=(arr)=>{
   return new Promise((resolve, reject) => {
        let add=arr.reduce((a,b)=>a+b);
        setTimeout(()=>{
            resolve(add)
        },2000)
    })
}
sum([5,6,7,8,9]).then((k)=>console.log(k));

/* QUESTION NON 07   
   Implement a function called repeat that takes a function and a number as arguments. The function should execute 
   the given function repeatedly, 
   with a delay of 500 milliseconds between each execution, for the specified number of times.

*/
function repeat(func, times) {
    let count = 0;
    
    const intervalId = setInterval(() => {
      if (count === times) {
        clearInterval(intervalId);
        return;
      }
      
      func();
      count++;
    }, 500);
  }
  function sayHello() {
    console.log("ASSALAM-O-ALAIKUM");
  }
  
  repeat(sayHello, 5);




 /*  QUESTION NO 08
 Write a function called fetchRandomUser that uses fetch to retrieve data from
  the "https://randomuser.me/api/" API. The function should
   return a promise that resolves with the first name and last name of a random user after a delay of 1 second
*/
function fetchRandomUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(data => {
            const user = data.results[0];
            const firstName = user.name.first;
            const lastName = user.name.last;
            resolve({ firstName, lastName });
          })
          .catch(error => reject(error));
      }, 1000);                                                    // Delay of 1 second (1000 milliseconds)
    });
  }
  
  // Usage
  fetchRandomUser()
    .then(user => {
      console.log(`First Name: ${user.firstName}`);
      console.log(`Last Name: ${user.lastName}`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
/* QUESTION NO 09
Create a function called waitForCondition that takes a condition function and an interval as arguments.
The function should repeatedly check the condition every specified interval, and once the condition evaluates to true, 
it should resolve a promise. Implement a callback function that logs a success message after the condition is met 
*/

function waitForCondition(condition, interval) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (condition()) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  }
  
  function callback() {
    console.log("Success! The condition has been met.");
  }
  
  waitForCondition(() => true, 1000).then(callback);

/* QUESTIIN NO 10
   Write a function called fetchMultipleUrls that takes an array of URLs as an argument.
   The function should fetch data from all the URLs concurrently using promises and return an array of the resolved data.
   Each request should have a timeout of 3 seconds, and if any request takes longer than the timeout, 
   it should be skipped and the corresponding element in the result array should be set to null.
*/
function fetchMultipleUrls(urls) {
  const promises = urls.map((url) =>
    Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 3000)
      ),
    ])
      .then((response) => response.json())
      .catch((error) => {
        console.error(`Failed to fetch ${url}: ${error}`);
        return null;
      })
  );
  return Promise.all(promises);
}
const urls =["https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2" 
,"https://jsonplaceholder.typicode.com/todos/3"];  

fetchMultipleUrls(urls).then((data) => console.log(data))
