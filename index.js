const express = require("express");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/adminRoutes");

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "shop.html"));
});

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(3000, () => {
  console.log("server is up and running");
});
