const app = require("../app.js");
const mongoose = require('mongoose')

require('dotenv').config()
const { PORT, DB_HOST } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('DB connection established successfully')
    app.listen(PORT, () => {
      console.log(`Server running. Use API on port: ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })