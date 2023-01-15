import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css"
const StudentList = ({ studentData }) => {
  return (
    <div className="StudentList">
      {studentData && studentData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;