import React from "react";
import { useState } from "react";
import "./Modal.css";
import axios from "axios";

export const Modal = ({ show, setShow, data }) => {
  const student = data.filter((stud) => stud._id == show.id);
  const [studentData, setStudentData] = useState(student[0]);
  const updateHandler = () => {
    try {
      const response = axios.put(
        "http://localhost:2620/student/" + show.id,
        studentData
      );
      setStudentData(response);
    } catch (error) {
      console.log(error);
    }
    setShow((prev) => ({ ...prev, view: false }));
  };
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">{show.type} Student Info</h2>

        <form className="form-container">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={studentData.name}
              onChange={(e) => {
                setStudentData((prev) => ({ ...prev, name: e.target.value }));
              }}
              disabled={show.type === "view"}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              placeholder="Enter gender"
              value={studentData.gender}
              onChange={(e) => {
                setStudentData((prev) => ({ ...prev, gender: e.target.value }));
              }}
              disabled={show.type === "view"}
            />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              placeholder="Enter contact number"
              value={studentData.contactNumber}
              onChange={(e) => {
                setStudentData((prev) => ({
                  ...prev,
                  contactNumber: e.target.value,
                }));
              }}
              disabled={show.type === "view"}
            />
          </div>

          <div className="form-group">
            <label>Parent Name</label>
            <input
              type="text"
              placeholder="Enter parent name"
              value={studentData.parentName}
              onChange={(e) => {
                setStudentData((prev) => ({
                  ...prev,
                  parentName: e.target.value,
                }));
              }}
              disabled={show.type === "view"}
            />
          </div>

          <div className="form-group">
            <label>Standard</label>
            <input
              type="text"
              placeholder="Enter standard"
              value={studentData.standard}
              onChange={(e) => {
                setStudentData((prev) => ({
                  ...prev,
                  standard: e.target.value,
                }));
              }}
              disabled={show.type === "view"}
            />
          </div>

          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              placeholder="Enter student ID"
              value={studentData.studentId}
              onChange={(e) => {
                setStudentData((prev) => ({
                  ...prev,
                  studentId: e.target.value,
                }));
              }}
              disabled={show.type === "view"}
            />
          </div>
        </form>

        <div className="modal-actions">
          <button
            className="btn btn-close"
            onClick={() => {
              setShow((prev) => ({ ...prev, view: false }));
            }}
          >
            Close
          </button>
          {show.type === "update" && (
            <button className="btn btn-save" onClick={updateHandler}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
