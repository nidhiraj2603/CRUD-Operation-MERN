import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { Modal } from "./Components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState({ view: false, type: "", id: "" });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:2620/Student");
        console.log("API Response:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [show]);
  const viewHandler = (id) => {
    setShow({
      view: true,
      type: "view",
      id: id,
    });
  };
  const updateHandler = (id) => {
    setShow({
      view: true,
      type: "update",
      id: id,
    });
  };
  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:2620/student/" + id
      );
    } catch (error) {
      console.log(error);
    }
    setShow((prev) => ({ ...prev, view: false }));
  };
  const createHandler = () => {
    setShow({
      view: true,
      type: "create",
      id: "",
    });
  };
  return (
    <>
      <div className="mainContainer">
        <div className="heading">
          <h1>Student record Details</h1>
        </div>
        <div className="createBtnConatiner">
          <button className="createBtn" onClick={createHandler}>
            Create
          </button>
        </div>
        <div className="tableContainer">
          <table border="1">
            <thead>
              <tr className="tablehead">
                <th>Name</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Parent Name</th>
                <th>Standard</th>
                <th>Student ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name || "-"}</td>
                    <td>{student.gender || "-"}</td>
                    <td>{student.contactNumber || "-"}</td>
                    <td>{student.parentName || "-"}</td>
                    <td>{student.standard || "-"}</td>
                    <td>{student.studentId || "-"}</td>
                    <td>
                      <div className="actionButtons">
                        <button
                          className="viewBtn"
                          onClick={() => viewHandler(student._id)}
                        >
                          View
                        </button>
                        <button
                          className="updateBtn"
                          onClick={() => updateHandler(student._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => deleteHandler(student._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data found</td>
                </tr>
              )}
            </tbody>
          </table>
          {show.view && <Modal show={show} setShow={setShow} data={data} />}
        </div>
      </div>
    </>
  );
}

export default App;
