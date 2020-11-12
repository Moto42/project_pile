
//returns true if no character in given string appears more than once.

export const isUnique = function(string) {
  const seenIt = {};
  for( let l of string) {
    if(seenIt[l]) return false;
    seenIt[l] = true;
  }
  return true;
}

export default isUnique;