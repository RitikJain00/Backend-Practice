import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken"
import bcript from "bcrypt"

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // Url
            required: true
        },

        thumbnail: {
            type: String, // Url
            required: true
        },

        title: {
            type: String, 
            required: true
        },

        description: {
            type: String, 
            required: true
        },

        duration: {
            type: Number, // Url
            required: true
        },

        views: {
            type: Number,
            default: 0
        },

        isPublished: {
            type: Boolean,
            default: true
        },

       qwner: {
            type: Schema.Types.ObjectId, 
            ref: "User"
        }
    },
    {timestamps: true}
    )

    export const Video = mongoose.model("Video" , videoSchema) 