import express from "express";
import { GetEmployee, GetEmployeeById, CreateEmployee, UpdateEmployeeById, DeleteEmployeeById} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/employees", GetEmployee);
router.get("/employees/:id", GetEmployeeById);
router.post("/employees", CreateEmployee);
router.put("/employees/:id", UpdateEmployeeById);
router.delete("/employees/:id", DeleteEmployeeById);

export default router;
