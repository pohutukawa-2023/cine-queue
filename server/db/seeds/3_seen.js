export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('seen').del()
  await knex('seen').insert([
    { content_id: 2222, movie_or_show: 'show', user_id: 2 },
    { content_id: 223, movie_or_show: 'movie', user_id: 2 },
    { content_id: 3232, movie_or_show: 'show', user_id: 2 },
  ])
}
