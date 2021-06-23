const express = require("express");
const app = express();
const patientsRoute = require("./routes/patient-route");
const doctorsRoute = require("./routes/doctor-route");

app.use(express.json());
app.use("/patients", patientsRoute);
app.use("/doctors", doctorsRoute);

app.listen(5000, () => console.log("Server is running on port 5000"));
