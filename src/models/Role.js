import { Schema, model } from "mongoose";

export const ROLES = ["admin", "caja", "vendedor"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
