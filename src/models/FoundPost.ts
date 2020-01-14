import { Schema, model } from "mongoose";

const FoundPostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },

  category: { type: String, required: true },
  place: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },

  photo: [
    {
      url: { type: String, required: true, unique: true, lowercase: true }
    }
  ],

  browse: { type: Number },
  comment: { type: Number },

  createAt: { type: Date, default: Date.now },
  updateAt: Date
});

export default model("FoundPost", FoundPostSchema);
