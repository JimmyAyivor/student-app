
import "./StudentCard.css"
const StudentCard = ({ student }) => {
  const { email, company, firstName, lastName, pic, grades, id, skill } =
    student;
  // Converted the grades to numbers
  const numericGrades = grades && grades.map((grade) => Number(grade));

  // Add up all the grades
  // Init total = 0
  let total = 0;
  // For each grade, add grade to total
  for (const grade of numericGrades) {
    total += grade;
  }

  // Divide total by number of grades and assign to a var
  const average = total / numericGrades.length;

  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info">
        <h2>
          {firstName} {lastName}
        </h2>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company} </li>
          <li>Skill: {skill}</li>
          <li>Average: {average}%</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentCard;