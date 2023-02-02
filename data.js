const express = require("express");
const router = express.Router();
const {
  getData,
  updateData,
  deleteData,
  addNewData,
} = require("./dataController");

router
  .route("/")
  .get(getData)
  .patch(updateData)
  .post(addNewData)
  .put(deleteData);

module.exports = router;
