const express = require("express");
const Router = express.Router();
const StudentModel = require("../models/Student");

// ====================== STUDENT CONTROLLER ======================

// GET ALL STUDENTS
Router.get("/student", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error });
  }
});
// CREATE STUDENT
Router.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const student = new StudentModel(req.body);
    const saveStudent = await student.save();
    res.status(201).json(saveStudent);
  } catch (error) {
    res.status(400).json({ message: "Error creating student", error: error });
  }
});
//UPDATE API
Router.put("/student/:id", async (req, res) => {
  try {
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );
    //IF STUDENT NOT FOUND
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    //IF STUDENT IS FOUND
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: "Error updating student", error: error });
  }
});
//DELETE STUDENT
Router.delete("/student/:id", async (req, res) => {
  try {
    const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id);
    //IF STUDENT NOT FOUND
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error: error });
  }
});

module.exports = Router;
