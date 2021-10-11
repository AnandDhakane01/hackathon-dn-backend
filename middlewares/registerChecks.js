const { validateEmail, validatePassword } = require("../utils/validate");

/**
 *  email validation
 *  password validation
 *  password == confirm passwor
 */
// {
//   studentname,
//   email,
//   discordid,
//   password,
//   confirmPassword
//   role,
//   birthdate,
//   github,
// }

const roles = [
    "teamMember",
    "teamLeader",
    "viceTeamleader",
    "batchLeader",
    "admin",
];

const registerInitialChecks = (req, res, next) => {
    const {
        studentname,
        email,
        discordid,
        password,
        role,
        confirmPassword,
        github,
    } = req.body;

    if (
        typeof studentname === "string" &&
        typeof email === "string" &&
        typeof password === "string" &&
        typeof confirmPassword === "string" &&
        typeof discordid === "string" &&
        roles.includes(role) &&
        email.length > 0 &&
        password.length > 7 &&
        confirmPassword == password &&
        validateEmail(email) &&
        validatePassword(password)
    ) {
        next();
    } else {
        res.status(401).send("Initial check failed");
    }
};

module.exports = registerInitialChecks;
