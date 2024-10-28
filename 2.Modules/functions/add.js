function add(a, b) {
  return a + b
}

function addAndMultiply(a, b, c) {
  return add(a, b) * c
}

module.exports = { add, addAndMultiply }
