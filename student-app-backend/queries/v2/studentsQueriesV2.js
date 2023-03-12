const db = require('../../db');

const { getGradesByStudentIdV2 } = require('./gradesQueriesV2');

const getAllStudentsV2 = async () => {
  const students = await db.any('SELECT * FROM students');
  return students;
};

const getAllStudentsWithGradesV2 = async () => {
  // get all students
  const students = await getAllStudentsV2();
  // for each student...
  for (const student of students) {
    // get the student's id
    const { id } = student;
    // call getGradesByStudentId to get that student's grades
    const grades = await getGradesByStudentIdV2(id);
    // add grades to student
    student.grades = grades;
  }

  // return results
  return students;
};

const getStudentByIdV2 = async (id) => {
  const student = await db.oneOrNone('SELECT * FROM students WHERE id = $1', [
    id,
  ]);
  return student;
};

const addStudentV2 = async (studentData) => {

  const { first_name, last_name, city, company, email, pic, skill } = studentData;
  const createdStudent = await db.one(
    "INSERT INTO students ( first_name, last_name, city, company, email, pic, skill) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [first_name, last_name, city, company, email, pic, skill]
  );
  return createdStudent;
};


module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
  addStudentV2
};
