const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const config = require("../config")
router.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
router.use(bodyParser.json())

router.post("/register", (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8)//no. of rounds
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }).then((registeredUser) => {
        console.log("registeredUser", registeredUser)
        var token = jwt.sign({ id: registeredUser._id }, config.secret, {
            expiresIn: 86400//expire in 24 hours
        })
        console.log(token)
    })
    res.send("register successful")
})

module.exports = router