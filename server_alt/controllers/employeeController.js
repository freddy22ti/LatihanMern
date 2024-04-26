import Employee from "../models/employee.js";
import { success, failed } from "../utils/message.js";

export const CreateEmployee = async (req, res) => {
  const objEmployee = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  return await Employee.create(objEmployee)
    .then((data) => {
      console.log("Data created");
      res.status(200).json(success("Data created"));
    })
    .catch((err) => {
      res.status(500).json(failed("Something went wrong"));
    });
};

export const GetEmployee = async (req, res) => {
  await Employee.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json(failed("Something went wrong"));
    });
};
export const GetEmployeeById = async (req, res) => {
  const { id } = req.params;
  await Employee.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json(failed("Something went wrong"));
    });
};

export const UpdateEmployeeById = async (req, res) => {
  const { id } = req.params;
  const objEmployee = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  return await Employee.findByIdAndUpdate(id, objEmployee)
    .then((data) => {
      console.log("Data updated");
      res.status(200).json(success("Data updated"));
    })
    .catch((err) => {
      res.status(500).json(failed("Something went wrong"));
    });
};
export const DeleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  return await Employee.findByIdAndDelete(id)
    .then((data) => {
      console.log("Data deleted");
      res.status(200).json(success("Data deleted"));
    })
    .catch((err) => {
      res.status(500).json(failed("Something went wrong"));
    });
};
