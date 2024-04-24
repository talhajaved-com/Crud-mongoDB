import mongoose from "mongoose";

// let Schema = new mongoose.Schema(
    // {
    //     name: String,
    //     address: String,
    //     email: String,
    //     password: String,

    // }
// )
let Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: [true, "Fill your address"],
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },


    },
    {
        timestamps: true
    }
)

const User = mongoose.model("users", Schema)
export default User