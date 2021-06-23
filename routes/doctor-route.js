const express = require("express");
const router = express.Router();
const connection = require("../config");

// route to see all doctors
router.get("/", (req, res) => {
  connection.query("SELECT * FROM doctor", (err, results) => {
    if (err) {
      res.send("Error retrieving doctors from DataBase");
    } else {
      res.send(results);
    }
  });
});

// route to see all patients from a doctor
router.get("/:id/patients", (req, res) => {
  connection.query(
    "SELECT * FROM patient WHERE doctor_id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error retrieving patients");
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
