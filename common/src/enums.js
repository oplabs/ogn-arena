/**
 * IMPORTANT: If you add an entry to an enum below, do not forget to add
 *  a migration script to add the enum to the DB.
 */

class Enum extends Array {
  constructor(...args) {
    super(...args)

    for (const k of args) {
      if (k instanceof Array) {
        this[k[0]] = k[1]
      } else {
        this[k] = k
      }
    }
  }
}

const NFTStatuses = new Enum(
  'Created', // NFT was created prior to an auction but hasn't been attributed to an owner yet.
  'Owned',
  'ForSale',
  'Funding',
  'Transferring', // NFT is in the process of being exported to an external address.
  'Transferred', // NFT was exported to an external address.
  'Locked'
)

const EntityType = new Enum(
  'Hero',
  'Item',
  'Monster'  // probably won't be used
)

module.exports = {
  NFTStatuses,
  EntityType
}
