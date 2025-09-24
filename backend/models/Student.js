const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  standard: {
    type: String,
    required: false,
  },
  studentId: {
    type: String,
    required: true,
  },
});

const StudentModel = mongoose.model("Students", studentSchema);
module.exports = StudentModel;
