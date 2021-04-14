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

router.get("/:name", (req, res, next) => {
  res.send(`<h1>You are an admin your name is ${req.params.name}</h1>`);
});

router.post("/add-product", (req, res, next) => {
  console.log("req body :", req.body);
  res.redirect("/admin");
});

module.exports = router;
