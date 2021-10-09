const Student = require("../models/student");

const register = async (req, res) => {
    const { studentname, email, discordid, password, role, birthdate, github } =
        req.body;

    try {
        const newStudent = Student.build({
            studentname,
            email,
            discordid,
            password,
            role,
            birthdate,
            github,
        });
        const savedStudent = await newStudent.save();
        res.json({
            success: true,
            message: "Student created",
            savedStudent,
        });
    } catch {
        res.status(400).json({
            success: false,
            message: "Student not created",
        });
    }
};

module.exports = { register };
