module.exports = {
  async up(db, client) {
    return db.collection('tasks').updateMany({done: true}, {$set: {done: false}})
  },

  async down(db, client) {
    return db.collection('tasks').updateMany({done: false}, {$set: {done: true}})
  }
};
