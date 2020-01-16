import { Schema, model } from "mongoose";

const FoundPostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },

  tag: { type: String, required: true },
  place: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },

  photos: [
    {
      path: { type: String, required: true, lowercase: true }
    }
  ],

  comment: { type: Number },

  createAt: { type: Date, default: Date.now },
  updateAt: Date
});

export default model("FoundPost", FoundPostSchema);
