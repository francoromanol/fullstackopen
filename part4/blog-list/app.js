const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const logger = require('./utils/logger')
const config = require('./utils/config')

const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')

const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)

module.exports = app
