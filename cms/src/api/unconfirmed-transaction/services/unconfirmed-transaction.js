'use strict';

/**
 * unconfirmed-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService(
  'api::unconfirmed-transaction.unconfirmed-transaction'
);
