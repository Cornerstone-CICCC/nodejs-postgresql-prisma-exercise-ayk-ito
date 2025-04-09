import { Router } from "express";
import employeeController from "../controllers/employee.controller";

const employeeRouter = Router();

employeeRouter.get("/", employeeController.getAllEmployees);
employeeRouter.get("/:id", employeeController.getEmployeeById);
employeeRouter.post("/", employeeController.addEmployee);
employeeRouter.put("/:id", employeeController.updateEmployeeById);
employeeRouter.delete("/:id", employeeController.deleteEmployeeById);

export default employeeRouter;
