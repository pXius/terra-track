function objectSort(objArray, objSortKey) {
  return objArray
    .slice()
    .sort((objA, objB) => (objA[objSortKey] > objB[objSortKey] ? 1 : -1));
}

function objectReverseSort(objArray, objSortKey) {
  return objArray
    .slice()
    .sort((objA, objB) => (objA[objSortKey] < objB[objSortKey] ? 1 : -1));
}

module.exports = { objectSort, objectReverseSort };
