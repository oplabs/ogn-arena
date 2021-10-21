function add0xPrefix(v) {
  if (v.startsWith('0x')) {
    return v
  }
  return `0x${v}`
}

function remove0xPrefix(v) {
  if (v.startsWith('0x')) {
    return v.slice(2)
  }
  return v
}

function isHex(v) {
  return v.match(/^[A-Fa-f0-9]+$/) !== null
}

module.exports = {
  add0xPrefix,
  remove0xPrefix,
  isHex
}
