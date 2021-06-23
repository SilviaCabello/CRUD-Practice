const express = require("express");
const router = express.Router();
const connection = require("../config");

//route to get all patients
router.get("/", (req, res) => {
  connection.query("SELECT * FROM patient", (err, results) => {
    if (err) {
      res.send("Error retrieving from DataBase");
    } else {
      res.send(results);
    }
  });
});

// route to get patient by id
router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM patient WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error retrieving patient from DataBase");
      } else {
        res.send(results);
      }
    }
  );
});

// route to add a patient
router.post("/", (req, res) => {
  const { name, dateBirth, doctor_id } = req.body;
  connection.query(
    "INSERT INTO patient (name, dateBirth, doctor_id) VALUES (?, ?, ?)",
    [name, dateBirth, doctor_id],
    (err, results) => {
      if (err) {
        res.send("Error adding patient");
      } else {
        res.send("Patient added correctly");
      }
    }
  );
});

// edit a patient
router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE patient SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error changing patient's name");
      } else {
        res.send("Patient's name changed correctly");
      }
    }
  );
});

// delete a patient
router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM patient WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error deleting patient");
      } else {
        res.send("Patiend deleted correctly");
      }
    }
  );
});


module.exports = router;
