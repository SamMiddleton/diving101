/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('divers_dive', (table) => {
    table.increments('id').primary()
    table.integer('diver_id').references('divers.id')
    table.integer('dive_id').references('dives.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('divers_dive')
}
