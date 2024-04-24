import mongoose from "mongoose";
import colors from "colors";
// mongoose.connect("mongodb://localhost:27017")
// .then(()=>{
//     console.log("DB Conacted Sucessfully")
// }).catch(err=>{
//     console.log("Error In DB")
// })

const dbConnection =  () => {
  try {
   mongoose.connect("mongodb://127.0.0.1:27017/userprofile");
    console.log(`DB Conacted Sucessfully `.bgGreen);
  } catch (error) {
    console.log("Error In DB".bgRed);
  }
}
//  import with .js ending
export default dbConnection
