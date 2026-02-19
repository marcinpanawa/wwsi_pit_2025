const express = require("express");
const router = express.Router();
const Tip = require("../models/Tip");

/**
 * Auth middleware
 */
function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/tips/new");
  }
  next();
}

/**
 * Public form
 */
router.get("/new", (req, res) => {
  res.render("tips/new", { title: "Dodaj sugestię" });
});

/**
 * Create tip (public)
 */
router.post("/", async (req, res) => {
  try {
    const { url, message, email } = req.body;

    if (!url || !message) {
      return res.render("tips/new", {
        title: "Dodaj sugestię",
        error: "URL i opis są wymagane"
      });
    }

    await Tip.create({ url, message, email });

    res.render("tips/success", { title: "Dziękujemy" });
  } catch (e) {
    res.render("tips/new", { title: "Dodaj sugestię", error: "Błąd zapisu" });
  }
});

/**
 * List — logged only
 */
router.get("/", requireAuth, async (req, res) => {
  const tips = await Tip.find().sort({ createdAt: -1 });
  res.render("tips/index", { title: "Sugestie", tips });
});

/**
 * Details
 */
router.get("/:id", requireAuth, async (req, res) => {
  const tip = await Tip.findById(req.params.id);
  if (!tip) return res.redirect("/tips");

  res.render("tips/show", { title: "Szczegóły sugestii", tip });
});

/**
 * Delete
 */
router.post("/:id/delete", requireAuth, async (req, res) => {
  await Tip.findByIdAndDelete(req.params.id);
  res.redirect("/tips");
});

/**
 * Convert to deal (prefill)
 */
router.get("/:id/create-deal", requireAuth, async (req, res) => {
  const tip = await Tip.findById(req.params.id);
  if (!tip) return res.redirect("/tips");

  const query = new URLSearchParams({
    title: tip.message.substring(0, 60),
    description: tip.message,
    category: "Other",
    imageUrl: "",
    tipId: tip._id
  }).toString();

  res.redirect("/deals/create?" + query);
});

module.exports = router;
