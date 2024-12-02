import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  priority: {String, enum: ['LOW', 'MEDIUM', 'HIGH']},
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'statuses' },
  startDate: Date,
  endDate: Date,
  description: {
    type: String,
    required: true,
  },
});

const ObjectiveSchema = new mongoose.Schema({
    title:String,
    status:Boolean
})

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 8
  },
  email: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
  objectives: {
    type: Array,
  },
  objectives: [ObjectiveSchema]
});

export const UserModel = mongoose.model('Users', UserSchema);