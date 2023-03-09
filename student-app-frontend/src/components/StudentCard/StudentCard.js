
import { FaMinus, FaPlus } from 'react-icons/fa';

import './StudentCard.css';

const StudentCard = ({ expanded, onClick, student }) => {
  const { email, company, firstName, lastName, pic, grades, id, skill } =
    student;

  // Converted the grades to numbers
  const numericGrades = grades.map(({score}) => Number(score));

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
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company} </li>
          <li>Skill: {skill}</li>
          <li>Average: {average}%</li>
        </ul>
        {expanded && (
          <div className="StudentCard__grades">
            <ul>
              {grades.map(({id,score},index) => (
                <li key={id}>
                  <span>Test {index + 1}</span> <span>{score}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="StudentCard__controls">
        <button onClick={onClick}>{expanded ? <FaMinus /> : <FaPlus />}</button>
      </div>
    </div>
  );
};

export default StudentCard;
