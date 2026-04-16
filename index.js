// At the top - import datejs
require('datejs');

// The function
function combineUsers(...args) {
  // Initialize the object
  const combinedObject = {
    users: []
  };
  
  // Merge all arrays using spread operator
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }
  
  // Add today's date in M/d/yyyy format
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');
  
  // Return the object
  return combinedObject;
}

// EXPORT the function (THIS IS CRITICAL FOR TESTING)
module.exports = { combineUsers };

// Test your function
const result = combineUsers(
  ['user1', 'user2'],
  ['user3', 'user4'],
  ['user5']
);

console.log('Return type:', typeof result); // Should be 'object'
console.log('Has users property:', result.hasOwnProperty('users')); // Should be true
console.log('Has merge_date property:', result.hasOwnProperty('merge_date')); // Should be true
console.log('Users array length:', result.users.length); // Should be 5
console.log('Merge date format:', result.merge_date); // Should be like "4/16/2026"
console.log('Full result:', result);