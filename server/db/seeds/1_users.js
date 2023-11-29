export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { genre: 'comedy', time_to_watch: 20 },
    { genre: 'comedy', time_to_watch: 20 },
    { genre: 'comedy', time_to_watch: 20 },
  ])
}
