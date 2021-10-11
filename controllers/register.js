const Student = require("../models/student");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const saltRounds = 10;

const register = async (req, res) => {
    const { studentname, email, discordid, password, role, github } = req.body;

    try {
        // check if email already exists
        const alreadyExists = await Student.findOne({
            where: {
                [Op.or]: [{ studentname: studentname }, { email: email }],
            },
        });

        if (alreadyExists) {
            res.status(401).send("Email already exists!");
        }

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newStudent = new Student({
            studentname: studentname,
            email: email.toLowerCase(),
            discordid: discordid,
            password: hash,
            role: role,
            github: github,
        });

        const savedStudent = await newStudent.save();

        res.json({
            success: true,
            message: "Student created",
            savedStudent,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Student not created",
        });
    }
};

module.exports = { register };
