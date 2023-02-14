'use strict';

/**
 * unconfirmed-transaction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::unconfirmed-transaction.unconfirmed-transaction'
);
