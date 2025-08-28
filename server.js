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

function loadLicenseData() {
  try {
    const licensePath = path.join(__dirname, "data", "license-comparison.json");
    const licenseData = fs.readFileSync(licensePath, "utf8");
    return JSON.parse(licenseData);
  } catch (error) {
    console.error("Error loading license data:", error);
    return {
      communityEdition: {},
      commercialEdition: {},
      comparison: { categories: [] },
      migrationPath: {},
      faq: [],
    };
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
  const licenseData = loadLicenseData();

  res.render("licensing", {
    title: "Licensing - BlissOS Community Edition",
    description:
      "Learn about BlissOS Community Edition licensing and compare with Bass OS Commercial Edition.",
    license: licenseData,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
