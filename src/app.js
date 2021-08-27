const express = require("express")
const app = express()


const series = require("./routes/seriesroutes")


app.use("/series", series) 

module.exports = app