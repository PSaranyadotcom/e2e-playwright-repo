// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// import { Base_URL, Token, API_Key } from "../default/constants"
// import { error } from "console";


// export async function CreateBoard() {
//     try{
// const response= await axios.post(`${Base_URL}/1/boards`,null,{
// params:{
//     name:"ApiDemo",
//     key:API_Key,
//     token:Token,
    

// },
// });
// console.log("borad created successfullt",response.data);
// return response;
// }catch(error:any){
// console.error("error",error.message);
// }

// throw error;
// }
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { Base_URL, Token, API_Key } from "../default/constants";
export class Trello {
  boardId: string;
  constructor() {
    this.boardId = "";
  }
  public async CreateBoard() {
  try {
    const response = await axios.post(`${Base_URL}/1/boards`, null, {
      params: {
        name: "ApiDemo",
        key: API_Key,
        token: Token,
      },
    });
    console.log("✅ Board created:", response.data.url);
       this.boardId = response.data.id;
    return response;
  } catch (error: any) {
    if (error.response) {
      console.error("Trello returned:");
      console.error("Status:", error.response.status);
      console.error("Body:", JSON.stringify(error.response.data));
    } else {
      console.error("❌ Axios error:", error.message);
    }
  }
}

// public async DeleteBoard(boardId = this.boardId) {

//   try{
//     const response= await axios.delete(`${Base_URL}/1/boards/${boardId}`,{
//       params:{
//         key:API_Key,
//         token:Token,
//       },
//     });
//     console.log("✅ Board deleted successfully");
//     return response;
//   } catch(error:any){
//     if(error.response){
//       console.error("❌ Trello returned:");
//       console.error("Status:",error.response.status);
//       console.error("Body:",JSON.stringify(error.response.data));
//     }else{
//       console.error("❌ Axios error:",error.message);
//     }
// }
// }

public async DeleteBoard(boardId = this.boardId) {

  try{
    const response=await fetch(`${Base_URL}/1/boards/${boardId}?key=${API_Key}&token=${Token}`,{
      method:"DELETE",
    });
    // const response=

    console.log("✅ Board deleted successfully");
    return response;
  } catch(error:any){
    if(error.response){
      console.error("❌ Trello returned:");
      console.error("Status:",error.response.status);
      console.error("Body:",JSON.stringify(error.response.data));
    }else{
      console.error("❌ Axios error:",error.message);
    }
}
}

public async GetBoard(boardId=this.boardId){
  try{
    const response= await axios.get(`${Base_URL}/1/boards/${boardId}`,{
      params:{
        key:API_Key,
        token:Token,
      },
    });
    return response;
  } catch(error:any){
    if(error.response){
      console.error("❌ Trello returned:");
      console.error("Status:",error.response.status);
      console.error("Body:",JSON.stringify(error.response.data));
    }else{
      console.error("❌ Axios error:",error.message);
    }
  }
}
public async UpdateBoard(boardId=this.boardId,params:any){
  try{
    const response= await axios.put(`${Base_URL}/1/boards/${boardId}`,{
      params
    },
    {
        params: {
          key: process.env.trellokey,   // your Trello API key
          token: process.env.trellotoken, // your Trello token
        },
      });
    return response;
  } catch(error:any){
    if(error.response){
      console.error("❌ Trello returned:");
      console.error("Status:",error.response.status);
      console.error("Body:",JSON.stringify(error.response.data));
    }else{
      console.error("❌ Axios error:",error.message);
    }
  }
}


public async UpdateList(params: any) {
  try {
    const response = await axios.put(
      `${Base_URL}/1/lists/${params.id}`,
      {
        name:params.name, // what you want to update
      },
      {
        params: {
          key: process.env.trellokey,   // your Trello API key
          token: process.env.trellotoken, // your Trello token
        },
      }
    );

    return response;
  } catch (error: any) {
    if (error.response) {
      console.error("Error");
      console.error("status:", error.response.status);
      console.error("body:", error.response.data); // ✅ should be .data, not .body
    } else {
      console.error("axios error:", error.message);
    }
  }
}

}

