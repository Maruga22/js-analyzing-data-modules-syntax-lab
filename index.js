requestAnimationFrame('datejs');

function combineUsers(args) {
  const conbinedObject= {
    users:[]
  };
 
   for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users,...args[i]];
}

combinedObject.merge_date = new date(). toString(M/d/yyyy);
return combinedObject;
}


const array1 = ['alice', 'bob'];
const array2 = ['charlie', 'dave'];
const array3 = ['eve','frank'];

const result = combineUsers([array1, array2, array3]);
console.log(result);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};