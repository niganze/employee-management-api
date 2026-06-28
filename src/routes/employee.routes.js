import express from "express";

import {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
} from "../controllers/employee.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import validateRequest from "../middleware/validation.middleware.js";
import {
    createEmployeeValidator,
} from "../validators/employee.validator.js";

const router = express.Router();

/**
 * Create Employee
 */
router.post(
    "/",
    authenticate,
    createEmployeeValidator,
    validateRequest,
    createEmployee
);

/**
 * Get All Employees
 */
router.get("/", authenticate, getAllEmployees);

/**
 * Get One Employee
 */
router.get("/:id", authenticate, getEmployeeById);

/**
 * Update Employee
 */
router.put("/:id", authenticate, updateEmployee);

/**
 * Delete Employee
 */
router.delete("/:id", authenticate, deleteEmployee);

export default router;