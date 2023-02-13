const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3010;

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Basic routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "BlissOS",
    description: "Android for your PC",
  });
});

app.get("/licensing", (req, res) => {
  res.render("licensing", {
    title: "Licensing - BlissOS",
    description:
      "Bliss OS brings the best of what Android has to offer to your projects.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
