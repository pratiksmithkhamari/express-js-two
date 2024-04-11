import { dbConnection } from "./data/database.js"
import { app } from "./index.js";

const PORT = 4000

//db connection call
dbConnection()

app.listen(PORT,()=>{
    console.log(`server is running on localhost//:${process.env.PORT}`);
})