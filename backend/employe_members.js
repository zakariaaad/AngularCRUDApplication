const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // Query Get list employee
  router.get('/employee', function (req, res, next) {
    db.query(
      'SELECT employe_id, employe_firstname, employe_lastname, employe_email, employe_address, employe_phone FROM employe_members WHERE employe_deleted=0 LIMIT 10 OFFSET ?',
      [10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  // GET Detail Employee By ID
  router.get('/getEmployeeDetailById/:employe_id', function (req, res, next) {
    db.query(
      'SELECT * FROM employe_members WHERE employe_id = ?',
      [req.params.employe_id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
          console.log(results);
        }
      }
    );
  });

  //Insert Employee

  router.post('/addemployee', (req, res, next) => {
    db.query(
      'INSERT INTO employe_members (employe_firstname, employe_lastname, employe_email, employe_address, employe_phone, employe_created_date) VALUES (?,?,?,?,?,?)',
      [req.body.employe_firstname, req.body.employe_lastname, req.body.employe_email, req.body.employe_address, req.body.employe_phone, new Date(req.body.employe_created_date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

// Delete Employe 

router.delete('/deleteEmployeeById/:employe_id', function (req, res, next) {
    db.query(
      'DELETE FROM events WHERE employe_id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  // the routes are defined here

  return router;
}

module.exports = createRouter;