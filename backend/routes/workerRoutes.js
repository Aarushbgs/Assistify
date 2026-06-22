const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");

router.get("/nearby", async (req, res) => {
  try {
    const { lat, lng, service } = req.query;

    const workers = await Worker.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [Number(lng), Number(lat)],
          },

          distanceField: "distance",

          maxDistance: 1000,

          spherical: true,
        },
      },

      {
        $match:
          service === "Both"
            ? {
                service: {
                  $in: ["Cook", "Maid"],
                },
              }
            : { service },
      },
    ]);

    res.json(workers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
