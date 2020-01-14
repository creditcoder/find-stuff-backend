import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: Date
});

export default model("Category", CategorySchema);
