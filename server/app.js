const express = require("express");
const app = express();
const client = require("./utils/database");
const bodyParser = require('body-parser');
const employeeRouter = require('./employee/employee.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employees', employeeRouter);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
