const express = require('express')

const model = require('./model')

const router = express.Router();

router.get('/tags', async(req, res, next) => {
    try {
        await model.find()
            .then(result => {
                console.log(result)
                res.status(200).json(result)
            })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/tags', (req, res, next) => {
    const newTag = new model({
        Title: req.body.Title,
        TimeCreated: Date.now(),
        TimeUpdated: Date.now()
    })

    try {
        console.log(newTag)
        newTag.save()
            .then(data => {
                res.send("Done")
            })
            .catch(err => {
                console.log(err)
                res.json({
                    message: err.errmsg
                })
            })

    } catch (er) {
        console.log(er)
    }
})

router.delete('/tags/:id', async(req, res, next) => {
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

module.exports = router