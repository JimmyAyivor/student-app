const studentData = require('../studentData.json')

const getAllStudents = async () => {
    try {
        const allTickets = studentData.students;
        return allTickets;
    } catch (err) {
        return err;
    }
};

const getStudent = async (studentId) => {
    try {
        const student = studentData.students.find(student => {
            return student.id === studentId;
        })
        return student;
    } catch (err) {
        return err;
    }
};





module.exports = {
    getAllStudents,
    getStudent
};
