// Create a new router
const express = require("express");
const router = express.Router();

var shopData = {
  shopName: "The Thirsty Student",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shops: [
    { location: "London", manager: "Alice Smith", address: "123 Oxford Street, London W1" },
    { location: "Manchester", manager: "Bob Johnson", address: "42 Deansgate, Manchester M3" },
    { location: "Birmingham", manager: "Carla Patel", address: "88 Broad Street, Birmingham B1" }
  ]
};

// Handle the main routes
router.get("/", function (req, res) {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData); // ✅ fixed missing quote and parentheses
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

router.get("/search_result", function (req, res) {
  // TODO: search in the database
  res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
  res.send(
    "Hello " +
      req.body.first +
      " " +
      req.body.last +
      ", you are now registered! We will contact you at " +
      req.body.email
  );
});

// ✅ Survey form page
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData); // now passes shopData (contains shopName + productCategories)
});

// ✅ Handle submitted survey
router.post("/survey_result", (req, res) => {
  const { first, last, email, age, drinkCategory, student } = req.body;
  res.render("survey_result.ejs", {
    shopName: shopData.shopName,
    first,
    last,
    email,
    age,
    drinkCategory,
    student
  });
});

// Export the router object so index.js can access it
module.exports = router;