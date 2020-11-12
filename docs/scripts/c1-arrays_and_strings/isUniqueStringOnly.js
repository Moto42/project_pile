export const isUniqueStringOnly = function(string) {
  for(let i in string) {
    const letter = string[i];
    const slice = string.slice(Number(i)+1);
    if(slice.includes(letter)) return false;
  }
  return true;
}

export default isUniqueStringOnly;