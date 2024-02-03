import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/', async (c) => {
  return c.json({
    statusCode: 200,
    message: 'This hono application is deployed using CDK!'
  })
})

app.get('/hello', async (c) => {
  return c.json({
    statusCode: 200,
    message: 'Another hello message from Hono, deployed using CDK'
  })
})

export const handler = handle(app)
