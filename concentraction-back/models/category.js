import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({

  name: {
    type: String,
    enum: ['WORK', 'PERSONAL', 'PHOTOGRAPHY', 'ARTICLES', 'OTHER'],
    required: true,
  }
});

export const CategoryModel = mongoose.model('categories', CategorySchema);