const combineUsers = require('./combineUsers').default;

// Test with sample data
const result = combineUsers(
    ['alice', 'bob'],
    ['charlie', 'dave'],
    ['eve', 'frank']
);

console.log(result);
// Expected output: 
// {
//   users: ['alice', 'bob', 'charlie', 'dave', 'eve', 'frank'],
//   merge_date: '4/16/2026'  (today's date)
// }