// Write your solution in this file!
const driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

const newDriver = updateDriverWithKeyAndValue(
  driver, 'name', 'Sam'
);
