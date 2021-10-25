function getPolygonChildChainManager(polygonChainId) {
  if (polygonChainId == 80001 || process.env.NODE_ENV == 'test') {
    // Mumbai Testnet
    return '0xb5505a6d998549090530911180f38aC5130101c6'
  } else if (this.polygonChainId == 137) {
    // Polygon
    return '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'
  } else {
    throw new Error('Unsupported Polygon chainId')
  }
}

module.exports = {
  getPolygonChildChainManager
}
