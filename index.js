// Write your solution in this file!
let driver = {
  name: 'Sam'
};

let newdriver = {
};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {address: '11 Broadway'})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign (driver, {address: '12 Broadway'})
}

function deleteFromDriverByKey(driver, key){
  return Object.assign(newdriver)
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return Object.assign(newdriver)
}
