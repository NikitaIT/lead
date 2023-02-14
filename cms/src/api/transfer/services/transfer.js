'use strict';

/**
 * transfer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transfer.transfer');
