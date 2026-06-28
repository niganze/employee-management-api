import express from "express";

import {
    register,
    login,
    profile,
} from "../controllers/auth.controller.js";

import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import validateRequest from "../middleware/validation.middleware.js";
import authenticate from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * Register
 */
router.post(
    "/register",
    registerValidator,
    validateRequest,
    register
);

/**
 * Login
 */
router.post(
    "/login",
    loginValidator,
    validateRequest,
    login
);

/**
 * Logged-in User Profile
 */
router.get(
    "/profile",
    authenticate,
    profile
);

export default router;