
// import { Base_URL, Token, API_Key } from "../default/constants"
import {  Trello } from "../support/api";
import { API_Key, Base_URL, Token } from "../default/constants";
import fs from "fs";
import {test,expect } from "@playwright/test"
test.describe.serial("Trello Board Lifecycle", () => {
  const board = new Trello();
let myId:string;
test("create a board", async ({page})=>{
     console.log("Base_URL:", Base_URL);
console.log("Key:", API_Key);
console.log("Token:", Token);
     await board.CreateBoard();
     myId = board.boardId;

//     console.log("URL:", result.url);
// console.log("KEY:", result.config.params.key);
// console.log("TOKEN:", result.config.params.token);
// const response= await axios.post(`${Base_URL}/1/boards/`,null,{
// params:{
//     name:"ApiDemo",
//     key:API_Key,
//     token:Token,
    

// },
// });
// board.boardId = result?.data.id;
//  fs.writeFileSync("boardId.json", JSON.stringify({ boardId: board.boardId }));
 console.log("Board created with ID:", myId);
// expect(result?.status).toBe(200);
// expect(result?.data.name).toBe("ApiDemo");
// console.log("board created", result);

});

test("get a board", async ({page})=>{
    //   const { boardId } = JSON.parse(fs.readFileSync("boardId.json", "utf-8"));
      console.log("Retrieving board with ID:", myId);
   try{
   const getResult=await board.GetBoard(myId);
    expect(getResult?.status).toBe(200);
    console.log("get board ID",myId);
   }catch(error:any){
    console.log("Error while retrieving board:", error.message);
   }
})


test("update a board", async ({page})=>{
    //   const { boardId } = JSON.parse(fs.readFileSync("boardId.json", "utf-8"));
    //  const result=await board.CreateBoard();
    //  myId = board.boardId;
      const data={
          "name": "saranya2"
      }
   try{
   await board.UpdateBoard(myId,data);
   
   console.log("Borad updated with testId:", myId);
   }
   catch(error:any){
    console.log("Error while retrieving board:", error.message);
   }
})

test("delete a board", async ({page})=>{
    //   const { boardId } = JSON.parse(fs.readFileSync("boardId.json", "utf-8"));
      console.log("Deleting board with ID:", myId);
   const deleteResult=await board.DeleteBoard(myId);
    expect(deleteResult?.status).toBe(200);
    // console.log("board deleted", deleteResult);
});

// test("get a deleted board", async ({page})=>{
//     //   const { boardId } = JSON.parse(fs.readFileSync("boardId.json", "utf-8"));
//       console.log("Retrieving deleted board with ID:", myId);
//    try{
//    await board.GetBoard(myId);
//     console.log("get deleted board ID",myId);
//    }catch(error:any){
//     console.log("Error while retrieving deleted board:", error.message);
//    }
// })


test("Update list name", async ({ page }) => {
  const board = new Trello();
  const param = 
      {
            "id": "67c9a5c9bb1d1868e16d9e79",
            "name": "saranya4",
            "closed": false,
            "color": null,
            "idBoard": "67c9a4eeb7ea5fcb332cb47b",
            "pos": 8192,
            "type": null,
            "datasource": {
                "filter": false
            },
            "limits": {}
        }
  

  const updateList = await board.UpdateList(param);
  console.log("updating list")
  console.log("Status:", updateList?.status);
  console.log("Updated List Name:", updateList?.data.name);
});

});
 

    



