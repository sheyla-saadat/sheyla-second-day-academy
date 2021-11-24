const startingShift = false
const cutVegtables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands = startingShift || cleanedFish || cutChicken
const noNeedToWashHands = !shouldWashHands // or !startingShift && !cleanedFish && !cutChicken

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)