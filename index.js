// Write your solution in this file!
const driver = {

};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

const newDriver = updateDriverWithKeyAndValue(
  driver, 'name', 'Sam'
);

const newDriver = updateDriverWithKeyAndValue(
  driver, 'address', '11 Broadway'
);
