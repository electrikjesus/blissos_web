const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3010;

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Load data files
function loadDownloadsData() {
  try {
    const downloadsPath = path.join(__dirname, "data", "downloads.json");
    const downloadsData = fs.readFileSync(downloadsPath, "utf8");
    return JSON.parse(downloadsData);
  } catch (error) {
    console.error("Error loading downloads data:", error);
    return { builds: [], metadata: {} };
  }
}

// Basic routes
app.get("/", (req, res) => {
  const downloadsData = loadDownloadsData();

  res.render("index", {
    title: "BlissOS",
    description: "Android for your PC",
    downloads: downloadsData,
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
