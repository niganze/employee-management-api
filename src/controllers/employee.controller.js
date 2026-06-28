import prisma from "../config/prisma.js";

/**
 * CREATE EMPLOYEE
 * POST /api/employees
 */
export const createEmployee = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            position,
            department,
            salary,
            hireDate,
        } = req.body;

        const existing = await prisma.employee.findUnique({
            where: { email },
        });

        if (existing) {
            return res.status(409).json({
                success: false,
                message: "Employee already exists with this email.",
            });
        }

        const employee = await prisma.employee.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                position,
                department,
                salary: parseFloat(salary),
                hireDate: new Date(hireDate),
            },
        });

        return res.status(201).json({
            success: true,
            message: "Employee created successfully.",
            data: employee,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * GET ALL EMPLOYEES
 * GET /api/employees
 */
export const getAllEmployees = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || "";

        const skip = (page - 1) * limit;

        const employees = await prisma.employee.findMany({
            where: {
                OR: [
                    { firstName: { contains: search } },
                    { lastName: { contains: search } },
                    { email: { contains: search } },
                ],
            },
            skip,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        });

        const total = await prisma.employee.count();

        return res.status(200).json({
            success: true,
            data: employees,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        next(error);
    }
};

/**
 * GET SINGLE EMPLOYEE
 * GET /api/employees/:id
 */
export const getEmployeeById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const employee = await prisma.employee.findUnique({
            where: { id },
        });

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found.",
            });
        }

        return res.status(200).json({
            success: true,
            data: employee,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * UPDATE EMPLOYEE
 * PUT /api/employees/:id
 */
export const updateEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const employee = await prisma.employee.findUnique({
            where: { id },
        });

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found.",
            });
        }

        const updated = await prisma.employee.update({
            where: { id },
            data: req.body,
        });

        return res.status(200).json({
            success: true,
            message: "Employee updated successfully.",
            data: updated,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * DELETE EMPLOYEE
 * DELETE /api/employees/:id
 */
export const deleteEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const employee = await prisma.employee.findUnique({
            where: { id },
        });

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found.",
            });
        }

        await prisma.employee.delete({
            where: { id },
        });

        return res.status(200).json({
            success: true,
            message: "Employee deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};