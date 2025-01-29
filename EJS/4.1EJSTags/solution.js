import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs");
});

app.post("/submit", (req, res) => {
  const submitedData = req.body["lname"] + req.body["fname"];
  res.render("solution.ejs", { submitedData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
