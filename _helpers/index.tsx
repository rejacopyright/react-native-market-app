export const mapRecursive: any = (oldArray: any, callback: any, newArray: any = []) => {
  if (oldArray.length <= 0) {
    return newArray
  } else {
    let [item, ...rest] = oldArray
    //checks if the item has a children to apply on it the recursion
    if (item?.children) {
      //the item with children is cloned to avoid mutating the original array when applying the recursion
      item = { ...item, children: mapRecursive(item?.children, callback) }
    }
    //create an array of the current new array and the result of the current item and the callback function
    const interimArray = [...newArray, callback(item)]
    //return a recursive call to to map to process the next item.
    return mapRecursive(rest, callback, interimArray)
  }
}
