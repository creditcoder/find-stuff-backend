import { Schema, model } from "mongoose";

const RoomSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      autopopulate: { select: "name phone photo" }
    }
  ],
  label: { type: String, text: true }
});

RoomSchema.plugin(require("mongoose-autopopulate"));

export default model("Room", RoomSchema);
