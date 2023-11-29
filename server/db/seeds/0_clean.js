export function seed(knex) {
  return knex('users').del()
}
