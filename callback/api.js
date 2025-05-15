// import axios from "axios";
// import * as https from "https";

// export const postrequest= async (
    
// )
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 success"),2000)
    // setTimeout(()=>reject("P1 failed"),2000)
})
const p2=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve("P2 success"),3000)
//    setTimeout(()=>reject("P2 failed"),3000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 success"),5000)
    // setTimeout(()=>reject("P3 failed"),3000)
})
// Promise.all([p1,p2,p3]).then((res)=>{
//    console.log(res)
// }).catch((error)=>{
//     console.log("Error: "+error)
// })
// Promise.allSettled([p1,p2,p3]).then((res)=>{          //it will wait for all results to come. (it will give an object)
//     console.log(res)
//  }).catch((error)=>{
//      console.log("Error: "+error)
//  })
//  Promise.race([p1,p2,p3]).then((res)=>{                  // Whatever will be take less time it will execute, Wheather it is true/ false
//     console.log(res)
//  }).catch((error)=>{
//      console.log("Error: "+error)
//  })
Promise.any([p2,p1,p3]).then((res)=>{
    console.log(res)
 }).catch((error)=>{                                      // if all will reject,It will give an Aggregate err (means it will take all the error)
     console.log("Error: "+error)
 })











