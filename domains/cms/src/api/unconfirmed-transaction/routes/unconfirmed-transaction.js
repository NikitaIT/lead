'use strict';

/**
 * unconfirmed-transaction router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter(
  'api::unconfirmed-transaction.unconfirmed-transaction'
);
