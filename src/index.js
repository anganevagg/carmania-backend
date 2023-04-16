const app = require('./server')
const { PORT }  = require('./config/config')
const port = PORT || 8080

app.listen(port, () => {
  console.log(`app on http://localhost:${port}`)
})