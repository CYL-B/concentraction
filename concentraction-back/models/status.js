import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["TODO", "ONGOING", "DONE"],
    required: true,
  },
});

export const CategoryModel = mongoose.model("statuses", StatusSchema);
