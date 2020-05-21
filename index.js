const db = require('./src/lib/db')

const server = require('./src/server')

db
  .then(() => {
    console.log('Connection OK!')
    server.listen(8080, () => {
      console.log('Server running')
    })
  })
  .catch(error => {
    console.error('Something went wrong', error)
  })
