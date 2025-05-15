// // function call(a){
// //     console.log("hi")
// //     setTimeout(function sub(){
// //         a()
// //     }, 2000);
   
// // }
// // function add(){
// //     console.log("hello")
// // }
// // function(){

// // }
// // call(add)

// // function mypromise(a){
// // let myPromise = new Promise((resolve,reject)=>{
// //     let num=a;
// //     setTimeout(function(){
// //         if(num===7)
// //            {
// //             resolve("success")
// //            }
// //            else{
// //             reject("Sorry! failure happened")
// //            }

// //     },2000)
// // })
// // myPromise.then(pass=>{
// //  console.log(pass)

// // }).then(message=>{
// // console.log(message)

// // }).catch(err=>{
// // console.log(err)
// // });

// // }


// // mypromise(6)

// let myPromise = new Promise((resolve) => {
//     let success = "Promise resolved";
//     let failure = "Sorry! failure happened";

//     resolve({ success, failure }); 
// });

// myPromise.then(result => {
//     console.log("Success:", result.success);
//     console.log("Failure:", result.failure);
// });

// // export function myPromise1(val){
// // let promise=new Promise((resolve,reject)=>{
// // if(val){
// //     resolve(val)
// // }
// // else{
// //     reject("unsuccess")
// // }
// // }).then((newval)=>{
// // newval.post("https://api.trello.com/1/boards/?name=Saranya&key=456cf8d93cb8c697c03f43080622a9c1&token=ATTAea138f0eed0e4226605d5fc77c347aa6bbc97f206e9f004f4b6027b2f72c71a4136AF8B2",
// //     {
// //         data:{
// //             "name":"Ammu",
// //             "key":"456cf8d93cb8c697c03f43080622a9c1",
// //             "token":"ATTAea138f0eed0e4226605d5fc77c347aa6bbc97f206e9f004f4b6027b2f72c71a4136AF8B2"
// //         }
// //     }
// // )
// // })
// // promise.catch((error)=>{
// //     console.error(error);
// // })

// // }
