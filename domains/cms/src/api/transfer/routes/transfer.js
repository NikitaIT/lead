'use strict';

/**
 * transfer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transfer.transfer');
