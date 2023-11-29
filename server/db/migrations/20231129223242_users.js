export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.integer('auth_id')
    table.string('genre')
    table.integer('time_to_watch')
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
