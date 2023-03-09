/**
 * @typedef {Object} Version
 * @property {number} date
 * @property {Uint8Array} snapshot
 * @property {number} clientID
 */
export interface Version {
  date: number;
  snapshot: Uint8Array;
  clientID: number;
}
