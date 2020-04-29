const express = require('express')
const swaggerUi = require('swagger-ui-express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const swaggerDocument = require('./swagger.json')

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRouter)
app.use(taskRouter)

module.exports = app