const express = require('express');
const students = express.Router();

const {
    getAllStudents,
    getStudent
} = require("../queries/students");

students.get('/', async (request, response) => {
    const allStudents = await getAllStudents();
    if (allStudents[0]) {
        response.status(200).json({data: allStudents});
    } else {
        res.status(500).json({ error: "server error!" });
    }

})


students.get("/:id", async (request, response) => {
    const { id } = request.params;
    const student = await getStudent(id);
    if (student.id) {
        response.status(200).json({data :student});
    } else {
        res.status(404).json({ error: "student not found" });
    }
});


module.exports = students