const express = require("express");

const model = require("./model");
const tagmodel = require("../tags/model");

const router = express.Router();

router.get("/bookmarks", async (req, res, next) => {
  try {
    await model.find().then((result) => {
      console.log(result);
      res.status(200).json(result);
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/bookmarks", (req, res, next) => {
  const Bookmark = new model({
    Title: req.body.Title,
    Link: req.body.Link,
    publisher: req.body.publisher,
    TimeCreated: Date.now(),
    TimeUpdated: Date.now(),
  });
  // Bookmark.tags.push(req.body.tag)

  try {
    console.log(Bookmark);
    Bookmark.save()
      .then((data) => {
        res.send("Done");
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: err.errmsg,
        });
      });
  } catch (er) {
    console.log(er);
  }
});

router.patch("/bookmarks/:bookmarkID/addtag", (req, res, next) => {
  tagmodel.countDocuments(
    {
      _id: req.body.TagId,
    },
    function (err, count) {
      if (count > 0) {
        try {
          model
            .updateOne(
              { _id: req.params.bookmarkID },
              { $push: { Tags: req.body.TagId } },
              {TimeUpdated: Date.now()}
            )
            .then((result) => {
              console.log(result);
              res.status(200).json(result);
            });
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
      } else {
        res.send("Tag does not exist");
      }
    }
  );
});

router.patch("/bookmarks/:bookmarkID/deltag/:TagId", (req, res, next) => {
  tagmodel.countDocuments(
    {
      _id: req.params.TagId,
    },
    function (err, count) {
      if (count > 0) {
        try {
          model
            .updateOne(
              { _id: req.params.bookmarkID },
              { $pull: { Tags: req.params.TagId } },
              {TimeUpdated: Date.now()}
            )
            .then((result) => {
              console.log(result);
              res.status(200).json(result);
            });
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
      } else {
        res.send("Tag does not exist");
      }
    }
  );
});
router.delete('/bookmarks/:id', async(req, res, next) => {
    try {
        await model.remove({ _id: req.params.id })
            .then(result => {
                console.log(result)
                res.status(200).json(result)
            })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router;
