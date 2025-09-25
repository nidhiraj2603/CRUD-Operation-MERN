import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:2620/Student");
      setData(response.data);
    };
    fetchStudents();
  }, []);
  return (
    <>
      <div className="mainContainer">
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
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.contactNumber}</td>
                  <td>{student.parentName}</td>
                  <td>{student.standard}</td>
                  <td>{student.studentId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
