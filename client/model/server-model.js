const config = require('../../app.config')
const createDb = require('../../server/db/db.js')

const db = createDb(config.db.appId, config.db.appKey)

export default {
  getAllTodos() {
    return db.getAllTodos()
  }
}
