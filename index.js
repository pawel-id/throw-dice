const throwDice = () => parseInt(Math.random().toString(6).slice(2, 3)) + 1

if (require.main === module) {
  console.log(throwDice())
} else {
  module.exports = throwDice
}
