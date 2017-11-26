// Write your solution in this file!
const driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value})
}

const newDriver = updateDriverWithKeyAndValue(
  driver, 'address', '11 Broadway'
);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object. assign (driver, 'address', '12 Broadway')
}
