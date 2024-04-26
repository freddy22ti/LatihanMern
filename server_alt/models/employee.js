import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  level: { type: String, required: true },
});

export default mongoose.model("Employee", employeeSchema);
