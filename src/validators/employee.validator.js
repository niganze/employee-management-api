import { body } from "express-validator";

export const createEmployeeValidator = [

    body("firstName")
        .notEmpty()
        .withMessage("First name is required."),

    body("lastName")
        .notEmpty()
        .withMessage("Last name is required."),

    body("email")
        .isEmail()
        .withMessage("Valid email is required."),

    body("phone")
        .notEmpty()
        .withMessage("Phone is required."),

    body("position")
        .notEmpty()
        .withMessage("Position is required."),

    body("department")
        .notEmpty()
        .withMessage("Department is required."),

    body("salary")
        .isNumeric()
        .withMessage("Salary must be a number."),

    body("hireDate")
        .isISO8601()
        .withMessage("Hire date must be a valid date (YYYY-MM-DD)."),
];