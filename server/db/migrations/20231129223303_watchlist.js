export function up(knex) {
  return knex.schema.createTable('watchlist', (table) => {
    table.increments('id').primary()
    table.integer('content_id')
    table.string('movie_or_show')
    table.integer('user_id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('watchlist')
}
