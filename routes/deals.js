const express = require("express");
const router = express.Router();
const Deal = require("../models/Deal");

// GET All Deals API
router.get("/api/list", async (req, res) => {
  try {
    const deals = await Deal.find({});
    res.json(deals);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// GET All Deals
router.get("/", async (req, res) => {
  try {
    const deals = await Deal.find({});
    res.render("deals/index", {
      title: "Deals",
      deals,
      layout: "./Layouts/layout",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// GET Create Deal Form
router.get('/create', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    res.render('deals/create', { title: 'Create Deal', layout: './Layouts/layout' });
});

// POST Create Deal
router.post('/create', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to create a deal.');
    }

    try {
        const { title, description, imageUrl, category } = req.body;

        // Simple validation
        if (!title || !description || !imageUrl || !category) {
            return res.render('deals/create', {
                title: 'Create Deal',
                layout: './Layouts/layout',
                error: 'All fields are required',
                body: req.body
            });
        }

        const newDeal = new Deal({
            title,
            description,
            imageUrl,
            category,
            score: 0
        });

        await newDeal.save();
        res.redirect('/deals');
    } catch (err) {
        console.error(err);
        res.render('deals/create', {
            title: 'Create Deal',
            layout: './Layouts/layout',
            error: 'Server Error: ' + err.message,
            body: req.body
        });
    }
});

// GET Deal Details
router.get("/:id", async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    if (!deal) {
      return res.status(404).send("Deal not found");
    }
    res.render("deals/show", {
      title: deal.title,
      deal,
      layout: "./Layouts/layout",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// POST Upvote Deal
router.post("/:id/upvote", async (req, res) => {
  try {
    await Deal.findByIdAndUpdate(req.params.id, { $inc: { score: 1 } });
    res.redirect("/deals");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// POST Downvote Deal
router.post("/:id/downvote", async (req, res) => {
  try {
    await Deal.findByIdAndUpdate(req.params.id, { $inc: { score: -1 } });
    res.redirect("/deals");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// POST Comment
router.post('/:id/comments', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to comment.');
    }

    try {
        const deal = await Deal.findById(req.params.id);
        if (!deal) return res.status(404).send('Deal not found');

        const comment = new Comment({
            deal: deal._id,
            user: req.session.user.id,
            content: req.body.content
        });

        await comment.save();
        res.redirect('/deals/' + deal._id);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// POST Vote
router.post('/:id/vote', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to vote.');
    }

    const { direction } = req.body; // 'up' or 'down'
    const value = direction === 'up' ? 1 : -1;
    const dealId = req.params.id;
    const userId = req.session.user.id;

    try {
        const deal = await Deal.findById(dealId);
        if (!deal) return res.status(404).send('Deal not found');

        const existingVote = await Vote.findOne({ deal: dealId, user: userId });

        if (existingVote) {
            if (existingVote.value === value) {
                // User voted same way - ignore or return message
                return res.redirect('back'); // Or show error "You already voted this way"
            } else {
                // User changing vote (e.g. +1 to -1)
                // Score change: remove old (+1 becomes -1 means -2 total change)
                deal.score -= existingVote.value; // Remove old
                deal.score += value; // Add new
                existingVote.value = value;
                await existingVote.save();
                await deal.save();
            }
        } else {
            // New vote
            const vote = new Vote({ deal: dealId, user: userId, value });
            await vote.save();
            deal.score += value;
            await deal.save();
        }

        res.redirect('back');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error: ' + err.message);
    }
});

module.exports = router;
