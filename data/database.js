import mongoose from "mongoose";


export const dbConnection = ()=>{

mongoose
.connect(process.env.MONGO_DB_URL, {
  dbName: "api-param"
})
.then(() => console.log("connected successfully"))
.catch((e) => console.log(e));

}