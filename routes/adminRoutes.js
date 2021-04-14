const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin", "admin.html"));
});

router.get("/account", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin", "account.html"));
});

router.get("/dashboard", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "admin", "dashboard.html"));
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../", "views", "admin", "add_products.html")
  );
});

router.post("/add-product", (req, res, next) => {
  console.log("req body :", req.body.prod);
  res.redirect("/");
});

module.exports = router;
