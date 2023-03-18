const express = require('express');
const router = express.Router();
const Employee = require('./employee.schema');

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getEmployee, (req, res) => {
  res.json(res.employee);
});

router.post('/', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
    walletAddress: req.body.walletAddress,
    orgId: req.body.orgId,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', getEmployee, async (req, res) => {
  if (req.body.name != null) {
    res.employee.name = req.body.name;
  }
  if (req.body.email != null) {
    res.employee.email = req.body.email;
  }
  if (req.body.position!= null) {
    res.employee.position = req.body.position;
  }
  if (req.body.walletAddress != null) {
    res.employee.walletAddress = req.body.walletAddress;
  }

  try {
    const updatedEmployee = await res.employee.save();
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getEmployee, async (req, res) => {
  try {
    await res.employee.deleteOne({id : req.params.id});
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getEmployee(req, res, next) {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.employee = employee;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
