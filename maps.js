//DATA STRUCTURES: MAPS//

/////////////////////////////////////////////////////////////

//Examples:

const mapping = new Map([['name', 'Sammie'], ['age', 21], ['favColor', 'violet']]); // ['key', 'value']
const map = new Map();

map.set('paperclips', 77);
map.set('staples', 12);


const name = mapping.get('name');                              //stores the value of 'name' in a variable
const paperclips = map.get('paperclips');

mapping.delete('favColor');                                    //deletes value at key: 'favColor'
console.log('mapping:', mapping);

mapping.clear();                                               //clear entire mapping
console.log('mapping after clear():', mapping);

console.log(map.has('has paperclips:', 'paperclips'));        //returns boolean of whether key 'paperclips' exists
console.log('map size:', map.size);                           //returns the size of the map


//iterate over all the keys
for (const key of map.keys()) {
  console.log(key);
}

//iterate over all the values
for (const value of map.values()) {
  console.log(value);
}

//iterate of both the keys and the values of a map
for (const [key, value] of map) {
  console.log(key, value);
}
