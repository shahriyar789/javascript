// // ARRAY METHODS

// /* Let’s try 5 array operations.
/*
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.


// */
//  // make array
// let styles=['jazz','blues'];
// console.log(styles)
// // Append “Rock-n-Roll” to the end.
// styles.push('ROck-n-Roll');

// console.log(styles);
// // Replace the value in the middle with “Classics”.
// styles.splice((styles.length/2),1,'classics')
//    console.log(styles);


//   //  Strip off the first value of the array and show it.
//    const first_value=styles.shift();
//   console.log(first_value);
   

//   // Prepend Rap and Reggae to the array.



//   //  styles.splice(0,0,'rap','reggae')
//  //    console.log(styles)
//     // styles.unshift('rap','raggae');
//    // console.log(styles);



    const arr=[2,3,4,5];

function sumInput(a){
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum+=a[i];
    }
   return sum; 
}
let result = sumInput(arr);
console.log(result);


// function filterRange(arr1,a,b) {
    //   return arr1.filter((x)=>x>=a&&x<=b)
    // } 
    
    // console.log(filterRange(arr1,1,4));
    // console.log(arr1);
    
//     let arr1=[5,3,8,1]
// function filterRangeInPlace(arr1, a, b) {
//     let l=arr1.length;
//     for(let i=0;i<l;i++)
//       if(!(arr1[i]>=a && arr1[i]<=b)){
//         arr1.splice(i,1);
//         i--;
//         l--;
//       }
//   }
//   filterRangeInPlace(arr1,1,4)
//   console.log(arr1);


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ];
// let name=users.map((x)=>x.name);
// console.log(name);

// let johny = { name: "John", surname: "Smith", id: 1 };
// let petee = { name: "Pete", surname: "Hunt", id: 2 };
// let maryy = { name: "Mary", surname: "Key", id: 3 };

// let users2 = [ johny, petee, maryy ];

// let usersMapped =users2.map((x)=>{
//   let a={};
//   a.fullname=x.name+x.surname;
//   a.id=x.id;
//   return a;
// })


// console.log(usersMapped);


// console.log( usersMapped[0].id);
// console.log( usersMapped[0].fullname );
// console.log( usersMapped[1].id);
// console.log( usersMapped[1].fullname );
// console.log( usersMapped[2].id);
// console.log( usersMapped[2].fullname );


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ]; 
// function getAverageAge(users) {
//     let age=users.map((user)=>user.age);
//     let avgAge=age.reduce((a,b)=>a+b);
//     return avgAge/age.length;
//   }
  
//   console.log(getAverageAge(users));



// function unique(a){
//     let l=a.length;
//     for (let i = 0; i < l; i++) 
//       for(let j = i+1; j < l; j++) 
//         if(a[i]===a[j]){
//           a.splice(j,1);
//           j--;
//           l--;
//         }
//   }
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   unique(strings)
//   console.log(strings);










